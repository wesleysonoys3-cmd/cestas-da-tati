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
            console.log('[Firebase PING] Storage OK · bucket: ' + FIREBASE_CONFIG.storageBucket + ' · pasta "' + FIREBASE_STORAGE_FOLDER + '" acessível. (Storage opcional; hoje usamos apenas imagens Base64 embutidas no Firestore).');
        } catch (storageErr) {
            // === STORAGE NÃO É MAIS OBRIGATÓRIO! ===
            // Qualquer erro aqui virou apenas aviso (não bloqueia mais). Imagens são salvas como
            // Base64 DENTRO do documento do Firestore → NÃO PRECISA de Storage ativado,
            // NÃO PRECISA fazer upgrade do plano, NÃO PRECISA publicar regras de Storage.
            const msg = (storageErr && storageErr.message) || String(storageErr);
            result.code = 'storage_warn';
            if (storageErr && storageErr.code === 'storage/bucket-not-found' || /bucket.*not.*found|does.*not.*have.*storage|project.*not.*enabled|invalid.*bucket/i.test(msg)) {
                result.message = 'Storage não ativado (botão amarelo "Fazer upgrade do projeto") — MAS ISSO É OK! Não usamos mais o Storage para salvar fotos. Todas as imagens são embutidas em Base64 dentro do documento da cesta no Firestore (que já está 100% ativado). Nenhum upgrade necessário. 🎉';
            } else if (msg === 'timeout_ping_storage_6s' || (storageErr && (storageErr.code === 'storage/retry-limit-exceeded' || storageErr.code === 'storage/canceled'))) {
                result.message = 'Storage lento/timeout — OK, não usamos mais Storage obrigatório. Fotos ficam embutidas no próprio documento do Firestore via Base64.';
            } else {
                result.message = 'Aviso: Storage retornou erro (' + (storageErr && storageErr.code ? storageErr.code : 'desconhecido') + ') — NÃO PRECISA FAZER NADA! Usamos apenas Firestore para tudo (incluindo fotos embutidas em Base64).';
            }
            result.rawError = storageErr;
            console.warn('[Firebase PING] Storage NÃO CONFIGURADO (OK hoje, não usamos Storage obrigatório):', storageErr && storageErr.code, storageErr && storageErr.message);
            // ⚠️ CRÍTICO: NÃO MARCAMOS result.ok = false! Só Firestore é obrigatório, ele é validado abaixo.
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

    /* ---------- LOJA ABERTA / FECHADA (doc store_config/status) ---------- */
    const COL_STORE_CONFIG = 'store_config';
    const DOC_STORE_STATUS = 'status';

    function mapStoreStatusDoc(doc) {
        if (!doc || !doc.exists) return null;
        const d = doc.data() || {};
        return {
            open: d.open !== false,
            reabre_em: typeof d.reabre_em === 'string' ? d.reabre_em : '',
            mensagem_fechado: typeof d.mensagem_fechado === 'string' ? d.mensagem_fechado : '',
            atualizado_em: d.atualizado_em ? (d.atualizado_em.toDate ? d.atualizado_em.toDate().toISOString() : String(d.atualizado_em)) : null,
            atualizado_por: typeof d.atualizado_por === 'string' ? d.atualizado_por : ''
        };
    }

    async function getStoreStatus() {
        const ready = await init();
        if (!ready) return { ok: false, status: { open: true, reabre_em: '', mensagem_fechado: '' } };
        try {
            const ref = firestoreLib.doc(db, COL_STORE_CONFIG, DOC_STORE_STATUS);
            const snap = await firestoreLib.getDoc(ref);
            const status = mapStoreStatusDoc(snap);
            return {
                ok: true,
                status: status || { open: true, reabre_em: '', mensagem_fechado: '' }
            };
        } catch (err) {
            console.warn('[Firebase] getStoreStatus falhou (assumimos loja aberta):', err);
            return { ok: false, status: { open: true, reabre_em: '', mensagem_fechado: '' } };
        }
    }

    async function setStoreStatus(partial) {
        const ready = await init();
        if (!ready) throw new Error('Firebase não configurado.');
        const ref = firestoreLib.doc(db, COL_STORE_CONFIG, DOC_STORE_STATUS);
        const payload = {
            ...(typeof partial.open === 'boolean' ? { open: partial.open } : {}),
            ...(typeof partial.reabre_em === 'string' ? { reabre_em: partial.reabre_em } : {}),
            ...(typeof partial.mensagem_fechado === 'string' ? { mensagem_fechado: partial.mensagem_fechado } : {}),
            atualizado_em: firestoreLib.serverTimestamp(),
            atualizado_por: 'admin'
        };
        await firestoreLib.setDoc(ref, payload, { merge: true });
        return true;
    }

    function subscribeStoreStatus(onUpdate, onError) {
        let cleaned = false;
        (async () => {
            const ready = await init();
            if (cleaned) return;
            if (!ready || !firestoreLib || !db) {
                if (typeof onUpdate === 'function') onUpdate({ open: true, reabre_em: '', mensagem_fechado: '' });
                return;
            }
            const ref = firestoreLib.doc(db, COL_STORE_CONFIG, DOC_STORE_STATUS);
            const unsub = firestoreLib.onSnapshot(ref,
                (doc) => {
                    const status = mapStoreStatusDoc(doc) || { open: true, reabre_em: '', mensagem_fechado: '' };
                    if (typeof onUpdate === 'function') onUpdate(status);
                },
                (err) => {
                    console.warn('[Firebase] onSnapshot(store_config/status) falhou (assumimos loja aberta):', err);
                    if (typeof onError === 'function') onError(err);
                    if (typeof onUpdate === 'function') onUpdate({ open: true, reabre_em: '', mensagem_fechado: '' });
                }
            );
            if (typeof window !== 'undefined') {
                window.__firebaseUnsubscribeStoreStatus = unsub;
            }
        })();
        return () => {
            cleaned = true;
            try { if (typeof window.__firebaseUnsubscribeStoreStatus === 'function') window.__firebaseUnsubscribeStoreStatus(); } catch(_) {}
        };
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
        getStoreStatus,
        setStoreStatus,
        subscribeStoreStatus,
        syncLocalToFirebase,
        pingFirebaseServices,
        get initialized() { return initPromise ? initPromise : Promise.resolve(false); }
    };

    document.dispatchEvent(new CustomEvent('firebase:init:ready', {
        detail: { isEnabled: isFirebaseConfigured }
    }));
})();
