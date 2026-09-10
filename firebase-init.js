(function () {
    'use strict';

    // ============================================================
    // 🔥 CONFIGURAÇÃO DO FIREBASE — PREENCHA COM SEUS DADOS 🔥
    // ============================================================
    // 1. Acesse: https://console.firebase.google.com
    // 2. Crie um projeto (ex: "tatie-atelie-cestas")
    // 3. Clique em "⚙️ Configurações do projeto" → role até "Seus aplicativos" → + (web)
    // 4. Copie apenas o objeto firebaseConfig abaixo e cole aqui.
    // ============================================================
    const FIREBASE_CONFIG = {
        apiKey:            'SUA_API_KEY_AQUI',
        authDomain:        'SEU-PROJETO.firebaseapp.com',
        projectId:         'SEU-PROJETO',
        storageBucket:     'SEU-PROJETO.appspot.com',
        messagingSenderId: '000000000000',
        appId:             '1:000000000000:web:abc123def456'
    };
    // ============================================================
    // ❗ NÃO EDITE ABAIXO DESSA LINHA ❗
    // ============================================================

    const FIREBASE_STORAGE_FOLDER = 'cestas/';
    const FIREBASE_COLLECTION = 'cestas';
    const isFirebaseConfigured =
        FIREBASE_CONFIG.apiKey !== 'SUA_API_KEY_AQUI' &&
        FIREBASE_CONFIG.projectId !== 'SEU-PROJETO';

    let app = null;
    let db = null;
    let storage = null;
    let firestoreLib = null;
    let storageLib = null;
    let initPromise = null;

    function isEnabled() {
        return isFirebaseConfigured;
    }

    function waitForModules() {
        return new Promise((resolve, reject) => {
            if (window.__firebaseModules) return resolve(window.__firebaseModules);
            const to = setTimeout(() => reject(new Error('Firebase SDK não carregou a tempo.')), 10000);
            window.addEventListener('firebase:ready', () => {
                clearTimeout(to);
                resolve(window.__firebaseModules);
            }, { once: true });
        });
    }

    async function init() {
        if (initPromise) return initPromise;
        initPromise = (async () => {
            try {
                if (!isFirebaseConfigured) {
                    console.warn('[Firebase] Configuração ausente — rodando no modo Local (localStorage). Edite firebase-init.js para habilitar.');
                    return false;
                }
                const mod = await waitForModules();
                app = mod.initializeApp(FIREBASE_CONFIG);
                db = mod.getFirestore(app);
                storage = mod.getStorage(app);

                // Carrega dependências adicionais lazy-load via dynamic import
                firestoreLib = await import('https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js');
                storageLib = await import('https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js');

                console.log('[Firebase] Conectado com sucesso · projeto: ' + FIREBASE_CONFIG.projectId);
                return true;
            } catch (err) {
                console.error('[Firebase] Falha ao inicializar:', err);
                return false;
            }
        })();
        return initPromise;
    }

    // ---------- STORAGE: Upload de imagens ----------
    async function uploadImage(file, onProgress) {
        const ready = await init();
        if (!ready) throw new Error('Firebase não configurado.');

        const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
        const path = `${FIREBASE_STORAGE_FOLDER}${safeName}`;
        const storageRef = storageLib.ref(storage, path);

        const uploadTask = storageLib.uploadBytesResumable(storageRef, file, {
            contentType: file.type || 'application/octet-stream'
        });

        return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
                (snapshot) => {
                    if (typeof onProgress === 'function') {
                        const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        onProgress(pct);
                    }
                },
                (err) => reject(err),
                async () => {
                    const url = await storageLib.getDownloadURL(uploadTask.snapshot.ref);
                    resolve({ url, path, name: safeName });
                }
            );
        });
    }

    function mapDocToProduct(doc) {
        const d = doc.data();
        return {
            id: d.id || Number(doc.id) || doc.id,
            name: d.titulo || d.nome || d.name || 'Sem nome',
            image: d.imagem_url || d.image || d.imagem || '',
            items: Array.isArray(d.itens) ? d.itens : (typeof d.itens === 'string' ? d.itens.split(/\r?\n/).filter(Boolean) : (Array.isArray(d.items) ? d.items : [])),
            description: d.descricao || d.description || '',
            price: typeof d.preco === 'number' ? d.preco : (typeof d.price === 'number' ? d.price : 0),
            ativo: d.ativo !== false,
            criado_em: d.criado_em ? (d.criado_em.toDate ? d.criado_em.toDate().toISOString() : String(d.criado_em)) : null
        };
    }

    function mapProductToDoc(p) {
        const now = firestoreLib ? firestoreLib.serverTimestamp() : new Date().toISOString();
        return {
            titulo: p.name || String(p.titulo || ''),
            descricao: p.description || String(p.descricao || ''),
            preco: Number(p.price || p.preco || 0),
            itens: Array.isArray(p.items) ? p.items : (typeof p.itens === 'string' ? p.itens.split(/\r?\n/).filter(Boolean) : []),
            imagem_url: p.image || p.imagem_url || '',
            ativo: p.ativo !== false,
            atualizado_em: now
        };
    }

    // ---------- FIRESTORE: CRUD de cestas ----------
    async function loadCestas() {
        const ready = await init();
        if (!ready) return { ok: false, fallback: true };

        try {
            const col = firestoreLib.collection(db, FIREBASE_COLLECTION);
            const q = firestoreLib.query(col, firestoreLib.orderBy('criado_em', 'desc'));
            const snap = await firestoreLib.getDocs(q);
            const list = [];
            snap.forEach((doc) => list.push(mapDocToProduct(doc)));
            return { ok: true, list };
        } catch (err) {
            console.error('[Firebase] Falha ao carregar cestas:', err);
            return { ok: false, error: err.message };
        }
    }

    async function saveCesta(productData, docId) {
        const ready = await init();
        if (!ready) throw new Error('Firebase não configurado.');

        const payload = mapProductToDoc(productData);

        if (docId) {
            const ref = firestoreLib.doc(db, FIREBASE_COLLECTION, String(docId));
            await firestoreLib.setDoc(ref, { ...payload, atualizado_em: payload.atualizado_em }, { merge: true });
            return { id: String(docId), ...productData, image: payload.imagem_url };
        }
        const col = firestoreLib.collection(db, FIREBASE_COLLECTION);
        const data = { ...payload, criado_em: payload.atualizado_em, id: productData.id || Date.now() };
        const ref = await firestoreLib.addDoc(col, data);
        return { id: ref.id, ...productData, image: payload.imagem_url };
    }

    async function deleteCesta(docId) {
        const ready = await init();
        if (!ready) throw new Error('Firebase não configurado.');
        const ref = firestoreLib.doc(db, FIREBASE_COLLECTION, String(docId));
        await firestoreLib.deleteDoc(ref);
        return true;
    }

    async function syncLocalToFirebase(localProducts) {
        const ready = await init();
        if (!ready) return { ok: false, message: 'Firebase não configurado.' };

        let okCount = 0;
        let fail = 0;
        for (const p of localProducts) {
            try {
                await saveCesta(p, String(p.id));
                okCount++;
            } catch (e) {
                console.warn('Falhou ao enviar cesta ', p.name, e);
                fail++;
            }
        }
        return { ok: true, okCount, fail };
    }

    // ---------- API pública ----------
    window.FirebaseAPI = {
        CONFIG: FIREBASE_CONFIG,
        COLLECTION: FIREBASE_COLLECTION,
        STORAGE_FOLDER: FIREBASE_STORAGE_FOLDER,
        isEnabled,
        init,
        uploadImage,
        loadCestas,
        saveCesta,
        deleteCesta,
        syncLocalToFirebase,
        get initialized() { return initPromise ? initPromise : Promise.resolve(false); }
    };

    document.dispatchEvent(new CustomEvent('firebase:init:ready', {
        detail: { isEnabled: isFirebaseConfigured }
    }));
})();
