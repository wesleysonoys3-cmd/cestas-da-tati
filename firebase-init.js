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
        apiKey:            'AIzaSyCZdnA3ndvEJ_tf6yq5-dUmQT6NdZT9cJ8',
        authDomain:        'tatie-atelie-cestas.firebaseapp.com',
        projectId:         'tatie-atelie-cestas',
        storageBucket:     'tatie-atelie-cestas.firebasestorage.app',
        messagingSenderId: '985398626618',
        appId:             '1:985398626618:web:1cda3d2bdb96b437cc6803'
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
                // Storage explícito com o nome do bucket (evita erro de "bucket não encontrado"
                // se a conta Firebase tiver múltiplos buckets ou se o SDK não carregou config direito).
                storage = mod.getStorage(app, FIREBASE_CONFIG.storageBucket);

                // Carrega dependências adicionais lazy-load via dynamic import
                firestoreLib = await import('https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js');
                storageLib = await import('https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js');

                console.log('[Firebase] Conectado com sucesso · projeto: ' + FIREBASE_CONFIG.projectId + ' · storage bucket: ' + FIREBASE_CONFIG.storageBucket);
                return true;
            } catch (err) {
                console.error('[Firebase] Falha ao inicializar:', err);
                return false;
            }
        })();
        return initPromise;
    }

    /**
     * Pinga o Storage e o Firestore para verificar se estão ATIVADOS e com REGRAS PUBLICADAS.
     * Retorna { ok: boolean, code: 'ok'|'bucket_not_found'|'permission_denied'|'firestore_disabled'|'unknown',
     *           message: string, rawError: any }
     * Chamado ANTES de qualquer upload/salvamento para dar erro rápido e amigável.
     */
    async function pingFirebaseServices() {
        const ready = await init();
        if (!ready) {
            return { ok: false, code: 'firebase_not_configured', message: 'Firebase não foi inicializado. Verifique as credenciais e sua conexão com a internet.', rawError: null };
        }

        const result = { ok: true, code: 'ok', message: 'Firebase (Storage + Firestore) está ativo e com regras publicadas.', rawError: null };

        /* --- 1) PING STORAGE: tentamos listar os arquivos da pasta cestas/ --- */
        try {
            const folderRef = storageLib.ref(storage, FIREBASE_STORAGE_FOLDER);
            // listAll com Promise.race de 6s para não ficar esperando infinito
            const timeoutPing = new Promise((_, rj) => setTimeout(() => rj(new Error('timeout_ping_storage_6s')), 6000));
            await Promise.race([
                storageLib.listAll(folderRef).catch(async (errStorage) => {
                    // "404 Object 'cestas/' does not exist" = pasta ainda não existe, mas bucket SIM existe e regras permitem leitura. OK.
                    if (errStorage && errStorage.code && (
                        errStorage.code === 'storage/object-not-found' ||
                        /object.*not.*exist/i.test(errStorage.message || '')
                    )) {
                        return { _empty: true };
                    }
                    // Repassa qualquer outro erro (403 Permission denied, Bucket não existe etc)
                    throw errStorage;
                }),
                timeoutPing
            ]);
            console.log('[Firebase PING] Storage OK · bucket: ' + FIREBASE_CONFIG.storageBucket + ' · pasta "' + FIREBASE_STORAGE_FOLDER + '" acessível.');
        } catch (storageErr) {
            result.ok = false;
            const msg = (storageErr && storageErr.message) || String(storageErr);
            if (storageErr && storageErr.code) {
                // Códigos oficiais Firebase Storage
                switch (storageErr.code) {
                    case 'storage/bucket-not-found':
                    case 'storage/unknown':
                        if (/bucket.*not.*found|does.*not.*have.*storage|project.*not.*enabled/i.test(msg)) {
                            result.code = 'bucket_not_found';
                            result.message = 'O BUCKET DE STORAGE NÃO EXISTE. Você precisa ativar o Storage no Console do Firebase (clicar no botão "Get Started / Começar") para criar o bucket ' + FIREBASE_CONFIG.storageBucket + '.';
                        } else {
                            result.code = 'storage_error';
                            result.message = 'Erro no Storage: ' + storageErr.code + ' — ' + msg;
                        }
                        break;
                    case 'storage/unauthorized':
                    case 'storage/permission-denied':
                    case 'permission-denied':
                        result.code = 'permission_denied';
                        result.message = 'REGRAS DO STORAGE NÃO PUBLICADAS (Permission Denied). O Firebase bloqueou a leitura/escrita na pasta "' + FIREBASE_STORAGE_FOLDER + '". Abra Storage → Regras e clique em Publicar.';
                        break;
                    case 'storage/retry-limit-exceeded':
                    case 'storage/canceled':
                        result.code = 'timeout';
                        result.message = 'Timeout ao contatar Storage (6s). Sua internet está ruim? Ou as regras estão bloqueando sem retornar erro.';
                        break;
                    default:
                        result.code = 'storage_error';
                        result.message = 'Erro no Storage (' + storageErr.code + '): ' + msg;
                }
            } else if (msg === 'timeout_ping_storage_6s') {
                result.code = 'timeout';
                result.message = 'Timeout ao contatar Storage (6s). O Firebase não respondeu — provavelmente as Regras do Storage estão bloqueando ou sua internet está ruim.';
            } else {
                // Fallback não categorizado
                result.code = 'storage_error';
                result.message = 'Erro no Storage: ' + msg;
            }
            result.rawError = storageErr;
            console.error('[Firebase PING] Storage FALHOU:', result.code, storageErr);
            // Mesmo se Storage falhar, ainda queremos testar Firestore → não retorna ainda
        }

        /* --- 2) PING FIRESTORE: tenta getDocs vazio com limit(1) --- */
        try {
            const colRef = firestoreLib.collection(db, FIREBASE_COLLECTION);
            const q = firestoreLib.query(colRef, firestoreLib.limit(1));
            const timeoutPing = new Promise((_, rj) => setTimeout(() => rj(new Error('timeout_ping_firestore_6s')), 6000));
            await Promise.race([
                firestoreLib.getDocs(q),
                timeoutPing
            ]);
            console.log('[Firebase PING] Firestore OK · coleção "' + FIREBASE_COLLECTION + '" acessível.');
        } catch (firestoreErr) {
            const msg = (firestoreErr && firestoreErr.message) || String(firestoreErr);
            // Se Storage já tá OK, ainda assim marcamos geral não OK se Firestore falhar
            if (result.ok) {
                result.ok = false;
                result.rawError = firestoreErr;
            } else {
                // Armazena erro firestore concatenado na message
                result.rawError = { storageError: result.rawError, firestoreError: firestoreErr };
            }

            let fsCode = 'firestore_error';
            let fsMsg = '';
            if (firestoreErr && firestoreErr.code) {
                switch (firestoreErr.code) {
                    case 'permission-denied':
                    case 'unauthenticated':
                        fsCode = 'firestore_permission_denied';
                        fsMsg = 'REGRAS DO FIRESTORE NÃO PUBLICADAS (Permission Denied). Abra Firestore → Regras e clique em Publicar.';
                        break;
                    case 'not-found':
                    case 'failed-precondition':
                        if (/database.*not.*exist|firestore.*not.*enabled/i.test(msg)) {
                            fsCode = 'firestore_disabled';
                            fsMsg = 'FIRESTORE NÃO FOI ATIVADO. Abra Firestore Database no Console e clique em "Create database" (modo Native).';
                        } else {
                            fsMsg = 'Erro no Firestore (' + firestoreErr.code + '): ' + msg;
                        }
                        break;
                    case 'deadline-exceeded':
                    case 'unavailable':
                        fsCode = 'timeout';
                        fsMsg = 'Timeout ao contatar Firestore (6s). Internet ruim ou regras bloqueando.';
                        break;
                    default:
                        fsMsg = 'Erro no Firestore (' + firestoreErr.code + '): ' + msg;
                }
            } else if (msg === 'timeout_ping_firestore_6s') {
                fsCode = 'timeout';
                fsMsg = 'Timeout ao contatar Firestore (6s). O Firebase não respondeu.';
            } else {
                fsMsg = 'Erro no Firestore: ' + msg;
            }

            if (!result.ok && result.message) {
                result.message = result.message + ' · Também: ' + fsMsg;
            } else {
                result.code = fsCode;
                result.message = fsMsg;
            }
            console.error('[Firebase PING] Firestore FALHOU:', fsCode, firestoreErr);
        }

        return result;
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

    async function updateCesta(docId, partial) {
        const ready = await init();
        if (!ready) throw new Error('Firebase não configurado.');
        const ref = firestoreLib.doc(db, FIREBASE_COLLECTION, String(docId));
        await firestoreLib.setDoc(ref, { ...partial, atualizado_em: firestoreLib ? firestoreLib.serverTimestamp() : new Date().toISOString() }, { merge: true });
        return true;
    }

    async function deleteCesta(docId) {
        const ready = await init();
        if (!ready) throw new Error('Firebase não configurado.');
        const ref = firestoreLib.doc(db, FIREBASE_COLLECTION, String(docId));
        await firestoreLib.deleteDoc(ref);
        return true;
    }

    function subscribeProdutos(onUpdate, onError) {
        if (!firestoreLib || !db) {
            if (typeof onError === 'function') onError(new Error('Firestore não inicializado. Certifique-se de configurar o Firebase corretamente.'));
            return () => {};
        }
        const col = firestoreLib.collection(db, FIREBASE_COLLECTION);
        const q = firestoreLib.query(col, firestoreLib.orderBy('criado_em', 'desc'));
        const unsubscribe = firestoreLib.onSnapshot(q,
            (snap) => {
                const list = [];
                snap.forEach((doc) => list.push(mapDocToProduct(doc)));
                if (typeof onUpdate === 'function') onUpdate(list);
            },
            (err) => {
                console.error('[Firebase] onSnapshot(cestas) falhou:', err);
                if (typeof onError === 'function') onError(err);
            }
        );
        return unsubscribe;
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
        updateCesta,
        deleteCesta,
        subscribeProdutos,
        syncLocalToFirebase,
        pingFirebaseServices,
        get initialized() { return initPromise ? initPromise : Promise.resolve(false); }
    };

    document.dispatchEvent(new CustomEvent('firebase:init:ready', {
        detail: { isEnabled: isFirebaseConfigured }
    }));
})();
