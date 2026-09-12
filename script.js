const STORAGE_KEYS = {
    PRODUCTS: 'cestasTati_products',
    ADDONS: 'cestasTati_addons',
    DELIVERY: 'cestasTati_delivery',
    COUPONS: 'cestasTati_coupons',
    CART: 'cestasTati_cart',
    ADMIN_LOGGED: 'cestasTati_adminLogged',
    WHATSAPP: 'cestasTati_whatsapp',
    STORE_CONTACT: 'cestasTati_storeContact',
    STORE_STATUS: 'cestasTati_storeStatus'
};

const ADMIN_USERNAME = 'tati2026';
const ADMIN_PASSWORD = 'tatiane2026';
const DEFAULT_WHATSAPP = '5561995869522';
const DEFAULT_INSTAGRAM = 'https://www.instagram.com/tatie.atelie.cestas/';
const DEFAULT_FACEBOOK  = 'https://www.facebook.com/tatieatelieecestas';
const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Tatiê Ateliê & Cestas e gostaria de mais informações sobre seus produtos 💗';
const PIX_KEY = '02714998186';
const STORE_NAME = 'Tatiê Ateliê & Cestas';
const STORE_SLOGAN = 'Presentes feitos para encantar.';

const DEFAULT_PRODUCTS = [
    {
        id: 1,
        name: 'Cesta Bandeja Comemoração',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20gift%20tray%20basket%20with%20blue%20balloons%2C%20sweets%2C%20ferrero%20rocher%2C%20nutella%2C%20wine%20pink%20theme%2C%20deluxe%20presentation&image_size=landscape_4_3',
        items: ['Balão personalizado', 'Placa com o nome', 'Bebida láctea Alpino', '1 Ferrero Rocher T8', 'Suco 180ml', 'Nutella 140g', 'Torradas', 'Uva', 'Sequilhos', 'Bolo no pote', '1 Nutella B-ready'],
        description: 'Nossa cesta mais querida! Perfeita para aniversários, datas especiais ou simplesmente surpreender alguém. Todos os itens selecionados com muito amor e cuidado.',
        price: 239.00
    },
    {
        id: 2,
        name: 'Cesta Café da Manhã Premium',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxurious%20breakfast%20gift%20basket%20with%20coffee%2C%20croissant%2C%20fruits%2C%20breads%2C%20elegant%20pink%20ribbon%2C%20wooden%20tray&image_size=landscape_4_3',
        items: ['Café gourmet 250g', 'Pão de queijo congelado', 'Croissants sortidos', 'Geleia artesanal', 'Manteiga premium', 'Bolo caseiro', 'Frutas frescas', 'Suco natural 1L'],
        description: 'Comece o dia de alguém com muito amor! Cesta completa com café da manhã de hotel cinco estrelas.',
        price: 189.00
    },
    {
        id: 3,
        name: 'Cesta Romântica Amor',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20gift%20basket%20with%20roses%2C%20wine%2C%20chocolates%2C%20candles%2C%20rose%20petals%2C%20love%20theme%20pink%20wine%20colors&image_size=landscape_4_3',
        items: ['Buquê de rosas vermelhas', 'Garrafas de vinho tinto', 'Chocolates suíços', 'Taças de cristal', 'Velas aromáticas', 'Petalas de rosa', 'Cartão personalizado'],
        description: 'Declare seu amor do jeito mais especial! Cesta romântica para noivados, aniversários de namoro ou Dia dos Namorados.',
        price: 299.00
    },
    {
        id: 4,
        name: 'Cesta Mini Surpresa Kids',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cute%20kids%20gift%20basket%20with%20candies%2C%20toys%2C%20balloons%2C%20colorful%20festive%20children%20party%20theme&image_size=landscape_4_3',
        items: ['Balões coloridos', 'Brinquedo surpresa', 'Confeitos sortidos', 'Chocolates infantis', 'Biscoitos decorados', 'Refrigerante'],
        description: 'Para fazer a alegria da criançada! Mini cesta cheia de delícias e brinquedos que eles vão amar.',
        price: 119.00
    },
    {
        id: 5,
        name: 'Cesta Bem-Estar & Spa',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=spa%20wellness%20gift%20basket%20with%20bath%20salts%2C%20scented%20candles%2C%20essential%20oils%2C%20towel%2C%20selfcare%20relaxing%20pink%20theme&image_size=landscape_4_3',
        items: ['Sais de banho', 'Velas aromáticas', 'Hidratante corporal', 'Sabonete artesanal', 'Essência para difusor', 'Toalha macia', 'Chá relaxante'],
        description: 'Um dia de spa em casa! Presente perfeito para quem precisa de um momento de autocuidado e relaxamento.',
        price: 219.00
    },
    {
        id: 6,
        name: 'Cesta Chopp & Petiscos',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beer%20snacks%20gift%20basket%20with%20bottled%20beer%2C%20peanuts%2C%20sausage%2C%20chips%2C%20masculine%20manly%20wooden%20box&image_size=landscape_4_3',
        items: ['6 cervejas premium', 'Amendoim salgado', 'Calabresa defumada', 'Salgadinhos sortidos', 'Queijo coalho', 'Molho picante', 'Copos personalizados'],
        description: 'Para o homem que gosta de um happy hour em boa companhia! Presente ideal para aniversários e Dia dos Pais.',
        price: 259.00
    }
];

const DEFAULT_ADDONS = [
    { id: 1, name: 'Ursinho de pelúcia pequeno', price: 35.00 },
    { id: 2, name: 'Ursinho de pelúcia grande', price: 65.00 },
    { id: 3, name: 'Cartão comemorativo personalizado', price: 15.00 },
    { id: 4, name: 'Cartão grande premium (10x15cm)', price: 18.00 },
    { id: 5, name: 'Balão metalizado com mensagem', price: 25.00 },
    { id: 6, name: 'Buquê de flores (5 rosas)', price: 45.00 },
    { id: 7, name: 'Box de chocolates meio amargo', price: 30.00 },
    { id: 8, name: 'Garrafinha de espumante', price: 55.00 },
    { id: 9, name: 'Vela aromática premium', price: 28.00 },
    { id: 10, name: 'Recadinho manuscrito', price: 5.00 }
];

const DEFAULT_DELIVERY = [
    /* ---------- BASE: NÚCLEO BANDEIRANTE / DF ---------- */
    /* Taxas calculadas por distância rodoviária REAL de NB -> RA (2026) */
    { id: 1,  name: '📍 Retirada na loja · Núcleo Bandeirante (Grátis)',     price: 0.00  },
    { id: 2,  name: 'Núcleo Bandeirante (Entrega na região)',                price: 15.00 },
    { id: 3,  name: 'Riacho Fundo I / II (QRF)',                              price: 15.00 },
    { id: 4,  name: 'Gama (Satélite Gama - Região Central)',                  price: 18.00 },
    { id: 5,  name: 'Santa Maria (QRS / Santa Maria 1 a 5)',                  price: 18.00 },
    { id: 6,  name: 'Recanto das Emas (QRE)',                                 price: 20.00 },
    { id: 7,  name: 'Samambaia (QSB / Samambaia Norte/Sul)',                  price: 22.00 },
    { id: 8,  name: 'Vicente Pires / Setor Habitacional Vicente Pires',       price: 22.00 },
    { id: 9,  name: 'Ceilândia (QNN / Ceilândia Centro)',                     price: 25.00 },
    { id: 10, name: 'Taguatinga (QNJ / Taguatinga Sul)',                      price: 26.00 },
    { id: 11, name: 'Águas Claras (Avenida Castelo Branco / QS)',             price: 28.00 },
    { id: 12, name: 'Guará (QI / QII / QN)',                                  price: 30.00 },
    { id: 13, name: 'Eixão / SIA / SIG / SCES (Setores centrais)',            price: 30.00 },
    { id: 14, name: 'Lago Sul (QL / QL 01 a 30)',                             price: 32.00 },
    { id: 15, name: 'Brasília / Asa Sul (SQSW / SQS)',                        price: 32.00 },
    { id: 16, name: 'Brasília / Asa Norte (SQNW / SQN)',                      price: 32.00 },
    { id: 17, name: 'Setor de Hotéis e SHN / SHS',                            price: 32.00 },
    { id: 18, name: 'Paranoá / Jardins Mangueiral / Itapoã',                  price: 36.00 },
    { id: 19, name: 'Lago Norte (Qlago Norte / Norte Parque)',                price: 38.00 },
    { id: 20, name: 'Brazlândia (Região Sudoeste)',                           price: 42.00 },
    { id: 21, name: 'Sobradinho / Sobradinho II',                             price: 48.00 },
    { id: 22, name: 'Planaltina (Extremo Norte DF)',                          price: 58.00 },
    { id: 23, name: 'Outra região / Fora do DF — Consultar taxa',             price: 70.00 }
];

const DEFAULT_DELIVERY_RESET_FLAG = 'deliveryDefaultsVersion_DF_NucleoBandeirante_2026_v2';

const DEFAULT_COUPONS = [
    { id: 1, code: 'TATI10', type: 'percent', value: 10, active: true },
    { id: 2, code: 'AMOR15', type: 'percent', value: 15, active: true },
    { id: 3, code: 'PRESENTE20', type: 'fixed', value: 20, active: true }
];

let products = [];
let addons = [];
let deliveryRates = [];
let coupons = [];
let cart = [];
let whatsappNumber = DEFAULT_WHATSAPP;
let storeContact = {
    whatsapp: DEFAULT_WHATSAPP,
    whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
    instagram: DEFAULT_INSTAGRAM,
    facebook: DEFAULT_FACEBOOK
};
let storeOpenGlobal = { open: true, reabre_em: '', mensagem_fechado: '' };
let selectedProduct = null;
let modalQty = 1;
let modalSelectedAddons = [];
let appliedCoupon = null;
let adminEditingId = null;
let adminEditingEntity = null;

function init() {
    loadFromStorage();
    /* Render inicial temporário: se Firebase não carregar em 2s, mostra cestas padrões.
       Mas em ~50ms o onSnapshot substitui com as cestas REAIS da nuvem. */
    renderProducts();
    renderDeliveryOptions();
    updateCartCount();
    setupEventListeners();
}

function loadFromStorage() {
    /* LIMPEZA PREVENTIVA DE CACHE ANTIGO: remove qualquer sobra de cestas em localStorage
       para garantir que o usuário VEJA APENAS as cestas vindas do Firestore. */
    nukeLocalProductsCache();

    /* ---------- PRODUTOS (CESTAS): SÃO 100% NUVEM ---------- */
    /* NÃO LEMOS MAIS DE localStorage['cestasTati_products'].
       A variável `products` é populada pelo onSnapshot() do Firestore em bootstrapFirebase.
       Aqui usamos DEFAULT_PRODUCTS apenas como placeholder de carregamento,
       que é substituído assim que a conexão com o Firebase retorna. */
    products = DEFAULT_PRODUCTS.slice();

    /* ---------- DADOS CLIENTE E CONFIGURAÇÕES: FICAM LOCAIS ---------- */
    const storedAddons    = localStorage.getItem(STORAGE_KEYS.ADDONS);
    const storedDelivery  = localStorage.getItem(STORAGE_KEYS.DELIVERY);
    const storedCoupons   = localStorage.getItem(STORAGE_KEYS.COUPONS);
    const storedCart      = localStorage.getItem(STORAGE_KEYS.CART);
    const storedWhatsApp  = localStorage.getItem(STORAGE_KEYS.WHATSAPP);
    const deliveryResetApplied = localStorage.getItem(DEFAULT_DELIVERY_RESET_FLAG);

    addons = storedAddons ? JSON.parse(storedAddons) : DEFAULT_ADDONS;

    if (!storedDelivery || !deliveryResetApplied) {
        deliveryRates = DEFAULT_DELIVERY.slice();
        saveToStorage(STORAGE_KEYS.DELIVERY, deliveryRates);
        localStorage.setItem(DEFAULT_DELIVERY_RESET_FLAG, '1');
    } else {
        deliveryRates = JSON.parse(storedDelivery);
    }

    coupons = storedCoupons ? JSON.parse(storedCoupons) : DEFAULT_COUPONS;
    cart = storedCart ? JSON.parse(storedCart) : [];
    whatsappNumber = storedWhatsApp || DEFAULT_WHATSAPP;

    /* ---------- CONTATO (WhatsApp/Insta/Face) ---------- */
    const storedStoreContact = localStorage.getItem(STORAGE_KEYS.STORE_CONTACT);
    if (storedStoreContact) {
        try {
            const parsed = JSON.parse(storedStoreContact);
            storeContact = Object.assign({
                whatsapp: DEFAULT_WHATSAPP,
                whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
                instagram: DEFAULT_INSTAGRAM,
                facebook: DEFAULT_FACEBOOK
            }, parsed || {});
        } catch (_) {
            storeContact = {
                whatsapp: DEFAULT_WHATSAPP,
                whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
                instagram: DEFAULT_INSTAGRAM,
                facebook: DEFAULT_FACEBOOK
            };
        }
    }
    whatsappNumber = storeContact && storeContact.whatsapp ? storeContact.whatsapp : (storedWhatsApp || DEFAULT_WHATSAPP);

    /* ---------- STATUS LOJA (Aberta/Fechada) — fallback local se Firestore não autorizar ---------- */
    const storedStoreStatus = localStorage.getItem(STORAGE_KEYS.STORE_STATUS);
    if (storedStoreStatus) {
        try {
            const parsed = JSON.parse(storedStoreStatus);
            storeOpenGlobal = Object.assign({ open: true, reabre_em: '', mensagem_fechado: '' }, parsed || {});
            console.log('[loadFromStorage] Status da loja carregado do localStorage:', storeOpenGlobal.open ? 'ABERTA' : 'FECHADA');
        } catch (_) {
            storeOpenGlobal = { open: true, reabre_em: '', mensagem_fechado: '' };
        }
    }

    if (!storedAddons)   saveToStorage(STORAGE_KEYS.ADDONS,    addons);
    if (!storedCoupons)  saveToStorage(STORAGE_KEYS.COUPONS,   coupons);
    if (!storedWhatsApp) localStorage.setItem(STORAGE_KEYS.WHATSAPP, whatsappNumber);
    if (!storedStoreContact) saveToStorage(STORAGE_KEYS.STORE_CONTACT, storeContact);
}

/* Remove entrada de produtos do localStorage se existir (limpeza pós-migração) */
function nukeLocalProductsCache() {
    try {
        if (localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
            localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
            console.log('[Limpeza] Removida entrada antiga de produtos em localStorage. Cestas agora são 100% Firestore/Storage.');
        }
        /* Também limpamos qualquer chave antiga ou com nome errado que possa estar causando confusão */
        const chavesSuspeitas = Object.keys(localStorage).filter(k =>
            /cestas|products|cesta_/i.test(k) && k !== STORAGE_KEYS.CART && k !== STORAGE_KEYS.ADDONS
        );
        chavesSuspeitas.forEach(k => {
            if (k !== STORAGE_KEYS.DELIVERY && k !== STORAGE_KEYS.COUPONS &&
                k !== STORAGE_KEYS.ADMIN_LOGGED && k !== STORAGE_KEYS.WHATSAPP &&
                k !== STORAGE_KEYS.STORE_CONTACT && !/deliveryDefaultsVersion|DEFAULT_DELIVERY/i.test(k)) {
                console.log('[Limpeza] Removida chave suspeita de cache antigo:', k);
                localStorage.removeItem(k);
            }
        });
    } catch(_) {}
}

/* ---------- Indicador visual: Sincronizando com o servidor ---------- */
function showCacheIndicator(msg) {
    try {
        const el = document.getElementById('cacheSyncIndicator');
        if (!el) return;
        const txt = el.querySelector('.cache-sync-text');
        if (txt && msg) txt.textContent = msg;
        el.style.display = 'flex';
    } catch(_) {}
}
function hideCacheIndicator() {
    try {
        const el = document.getElementById('cacheSyncIndicator');
        if (el) el.style.display = 'none';
    } catch(_) {}
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function generateId() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

function setupEventListeners() {
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-close');
            closeModal(id);
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });

    document.getElementById('cartButton').addEventListener('click', openCartModal);
    document.getElementById('btnAddMore').addEventListener('click', (e) => {
        closeModal('cartModal');
    });
    document.getElementById('btnAdmin').addEventListener('click', openAdminModal);

    document.getElementById('qtyMinus').addEventListener('click', () => {
        if (modalQty > 1) {
            modalQty--;
            updateModalUI();
        }
    });
    document.getElementById('qtyPlus').addEventListener('click', () => {
        modalQty++;
        updateModalUI();
    });
    document.getElementById('addToCartBtn').addEventListener('click', addToCartFromModal);
    document.getElementById('applyCoupon').addEventListener('click', applyCoupon);
    document.getElementById('finishOrder').addEventListener('click', finishOrder);
    document.getElementById('copyPixBtn').addEventListener('click', copyPixKey);

    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', handlePaymentChange);
    });

    document.getElementById('neighborhoodSelect').addEventListener('change', updateCartSummary);
    document.getElementById('deliveryDate').addEventListener('change', setMinDate);

    document.getElementById('adminLoginBtn').addEventListener('click', adminLogin);
    ['adminUsername', 'adminPassword'].forEach(id => {
        document.getElementById(id).addEventListener('keypress', (e) => {
            if (e.key === 'Enter') adminLogin();
        });
    });

    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', () => switchAdminTab(tab.getAttribute('data-tab')));
    });

    document.getElementById('btnNewProduct').addEventListener('click', () => openEntityForm('product'));
    document.getElementById('btnNewAddon').addEventListener('click', () => openEntityForm('addon'));
    document.getElementById('btnNewDelivery').addEventListener('click', () => openEntityForm('delivery'));
    document.getElementById('btnNewCoupon').addEventListener('click', () => openEntityForm('coupon'));

    document.getElementById('cancelProduct').addEventListener('click', () => closeEntityForm('product'));
    document.getElementById('cancelAddon').addEventListener('click', () => closeEntityForm('addon'));
    document.getElementById('cancelDelivery').addEventListener('click', () => closeEntityForm('delivery'));
    document.getElementById('cancelCoupon').addEventListener('click', () => closeEntityForm('coupon'));

    document.getElementById('saveProduct').addEventListener('click', saveEntityProduct);
    document.getElementById('saveAddon').addEventListener('click', saveEntityAddon);
    document.getElementById('saveDelivery').addEventListener('click', saveEntityDelivery);
    document.getElementById('saveCoupon').addEventListener('click', saveEntityCoupon);

    /* ---------- Listeners do CEP ---------- */
    const cepInputEl = document.getElementById('cepInput');
    if (cepInputEl) {
        cepInputEl.addEventListener('input', (e) => {
            e.target.value = maskCep(e.target.value);
        });
        cepInputEl.addEventListener('blur', (e) => {
            e.target.value = maskCep(e.target.value);
        });
        cepInputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleCepSearch();
            }
        });
    }
    const btnSearchCep = document.getElementById('btnSearchCep');
    if (btnSearchCep) {
        btnSearchCep.addEventListener('click', handleCepSearch);
    }
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('deliveryDate').setAttribute('min', today);
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.addEventListener('click', () => openProductModal(product.id));

        const itemsHtml = product.items.slice(0, 5).map(i => `<li>${i}</li>`).join('') +
            (product.items.length > 5 ? `<li>...e mais ${product.items.length - 5} itens</li>` : '');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image"
                 onerror="this.src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20gift%20basket%20pink%20wine%20decoration%20ribbon&image_size=landscape_4_3'">
            <div class="product-card-body">
                <h3 class="product-card-name">${product.name}</h3>
                <ul class="product-card-items">${itemsHtml}</ul>
                <div class="product-card-footer">
                    <span class="product-card-price">${formatCurrency(product.price)}</span>
                    <button class="product-card-see-more">Ver mais</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ---------- Estado atual de entrega via CEP ---------- */
let selectedCepData = null;    // cache do retorno ViaCep para o CEP pesquisado
let cepDeliveryOverride = null; // {rateId, name, price} — sobrescreve o select

/* ---------- CEP: Máscara + Busca ViaCep + Calculo taxa automático ---------- */
function maskCep(val) {
    if (!val) return '';
    const n = String(val).replace(/\D/g, '').slice(0, 8);
    if (n.length <= 5) return n;
    return n.slice(0, 5) + '-' + n.slice(5);
}

async function fetchCepData(cepRaw) {
    const cep = String(cepRaw || '').replace(/\D/g, '').slice(0, 8);
    if (cep.length !== 8) throw new Error('CEP incompleto. Informe os 8 dígitos.');
    const res = await Promise.race([
        fetch(`https://viacep.com.br/ws/${cep}/json/`, { method: 'GET' }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('Timeout ao consultar CEP (tente novamente).')), 10000))
    ]);
    if (!res.ok) throw new Error('Erro ao consultar CEP no servidor dos Correios.');
    const data = await res.json();
    if (data && data.erro) throw new Error('CEP não encontrado. Verifique o número digitado.');
    return data; // { cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi }
}

/* --- Lat/Long de referência: Loja FÍSICA = NÚCLEO BANDEIRANTE, Brasília/DF --- */
/* Ponto exato: Região Administrativa do Núcleo Bandeirante (saída principal) */
const BRASILIA_CENTRO_LAT = -15.7333;
const BRASILIA_CENTRO_LON = -48.0778;

/* --- Calcula a distância de Haversine entre 2 pontos em km --- */
function haversineKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const toRad = v => (v * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

/* --- Tabela fixa de faixas de CEP/Região Administrativa -> taxa (fallback se ViaCep não retornar coordenadas) --- */
/* ORIGEM BASE: NÚCLEO BANDEIRANTE / DF. Prefixos oficiais IBGE 2026. */
const DF_RA_CEP_PREFIX_RULES = [
    { prefix: /^718/,                price: 15.00, name: 'Núcleo Bandeirante (Região Central, saída da loja)' },
    { prefix: /^78[0-4]/,            price: 15.00, name: 'Núcleo Bandeirante (Entrega na região)' },
    { prefix: /^733[0-3]/,           price: 15.00, name: 'Riacho Fundo I / II (mais próximo)' },
    { prefix: /^73[0-2]/,            price: 18.00, name: 'Gama (Satélite Gama)' },
    { prefix: /^73[6-9]/,            price: 18.00, name: 'Santa Maria / QRS' },
    { prefix: /^73[4-5]/,            price: 20.00, name: 'Recanto das Emas' },
    { prefix: /^74/,                 price: 22.00, name: 'Samambaia (QSB)' },
    { prefix: /^79/,                 price: 22.00, name: 'Vicente Pires / Jardim Botânico / Arniqueira' },
    { prefix: /^71[0-7]/,            price: 22.00, name: 'Vicente Pires (Setor Hab.)' },
    { prefix: /^720/,                price: 25.00, name: 'Ceilândia (Centro)' },
    { prefix: /^72[19]/,             price: 26.00, name: 'Taguatinga (QNJ)' },
    { prefix: /^72[2-8]/,            price: 28.00, name: 'Águas Claras (QS)' },
    { prefix: /^719/,                price: 30.00, name: 'Guará (QI / QII)' },
    { prefix: /^70/,                 price: 32.00, name: 'Asa Sul / Asa Norte / Plano Piloto' },
    { prefix: /^75[0-7]/,            price: 38.00, name: 'Lago Norte (QLN)' },
    { prefix: /^75[8-9]/,            price: 36.00, name: 'Paranoá / Jardins Mangueiral / Itapoã' },
    { prefix: /^78[5-9]/,            price: 42.00, name: 'Brazlândia (Sudoeste DF)' },
    { prefix: /^76/,                 price: 48.00, name: 'Sobradinho / Sobradinho II' },
    { prefix: /^77/,                 price: 58.00, name: 'Planaltina (Extremo Norte DF)' }
];

/* --- Calcula taxa pelo CEP (tenta ViaCep, senão usa tabela de prefixos) --- */
function calculateDeliveryByCep(cepRaw, viaCepData) {
    const cep = String(cepRaw || '').replace(/\D/g, '');
    // 1ª tentativa: se o bairro retornado pelo ViaCep coincidir exatamente com algum dos deliveryRates cadastrados (nomes completos)
    if (viaCepData && viaCepData.bairro) {
        const bairro = String(viaCepData.bairro).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const match = deliveryRates.find(r => {
            const n = String(r.name).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return (
                n.includes(bairro) ||
                bairro.split(/[\s,]/).some(pal => pal.length >= 4 && n.includes(pal)) ||
                // Exact RA name
                (n.startsWith(bairro.slice(0, 6)) && bairro.length >= 4)
            );
        });
        if (match) return { rule: 'viacep_match', name: match.name, price: match.price, rateId: match.id };
    }
    // 2ª tentativa: CEP fora do DF (UF != DF) → Fora do DF
    if (viaCepData && viaCepData.uf && String(viaCepData.uf).toUpperCase() !== 'DF') {
        const out = deliveryRates.find(r => /fora do df|outra regi/i.test(r.name)) ||
                    deliveryRates.find(r => r.price >= 45);
        return {
            rule: 'fora_df',
            name: viaCepData.localidade ? `${viaCepData.localidade}/${viaCepData.uf} (Fora do DF — Consultar taxa)` : (out ? out.name : 'Fora do DF — Consultar taxa'),
            price: out ? out.price : 70.00,
            rateId: out ? out.id : null,
            alert: '⚠️ O CEP informado está FORA de Brasília/DF. Faremos contato antes de confirmar a entrega!'
        };
    }
    // 3ª tentativa: Tabela de PREFIXOS de CEP (DF)
    for (const r of DF_RA_CEP_PREFIX_RULES) {
        if (r.prefix.test(cep)) {
            const matchRate = deliveryRates.find(dr => {
                const a = r.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const b = dr.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                return b.includes(a.slice(0, 5)) || a.includes(b.slice(0, 5));
            });
            return {
                rule: 'prefix_df',
                name: matchRate ? matchRate.name : r.name,
                price: matchRate ? matchRate.price : r.price,
                rateId: matchRate ? matchRate.id : null
            };
        }
    }
    // 4ª (último recurso): Usar faixa de R$ 28 — média de RAs satélites
    const fallback = deliveryRates.find(r => /outra regi|consulta/i.test(r.name)) || { price: 28, name: 'Região a confirmar (R$ 28)', id: null };
    return { rule: 'fallback', name: fallback.name, price: fallback.price, rateId: fallback && fallback.id ? fallback.id : null };
}

function setCepStatus(msg, tipo) {
    const statusEl = document.getElementById('cepStatusText');
    if (!statusEl) return;
    statusEl.className = 'cep-status ' + (tipo || '');
    statusEl.textContent = msg || '';
}

function setCepHelpWhatsAppLink() {
    const link = document.getElementById('cepWhatsAppHelp');
    if (!link) return;
    const texto = encodeURIComponent('Olá! Preciso de ajuda para calcular a taxa de entrega do meu pedido.');
    link.href = `https://wa.me/${whatsappNumber}?text=${texto}`;
    link.target = '_blank';
    link.rel = 'noopener';
}

async function handleCepSearch() {
    const cepInput = document.getElementById('cepInput');
    const btn = document.getElementById('btnSearchCep');
    const autoFields = document.getElementById('cepAutoFields');
    const logradouroEl = document.getElementById('cepLogradouro');
    const complementoEl = document.getElementById('cepComplemento');
    const bairroEl = document.getElementById('cepBairro');
    const cidadeEl = document.getElementById('cepCidade');
    const deliveryDisplay = document.getElementById('cepDeliveryDisplay');
    const freteLabel = document.getElementById('cepFreteCalculado');
    const neighborhoodSelect = document.getElementById('neighborhoodSelect');

    const cepRaw = (cepInput && cepInput.value) || '';
    const cepLimpo = cepRaw.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
        setCepStatus('⚠️ Informe os 8 dígitos do CEP.', 'error');
        return;
    }

    setCepStatus('🔍 Buscando CEP e calculando frete...', 'loading');
    if (btn) { btn.disabled = true; btn.textContent = '⏳ Buscando...'; }

    try {
        const dados = await fetchCepData(cepRaw);
        selectedCepData = dados;

        // 1) Preenche campos de endereço
        if (autoFields) autoFields.style.display = 'block';
        if (logradouroEl) logradouroEl.value = dados.logradouro || '';
        if (complementoEl) complementoEl.value = dados.complemento || '';
        if (bairroEl) bairroEl.value = dados.bairro || '';
        if (cidadeEl) {
            cidadeEl.value =
                (dados.localidade && dados.uf) ? `${dados.localidade} / ${dados.uf}` :
                (dados.localidade || 'Brasília / DF');
        }
        // 2) Monta sugestão de taxa (por CEP)
        const taxa = calculateDeliveryByCep(cepLimpo, dados);
        cepDeliveryOverride = { cep: cepLimpo, rateId: taxa.rateId, name: taxa.name, price: taxa.price };
        if (deliveryDisplay) deliveryDisplay.style.display = 'flex';
        if (freteLabel) freteLabel.textContent = formatCurrency(taxa.price);

        // 3) Sincroniza o select com a RA encontrada (se tem match por rateId)
        if (neighborhoodSelect && taxa.rateId) {
            neighborhoodSelect.value = taxa.rateId;
        } else if (neighborhoodSelect) {
            // Não tem match exato — o usuário pode ajustar manualmente depois
            neighborhoodSelect.value = '';
        }

        // 4) Atualiza o resumo do pedido (taxa = taxa calculada)
        updateCartTotals();

        // 5) Mensagem final
        if (taxa.alert) {
            setCepStatus(taxa.alert, 'warn');
        } else {
            setCepStatus(
                `✅ CEP ${maskCep(cepLimpo)} encontrado em "${taxa.name}". Frete calculado: ${formatCurrency(taxa.price)}.`,
                'success'
            );
        }

        // 6) Sugere preencher o endereço do destinatário automaticamente
        const addrInput = document.getElementById('receiverAddress');
        if (addrInput && dados && (!addrInput.value || addrInput.value.length < 10)) {
            const parts = [
                dados.logradouro ? `${dados.logradouro}${dados.complemento ? ' (' + dados.complemento + ')' : ''}` : '',
                dados.bairro ? `Bairro: ${dados.bairro}` : '',
                `${dados.localidade || 'Brasília'}/${dados.uf || 'DF'} — CEP ${maskCep(cepLimpo)}`
            ].filter(Boolean);
            addrInput.value = parts.join('\n');
        }
    } catch (err) {
        console.error('handleCepSearch', err);
        setCepStatus('❌ ' + (err.message || err), 'error');
        if (autoFields) autoFields.style.display = 'none';
        if (deliveryDisplay) deliveryDisplay.style.display = 'none';
        cepDeliveryOverride = null;
        updateCartTotals();
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = '🔍 Buscar'; }
    }
}

/* ---------- Fim: CEP ---------- */

function renderDeliveryOptions() {
    const select = document.getElementById('neighborhoodSelect');
    const currentValue = select && select.value;
    select.innerHTML = '<option value="">Selecione sua R.A. de entrega no DF...</option>';
    deliveryRates.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id;
        opt.textContent = `${d.name} — ${d.price === 0 ? 'Grátis' : formatCurrency(d.price)}`;
        select.appendChild(opt);
    });
    if (currentValue) select.value = currentValue;
}

function openProductModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    modalQty = 1;
    modalSelectedAddons = [];

    document.getElementById('modalProductImage').src = selectedProduct.image;
    document.getElementById('modalProductImage').alt = selectedProduct.name;
    document.getElementById('modalProductName').textContent = selectedProduct.name;
    document.getElementById('modalProductDescription').textContent = selectedProduct.description || '';
    document.getElementById('modalProductItems').innerHTML = `
        <h4 class="addons-title" style="margin-bottom:10px;">📦 Itens inclusos</h4>
        <ul>${selectedProduct.items.map(i => `<li>${i}</li>`).join('')}</ul>
    `;
    document.getElementById('notesField').value = '';

    renderAddonsList();
    updateModalUI();

    /* LOJA FECHADA: aplica desabilita no botão de adicionar ao carrinho */
    try {
        const btn = document.getElementById('addToCartBtn');
        if (btn) {
            const oldText = btn.textContent || '';
            disableCartWhenClosed(btn, null);
            if (!storeOpenGlobal.open && !btn.hasAttribute('data-title-old')) {
                btn.setAttribute('data-title-old', oldText);
            }
        }
    } catch(_) {}

    openModal('productModal');
}

function renderAddonsList() {
    const list = document.getElementById('addonsList');
    list.innerHTML = '';
    addons.forEach(addon => {
        const isChecked = modalSelectedAddons.includes(addon.id);
        const div = document.createElement('label');
        div.className = 'addon-item' + (isChecked ? ' checked' : '');
        div.innerHTML = `
            <input type="checkbox" value="${addon.id}" ${isChecked ? 'checked' : ''}>
            <div class="addon-info">
                <span class="addon-name">${addon.name}</span>
                <span class="addon-price">+ ${formatCurrency(addon.price)}</span>
            </div>
        `;
        const checkbox = div.querySelector('input');
        checkbox.addEventListener('change', (e) => {
            const id = parseInt(e.target.value);
            if (e.target.checked) {
                if (!modalSelectedAddons.includes(id)) modalSelectedAddons.push(id);
            } else {
                modalSelectedAddons = modalSelectedAddons.filter(a => a !== id);
            }
            div.classList.toggle('checked', e.target.checked);
            updateModalUI();
        });
        list.appendChild(div);
    });
}

function updateModalUI() {
    document.getElementById('qtyValue').textContent = modalQty;
    const addonsTotal = modalSelectedAddons.reduce((sum, id) => {
        const a = addons.find(x => x.id === id);
        return sum + (a ? a.price : 0);
    }, 0);
    const total = (selectedProduct.price + addonsTotal) * modalQty;
    document.getElementById('addCartPrice').textContent = formatCurrency(total);
}

function addToCartFromModal() {
    if (!selectedProduct) return;

    /* LOJA FECHADA: bloqueio adicional (se botão desabilitado não funcionar) */
    if (!storeOpenGlobal.open) {
        alert('🛑 A loja está fechada para novos pedidos no momento.\n\n' +
            (storeOpenGlobal.reabre_em ? `⏰ ${storeOpenGlobal.reabre_em}.\n\n` : '') +
            (storeOpenGlobal.mensagem_fechado || '') +
            '\n\nObrigada pelo carinho! 💗 Tatiê Ateliê & Cestas.');
        return;
    }

    const notes = document.getElementById('notesField').value.trim();
    const addonsTotal = modalSelectedAddons.reduce((sum, id) => {
        const a = addons.find(x => x.id === id);
        return sum + (a ? a.price : 0);
    }, 0);
    const unitPrice = selectedProduct.price + addonsTotal;

    cart.push({
        id: generateId(),
        productId: selectedProduct.id,
        name: selectedProduct.name,
        image: selectedProduct.image,
        unitPrice: unitPrice,
        quantity: modalQty,
        addons: modalSelectedAddons.map(id => {
            const a = addons.find(x => x.id === id);
            return { id, name: a.name, price: a.price };
        }),
        notes: notes
    });

    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCartCount();
    closeModal('productModal');

    setTimeout(() => openCartModal(), 150);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function openCartModal() {
    renderCartItems();
    appliedCoupon = null;
    document.getElementById('couponCode').value = '';
    document.getElementById('couponMessage').textContent = '';
    document.getElementById('couponMessage').className = 'coupon-message';
    setMinDate();
    updateCartSummary();
    openModal('cartModal');
}

function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const checkoutSection = document.getElementById('checkoutSection');

    if (cart.length === 0) {
        container.innerHTML = '<p class="cart-empty">Sua sacola está vazia. 🥺</p>';
        checkoutSection.style.display = 'none';
        return;
    }

    checkoutSection.style.display = 'flex';
    container.innerHTML = '';

    cart.forEach(item => {
        const addonsText = item.addons.length > 0 ? item.addons.map(a => `${a.name}`).join(', ') : '';
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"
                 onerror="this.src='https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20gift%20basket%20pink%20wine%20decoration%20ribbon&image_size=landscape_4_3'">
            <div class="cart-item-info">
                <h4 class="cart-item-name">
                    ${item.name}
                    <span class="cart-item-qty">${item.quantity}x</span>
                </h4>
                ${addonsText ? `<p class="cart-item-addons">🎁 ${addonsText}</p>` : ''}
                ${item.notes ? `<p class="cart-item-notes">📝 ${item.notes}</p>` : ''}
                <div class="cart-item-footer">
                    <span class="cart-item-price">${formatCurrency(item.unitPrice * item.quantity)}</span>
                    <button class="cart-item-remove" data-item-id="${item.id}">🗑️ Remover</button>
                </div>
            </div>
        `;
        div.querySelector('.cart-item-remove').addEventListener('click', () => removeCartItem(item.id));
        container.appendChild(div);
    });
}

function removeCartItem(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCartCount();
    renderCartItems();
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

    let delivery = 0;
    let deliveryName = '';

    if (cepDeliveryOverride) {
        delivery = cepDeliveryOverride.price || 0;
        deliveryName = cepDeliveryOverride.name || 'Frete calculado por CEP';
    } else {
        const neighborhoodId = parseInt(document.getElementById('neighborhoodSelect').value);
        if (neighborhoodId) {
            const d = deliveryRates.find(x => x.id === neighborhoodId);
            delivery = d ? d.price : 0;
            deliveryName = d ? d.name : '';
        }
    }

    let discount = 0;
    const discountRow = document.getElementById('summaryDiscountRow');
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percent') {
            discount = subtotal * (appliedCoupon.value / 100);
        } else {
            discount = appliedCoupon.value;
        }
        discountRow.style.display = 'flex';
        document.getElementById('summaryDiscount').textContent = '- ' + formatCurrency(discount);
    } else {
        discountRow.style.display = 'none';
    }

    const total = subtotal + delivery - discount;

    document.getElementById('summarySubtotal').textContent = formatCurrency(subtotal);
    const hasDelivery = cepDeliveryOverride || parseInt(document.getElementById('neighborhoodSelect').value);
    document.getElementById('summaryDelivery').textContent = !hasDelivery
        ? 'Informe o CEP ou escolha a região'
        : (delivery === 0 ? 'Grátis' : formatCurrency(delivery));
    document.getElementById('summaryTotal').textContent = formatCurrency(Math.max(0, total));
    document.getElementById('pixTotalValue').textContent = 'Total: ' + formatCurrency(Math.max(0, total));

    /* LOJA FECHADA: desabilita botão "Finalizar Pedido" se existir */
    try {
        const btnFinish = document.getElementById('finishOrder');
        if (btnFinish) {
            if (storeOpenGlobal.open) {
                btnFinish.disabled = false;
                btnFinish.style.opacity = '';
                btnFinish.style.cursor = '';
            } else {
                btnFinish.disabled = true;
                btnFinish.style.opacity = '0.7';
                btnFinish.style.cursor = 'not-allowed';
            }
        }
    } catch(_) {}
}

/* Alias usado no handleCepSearch (mantém compatibilidade) */
const updateCartTotals = updateCartSummary;

function handlePaymentChange() {
    const selected = document.querySelector('input[name="payment"]:checked');
    const pixBox = document.getElementById('pixPaymentBox');
    if (selected && selected.value === 'Pix') {
        pixBox.style.display = 'flex';
    } else {
        pixBox.style.display = 'none';
    }
}

function copyPixKey() {
    const btn = document.getElementById('copyPixBtn');
    const key = PIX_KEY;
    const onSuccess = () => {
        const original = btn.textContent;
        btn.textContent = '✅ Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove('copied');
        }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(key).then(onSuccess).catch(() => fallbackCopy(key, onSuccess));
    } else {
        fallbackCopy(key, onSuccess);
    }
}

function fallbackCopy(text, onSuccess) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        onSuccess();
    } catch (e) {
        alert('Chave Pix: ' + text);
    }
    document.body.removeChild(ta);
}

function applyCoupon() {
    const code = document.getElementById('couponCode').value.trim().toUpperCase();
    const msgEl = document.getElementById('couponMessage');

    if (!code) {
        msgEl.textContent = 'Digite um cupom válido.';
        msgEl.className = 'coupon-message error';
        return;
    }

    const coupon = coupons.find(c => c.code.toUpperCase() === code && c.active);
    if (!coupon) {
        msgEl.textContent = 'Cupom inválido ou expirado.';
        msgEl.className = 'coupon-message error';
        appliedCoupon = null;
    } else {
        appliedCoupon = coupon;
        msgEl.textContent = `✅ Cupom aplicado! ${coupon.type === 'percent' ? coupon.value + '% OFF' : formatCurrency(coupon.value) + ' de desconto'}`;
        msgEl.className = 'coupon-message success';
    }
    updateCartSummary();
}

function finishOrder() {
    /* LOJA FECHADA: bloqueio adicional (se botão desabilitado não funcionar) */
    if (!storeOpenGlobal.open) {
        alert('🛑 A loja está fechada para novos pedidos no momento.\n\n' +
            (storeOpenGlobal.reabre_em ? `⏰ ${storeOpenGlobal.reabre_em}.\n\n` : '') +
            (storeOpenGlobal.mensagem_fechado || '') +
            '\n\nObrigada pelo carinho! 💗 Tatiê Ateliê & Cestas.');
        return;
    }
    const neighborhoodId = parseInt(document.getElementById('neighborhoodSelect').value);
    const deliveryDate = document.getElementById('deliveryDate').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const buyerName = document.getElementById('buyerName').value.trim();
    const buyerWhatsapp = document.getElementById('buyerWhatsapp').value.trim();
    const receiverName = document.getElementById('receiverName').value.trim();
    const receiverPhone = document.getElementById('receiverPhone').value.trim();
    const receiverAddress = document.getElementById('receiverAddress').value.trim();
    const isAnonymous = document.getElementById('anonymousGift').checked;
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    let payment = null;
    paymentRadios.forEach(r => { if (r.checked) payment = r.value; });

    const errors = [];
    const temFreteCalculado = cepDeliveryOverride || neighborhoodId;
    if (!temFreteCalculado) errors.push('Informe o CEP para calcular o frete OU escolha a R.A. manualmente.');
    if (!deliveryDate) errors.push('Selecione a data de entrega.');
    if (!deliveryTime) errors.push('Selecione o horário de entrega.');
    if (!buyerName) errors.push('Informe seu nome.');
    if (!buyerWhatsapp) errors.push('Informe seu WhatsApp.');
    if (!receiverName) errors.push('Informe o nome do destinatário.');
    if (!receiverPhone) errors.push('Informe o telefone do destinatário.');
    if (!receiverAddress) errors.push('Informe o endereço completo de entrega.');
    if (!payment) errors.push('Selecione a forma de pagamento.');
    if (cart.length === 0) errors.push('Seu carrinho está vazio.');

    if (errors.length > 0) {
        alert('⚠️ Por favor, preencha os campos obrigatórios:\n\n• ' + errors.join('\n• '));
        return;
    }

    let deliveryName;
    let deliveryPrice;
    let metodoFrete;
    let cepEntrega;

    if (cepDeliveryOverride) {
        deliveryName = cepDeliveryOverride.name;
        deliveryPrice = cepDeliveryOverride.price;
        metodoFrete = 'automático por CEP (ViaCep)';
        cepEntrega = cepDeliveryOverride.cep;
    } else {
        const d = deliveryRates.find(x => x.id === neighborhoodId);
        deliveryName = d ? d.name : 'Região selecionada';
        deliveryPrice = d ? d.price : 0;
        metodoFrete = 'manual selecionado';
        cepEntrega = null;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    let discount = 0;
    if (appliedCoupon) {
        discount = appliedCoupon.type === 'percent' ? subtotal * (appliedCoupon.value / 100) : appliedCoupon.value;
    }
    const total = subtotal + deliveryPrice - discount;

    const dateObj = new Date(deliveryDate + 'T' + deliveryTime);
    const dateFormatted = dateObj.toLocaleDateString('pt-BR');
    const timeFormatted = deliveryTime;

    let message = `💗 *NOVO PEDIDO — ${STORE_NAME.toUpperCase()}* 💗\n\n`;
    message += '_' + STORE_SLOGAN + '_\n';
    message += '────────────────────\n';
    message += `📋 *PEDIDO:*\n`;
    cart.forEach((item, idx) => {
        message += `\n*${idx + 1}. ${item.name}* (${item.quantity}x)\n`;
        message += `   💰 ${formatCurrency(item.unitPrice * item.quantity)}\n`;
        if (item.addons.length > 0) {
            item.addons.forEach(a => {
                message += `   🎁 ${a.name} (+${formatCurrency(a.price)})\n`;
            });
        }
        if (item.notes) {
            message += `   📝 ${item.notes}\n`;
        }
    });
    message += '\n────────────────────\n';
    message += `💸 *Subtotal:* ${formatCurrency(subtotal)}\n`;
    message += `🚚 *Frete (${deliveryName}):* ${deliveryPrice === 0 ? 'Grátis' : formatCurrency(deliveryPrice)}\n`;
    if (cepEntrega) {
        message += `📮 *CEP:* ${maskCep(cepEntrega)}\n`;
    }
    message += `🧮 *Cálculo do frete:* ${metodoFrete}\n`;
    if (appliedCoupon) {
        message += `🎟️ *Cupom ${appliedCoupon.code}:* -${formatCurrency(discount)}\n`;
    }
    message += `💵 *TOTAL:* ${formatCurrency(Math.max(0, total))}\n`;
    message += '\n────────────────────\n';
    message += `📅 *Entrega:* ${dateFormatted} às ${timeFormatted}\n`;
    message += `📍 *Cidade:* Brasília — DF\n`;
    message += `🗺️ *Região Administrativa (R.A.):* ${deliveryName}\n\n`;
    message += `👤 *Comprador:*\n`;
    message += `   Nome: ${buyerName}\n`;
    message += `   WhatsApp: ${buyerWhatsapp}\n\n`;
    if (isAnonymous) {
        message += `🤫 *PRESENTE ANÔNIMO*\n\n`;
    }
    message += `🎁 *Destinatário:*\n`;
    message += `   Nome: ${receiverName}\n`;
    message += `   Telefone: ${receiverPhone}\n`;
    message += `   📍 *Endereço em Brasília/DF:* ${receiverAddress}\n\n`;
    message += `💳 *Pagamento:* ${payment}\n`;
    if (payment === 'Pix') {
        message += `⚡ *Chave Pix:* ${PIX_KEY}\n`;
        message += `💰 *Valor a pagar:* ${formatCurrency(Math.max(0, total))}\n`;
    }
    message += '\n────────────────────\n';
    message += '💕 Obrigada pela preferência! 💕';

    const encoded = encodeURIComponent(message);
    const waLink = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(waLink, '_blank');

    cart = [];
    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCartCount();
    closeModal('cartModal');
}

function openAdminModal() {
    const wasLogged = localStorage.getItem(STORAGE_KEYS.ADMIN_LOGGED) === 'true';
    if (wasLogged) {
        showAdminContent();
    } else {
        document.getElementById('adminLogin').style.display = 'block';
        document.getElementById('adminContent').style.display = 'none';
        document.getElementById('adminUsername').value = '';
        document.getElementById('adminPassword').value = '';
    }
    openModal('adminModal');
}

function adminLogin() {
    const user = document.getElementById('adminUsername').value.trim();
    const pwd = document.getElementById('adminPassword').value;
    if (!user || !pwd) {
        alert('⚠️ Preencha usuário e senha.');
        return;
    }
    if (user === ADMIN_USERNAME && pwd === ADMIN_PASSWORD) {
        localStorage.setItem(STORAGE_KEYS.ADMIN_LOGGED, 'true');
        showAdminContent();
    } else {
        alert('❌ Usuário ou senha incorretos!');
    }
}

function showAdminContent() {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminContent').style.display = 'block';
    renderAdminHeaderActionButtons();
    switchAdminTab('products');
}

function renderAdminHeaderActionButtons() {
    const wrap = document.getElementById('adminHeaderQuickActions');
    if (!wrap) return;
    const wa = storeContact.whatsapp || DEFAULT_WHATSAPP;
    const waLink = 'https://wa.me/' + wa.replace(/\D/g, '') + '?text=' + encodeURIComponent(storeContact.whatsappMessage || DEFAULT_WHATSAPP_MESSAGE);
    const ig = storeContact.instagram || DEFAULT_INSTAGRAM;
    const fb = storeContact.facebook  || DEFAULT_FACEBOOK;
    wrap.innerHTML =
        '<a href="' + waLink + '" target="_blank" class="btn-tiny" style="background:#25D366;color:#fff;text-decoration:none;border-color:#1FAD56;" title="Abrir WhatsApp comercial">' +
        '💬 WhatsApp</a> ' +
        (ig ? '<a href="' + ig + '" target="_blank" class="btn-tiny" style="background:#E1306C;color:#fff;text-decoration:none;border-color:#B82759;" title="Abrir Instagram">' +
        '📷 Instagram</a> ' : '') +
        (fb ? '<a href="' + fb + '" target="_blank" class="btn-tiny" style="background:#1877F2;color:#fff;text-decoration:none;border-color:#0F5DBC;" title="Abrir Facebook">' +
        '📘 Facebook</a> ' : '') +
        '<button id="adminLogoutBtnTop" class="btn-tiny" style="background:#FEE2E2;color:#991B1B;border-color:#FCA5A5;margin-left:6px;" title="Sair do painel admin">🚪 Sair</button>';
    const lg = document.getElementById('adminLogoutBtnTop');
    if (lg) lg.addEventListener('click', logoutAdmin);
}

function logoutAdmin() {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_LOGGED);
    document.getElementById('adminContent').style.display = 'none';
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
    closeModal('adminModal');
    alert('✅ Você saiu do painel administrativo.');
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-tab') === tabName);
    });
    document.querySelectorAll('.admin-tab-content').forEach(c => {
        c.classList.toggle('active', c.id === `tab-${tabName}`);
    });

    if (tabName === 'products') renderAdminProducts();
    else if (tabName === 'addons') renderAdminAddons();
    else if (tabName === 'delivery') renderAdminDelivery();
    else if (tabName === 'coupons') renderAdminCoupons();
    else if (tabName === 'storeStatus') renderAdminStoreStatusTab();
    else if (tabName === 'contact') renderAdminContactTab();
    else if (tabName === 'contactConfig') renderAdminContactConfigTab();
}

function renderAdminProducts() {
    const list = document.getElementById('adminProductsList');
    list.innerHTML = '';
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'admin-list-item';
        div.innerHTML = `
            <div class="admin-list-info">
                <div class="admin-list-name">${p.name}</div>
                <div class="admin-list-price">${formatCurrency(p.price)}</div>
                <div class="admin-list-extra">${p.items.length} itens • ${p.id}</div>
            </div>
            <div class="admin-list-actions">
                <button class="admin-btn-icon edit" title="Editar">✏️</button>
                <button class="admin-btn-icon delete" title="Excluir">🗑️</button>
            </div>
        `;
        div.querySelector('.edit').addEventListener('click', () => openEntityForm('product', p.id));
        div.querySelector('.delete').addEventListener('click', () => deleteEntity('product', p.id));
        list.appendChild(div);
    });
}

function renderAdminAddons() {
    const list = document.getElementById('adminAddonsList');
    list.innerHTML = '';
    addons.forEach(a => {
        const div = document.createElement('div');
        div.className = 'admin-list-item';
        div.innerHTML = `
            <div class="admin-list-info">
                <div class="admin-list-name">${a.name}</div>
                <div class="admin-list-price">${formatCurrency(a.price)}</div>
            </div>
            <div class="admin-list-actions">
                <button class="admin-btn-icon edit" title="Editar">✏️</button>
                <button class="admin-btn-icon delete" title="Excluir">🗑️</button>
            </div>
        `;
        div.querySelector('.edit').addEventListener('click', () => openEntityForm('addon', a.id));
        div.querySelector('.delete').addEventListener('click', () => deleteEntity('addon', a.id));
        list.appendChild(div);
    });
}

function renderAdminDelivery() {
    const list = document.getElementById('adminDeliveryList');
    list.innerHTML = '';
    deliveryRates.forEach(d => {
        const div = document.createElement('div');
        div.className = 'admin-list-item';
        div.innerHTML = `
            <div class="admin-list-info">
                <div class="admin-list-name">${d.name}</div>
                <div class="admin-list-price">${d.price === 0 ? 'Grátis' : formatCurrency(d.price)}</div>
            </div>
            <div class="admin-list-actions">
                <button class="admin-btn-icon edit" title="Editar">✏️</button>
                <button class="admin-btn-icon delete" title="Excluir">🗑️</button>
            </div>
        `;
        div.querySelector('.edit').addEventListener('click', () => openEntityForm('delivery', d.id));
        div.querySelector('.delete').addEventListener('click', () => deleteEntity('delivery', d.id));
        list.appendChild(div);
    });
}

function renderAdminCoupons() {
    const list = document.getElementById('adminCouponsList');
    list.innerHTML = '';
    coupons.forEach(c => {
        const valueText = c.type === 'percent' ? `${c.value}% OFF` : formatCurrency(c.value) + ' OFF';
        const div = document.createElement('div');
        div.className = 'admin-list-item';
        div.innerHTML = `
            <div class="admin-list-info">
                <div class="admin-list-name">${c.code} ${c.active ? '✅' : '⛔'}</div>
                <div class="admin-list-price">${valueText}</div>
            </div>
            <div class="admin-list-actions">
                <button class="admin-btn-icon edit" title="Editar">✏️</button>
                <button class="admin-btn-icon delete" title="Excluir">🗑️</button>
            </div>
        `;
        div.querySelector('.edit').addEventListener('click', () => openEntityForm('coupon', c.id));
        div.querySelector('.delete').addEventListener('click', () => deleteEntity('coupon', c.id));
        list.appendChild(div);
    });
}

function renderAdminContactTab() {
    const host = document.getElementById('tab-contact');
    if (!host) return;
    const wa = (storeContact.whatsapp || DEFAULT_WHATSAPP).replace(/\D/g, '');
    const waFmt = formatWhatsAppDisplay(wa);
    const waLink = 'https://wa.me/' + wa + '?text=' + encodeURIComponent(storeContact.whatsappMessage || DEFAULT_WHATSAPP_MESSAGE);
    const ig = storeContact.instagram || DEFAULT_INSTAGRAM;
    const fb = storeContact.facebook  || DEFAULT_FACEBOOK;
    const waClienteLink = 'https://wa.me/' + wa + '?text=' + encodeURIComponent('Olá! Vim pelo site e queria fazer um pedido 💗');
    host.innerHTML = `
        <h4 class="admin-section-title">📞 Contato Rápido da Loja</h4>
        <p style="color:#4B5563;margin:0 0 16px;">Clique abaixo para abrir diretamente as suas redes sociais e WhatsApp. Perfeito para compartilhar ou atender os clientes rapidamente!</p>

        <div class="contact-quick-grid">
            <a href="${waLink}" target="_blank" class="contact-card contact-card-wa">
                <div class="contact-card-icon">💬</div>
                <div class="contact-card-title">WhatsApp Comercial</div>
                <div class="contact-card-sub">${waFmt}</div>
                <div class="contact-card-hint">Atendimento / Pedidos</div>
            </a>

            <a href="${waClienteLink}" target="_blank" class="contact-card contact-card-wa-alt">
                <div class="contact-card-icon">🛍️</div>
                <div class="contact-card-title">Enviar Mensagem Padrão</div>
                <div class="contact-card-sub">Pronta para cliente</div>
                <div class="contact-card-hint">Abre direto no chat</div>
            </a>

            ${ig ? `
            <a href="${ig}" target="_blank" class="contact-card contact-card-ig">
                <div class="contact-card-icon">📷</div>
                <div class="contact-card-title">Instagram</div>
                <div class="contact-card-sub">@${extractHandle(ig,'instagram')}</div>
                <div class="contact-card-hint">Fotos e novidades</div>
            </a>` : ''}

            ${fb ? `
            <a href="${fb}" target="_blank" class="contact-card contact-card-fb">
                <div class="contact-card-icon">📘</div>
                <div class="contact-card-title">Facebook</div>
                <div class="contact-card-sub">${extractHandle(fb,'facebook')}</div>
                <div class="contact-card-hint">Página da loja</div>
            </a>` : ''}
        </div>

        <div style="margin-top:22px;padding:16px;border-radius:12px;background:#FEF3C7;border:1px dashed #D97706;color:#78350F;">
            💡 <b>Dica:</b> para editar o número do WhatsApp, links do Instagram/Facebook ou mensagem automática, clique na aba <b>⚙️ Config. Contato</b> ao lado!
        </div>
    `;
}

function renderAdminContactConfigTab() {
    const host = document.getElementById('tab-contactConfig');
    if (!host) return;
    host.innerHTML = `
        <h4 class="admin-section-title">⚙️ Configurar Contatos da Loja</h4>
        <p style="color:#4B5563;margin:0 0 16px;">Preencha abaixo os dados da sua loja. Eles são usados no Painel Admin e no Rodapé da vitrine pública. Fica salvo automaticamente no navegador.</p>

        <div class="admin-form" style="display:block;padding:0;">
            <div class="form-group">
                <label class="form-label">💬 WhatsApp (apenas números, ex: 5561995869522)</label>
                <input type="text" id="cfgWhatsapp" class="form-input" maxlength="15" value="${escapeAttr(storeContact.whatsapp || '')}" placeholder="5561995869522">
            </div>

            <div class="form-group">
                <label class="form-label">✍️ Mensagem automática ao abrir WhatsApp</label>
                <textarea id="cfgWamsg" class="form-input" rows="3" placeholder="Olá! Vim pelo site da Tatiê...">${escapeHtml(storeContact.whatsappMessage || '')}</textarea>
            </div>

            <div class="form-group">
                <label class="form-label">📷 Link do Instagram (URL completa)</label>
                <input type="text" id="cfgInsta" class="form-input" value="${escapeAttr(storeContact.instagram || '')}" placeholder="https://www.instagram.com/tatie.atelie.cestas/">
            </div>

            <div class="form-group">
                <label class="form-label">📘 Link do Facebook (URL completa)</label>
                <input type="text" id="cfgFace" class="form-input" value="${escapeAttr(storeContact.facebook || '')}" placeholder="https://www.facebook.com/tatieatelieecestas">
            </div>

            <div class="admin-form-buttons" style="justify-content:flex-start;">
                <button id="cfgResetBtn" class="btn-outline">↩️ Restaurar padrões</button>
                <button id="cfgSaveBtn" class="btn-primary">💾 Salvar configurações</button>
            </div>
        </div>
    `;
    const btnSave  = host.querySelector('#cfgSaveBtn');
    const btnReset = host.querySelector('#cfgResetBtn');
    if (btnSave)  btnSave.addEventListener('click', saveStoreContactConfig);
    if (btnReset) btnReset.addEventListener('click', resetStoreContactConfig);
}

function saveStoreContactConfig() {
    const wa   = (document.getElementById('cfgWhatsapp').value || '').replace(/\D/g, '').trim();
    const msg  = (document.getElementById('cfgWamsg').value || '').trim();
    const inst = (document.getElementById('cfgInsta').value || '').trim();
    const fb   = (document.getElementById('cfgFace').value || '').trim();

    if (!wa || wa.length < 12) {
        alert('⚠️ WhatsApp inválido. Use formato com DDI + DDD + número (ex: 5561995869522).');
        return;
    }
    if (inst && !/^https?:\/\//i.test(inst)) {
        alert('⚠️ Link do Instagram precisa começar com https://');
        return;
    }
    if (fb && !/^https?:\/\//i.test(fb)) {
        alert('⚠️ Link do Facebook precisa começar com https://');
        return;
    }

    storeContact = {
        whatsapp: wa,
        whatsappMessage: msg || DEFAULT_WHATSAPP_MESSAGE,
        instagram: inst,
        facebook: fb
    };
    whatsappNumber = wa;
    saveToStorage(STORAGE_KEYS.STORE_CONTACT, storeContact);
    localStorage.setItem(STORAGE_KEYS.WHATSAPP, wa);

    renderAdminHeaderActionButtons();
    renderFooter();
    try { renderTopSocialBar(); } catch(_) {}

    alert('✅ Configurações de contato salvas com sucesso!\n\nWhatsApp: ' + formatWhatsAppDisplay(wa) +
          (inst ? '\nInstagram: ' + inst : '') +
          (fb ? '\nFacebook: ' + fb : '') +
          '\n\nOs botões do Painel Admin, o topo da página inicial e o rodapé da loja já foram atualizados.');
}

function resetStoreContactConfig() {
    if (!confirm('Restaurar os dados padrões de contato da loja? (irá sobrescrever os campos abaixo)')) return;
    storeContact = {
        whatsapp: DEFAULT_WHATSAPP,
        whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
        instagram: DEFAULT_INSTAGRAM,
        facebook: DEFAULT_FACEBOOK
    };
    whatsappNumber = DEFAULT_WHATSAPP;
    saveToStorage(STORAGE_KEYS.STORE_CONTACT, storeContact);
    localStorage.setItem(STORAGE_KEYS.WHATSAPP, DEFAULT_WHATSAPP);
    renderAdminContactConfigTab();
    renderAdminHeaderActionButtons();
    renderFooter();
    try { renderTopSocialBar(); } catch(_) {}
    alert('✅ Dados de contato restaurados para os padrões da loja.');
}

/* ========== LOJA ABERTA / FECHADA (via Firestore onSnapshot GLOBAL) ========== */
function renderAdminStoreStatusTab() {
    const host = document.getElementById('tab-storeStatus');
    if (!host) return;
    const isOpen = !!storeOpenGlobal.open;
    host.innerHTML = `
        <h4 class="admin-section-title">🟢/🛑 Loja Aberta ou Fechada</h4>
        <p style="color:#4B5563;margin:0 0 18px;">Ative ou desative os pedidos aqui. A alteração é <b>GLOBAL</b>: atualiza em tempo real em TODOS os dispositivos e navegadores. Os clientes verão um banner vermelho no topo da página e não conseguirão mais adicionar cestas ao carrinho enquanto a loja estiver fechada.</p>

        <div class="store-status-card">
            <div class="store-status-row">
                <div>
                    <div class="store-status-title">Pedidos estão</div>
                    <div id="storeStatusLiveText" class="store-status-big ${isOpen ? 'store-status-open' : 'store-status-closed'}">
                        ${isOpen ? '🟢 ABERTOS para todos' : '🛑 FECHADOS agora'}
                    </div>
                </div>
                <label class="switch-toggle" title="Clique para mudar">
                    <input type="checkbox" id="storeStatusToggle" ${isOpen ? 'checked' : ''}>
                    <span class="switch-slider"></span>
                </label>
            </div>

            <div class="form-group" style="margin-top:18px;">
                <label class="form-label">📅 Reabertura prevista (opcional, aparece no banner ao cliente)</label>
                <input type="text" id="cfgReabre" class="form-input" maxlength="80"
                    placeholder="Ex.: Reabrimos segunda-feira às 09h / Volto dia 20/09"
                    value="${escapeAttr(storeOpenGlobal.reabre_em || '')}">
            </div>

            <div class="form-group">
                <label class="form-label">✍️ Mensagem personalizada (opcional, aparece no banner quando fechada)</label>
                <textarea id="cfgFechadoMsg" class="form-input" rows="3"
                    placeholder="Ex.: Estamos de recesso até o dia 25. Obrigada pelo carinho! 💗">${escapeHtml(storeOpenGlobal.mensagem_fechado || '')}</textarea>
            </div>

            <div class="admin-form-buttons" style="justify-content:flex-start;">
                <button id="storeStatusSaveBtn" class="btn-primary">💾 Salvar e aplicar agora</button>
                <button id="storeStatusReabrirBtn" class="btn-outline" style="${isOpen ? 'display:none;' : ''}">🟢 Reabrir a loja agora</button>
                <button id="storeStatusFecharBtn" class="btn-outline" style="${isOpen ? '' : 'display:none;'}">🛑 Fechar a loja agora</button>
            </div>

            <div style="margin-top:18px;padding:14px 16px;border-radius:12px;background:#EFF6FF;border:1px dashed #3B82F6;color:#1E40AF;line-height:1.55;">
                💡 <b>Como funciona?</b> Quando você fecha a loja:
                <ul style="margin:6px 0 0 22px;padding:0;">
                    <li>Todos os clientes recebem o banner vermelho no topo <b>SEM PRECISAR ATUALIZAR A PÁGINA</b> (onSnapshot)</li>
                    <li>Botão "Adicionar ao carrinho" em TODAS as cestas fica desativado e cinza</li>
                    <li>Botão "Finalizar Pedido" do carrinho também fica bloqueado</li>
                    <li>Badge do header muda de "🟢 Aberto hoje" para "🛑 Fechado agora"</li>
                    <li>Clientes com carrinho cheio não conseguem finalizar enquanto a loja estiver fechada</li>
                </ul>
            </div>

            <div style="margin-top:16px;padding:16px 18px;border-radius:14px;background:#FEF9C3;border:1px solid #CA8A04;color:#713F12;line-height:1.6;">
                🔐 <b>Apareceu "Missing or insufficient permissions"?</b> Suas regras do Firestore precisam liberar a coleção <code style="background:#FEF08A;padding:1px 6px;border-radius:4px;">store_config</code>.
                <div style="margin-top:10px;">
                    <a href="https://console.firebase.google.com/project/tatie-atelie-cestas/firestore/rules" target="_blank"
                       style="display:inline-block;padding:7px 14px;background:#713F12;color:#FFF;text-decoration:none;border-radius:999px;font-weight:600;">
                       👉 Abrir Firestore → Regras
                    </a>
                    <button type="button" id="copyFirestoreRulesBtn"
                       style="margin-left:8px;padding:7px 14px;background:#92400E;color:#FFF;border:none;border-radius:999px;font-weight:600;cursor:pointer;">
                       📋 Copiar regras prontas
                    </button>
                </div>
                <pre id="firestoreRulesReady" style="margin-top:12px;padding:12px 14px;background:#FFF7ED;border:1px solid #FDBA74;border-radius:10px;font-size:12px;line-height:1.55;overflow-x:auto;">rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /cestas/{document=**} {
      allow read, write: if true;
    }
    match /store_config/{document=**} {
      allow read, write: if true;
    }
  }
}</pre>
            </div>
        </div>
    `;

    const toggle = host.querySelector('#storeStatusToggle');
    const btnSave = host.querySelector('#storeStatusSaveBtn');
    const btnReabrir = host.querySelector('#storeStatusReabrirBtn');
    const btnFechar = host.querySelector('#storeStatusFecharBtn');
    const btnCopyRules = host.querySelector('#copyFirestoreRulesBtn');

    if (btnCopyRules) btnCopyRules.addEventListener('click', () => {
        const pre = document.getElementById('firestoreRulesReady');
        if (pre) {
            const txt = pre.textContent || pre.innerText;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(txt).then(
                    () => alert('✅ Regras copiadas! Agora é só colar no Console do Firebase e clicar em Publicar.'),
                    () => {
                        const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta);
                        ta.select(); try { document.execCommand('copy'); alert('✅ Regras copiadas!'); } catch(_) {}
                        document.body.removeChild(ta);
                    }
                );
            } else {
                const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta);
                ta.select(); try { document.execCommand('copy'); alert('✅ Regras copiadas!'); } catch(_) {}
                document.body.removeChild(ta);
            }
        }
    });

    if (toggle) toggle.addEventListener('change', () => {
        const nowChecked = toggle.checked;
        const big = host.querySelector('#storeStatusLiveText');
        if (big) {
            big.textContent = nowChecked ? '🟢 ABERTOS para todos' : '🛑 FECHADOS agora';
            big.classList.toggle('store-status-open', nowChecked);
            big.classList.toggle('store-status-closed', !nowChecked);
        }
        if (btnReabrir) btnReabrir.style.display = nowChecked ? 'none' : '';
        if (btnFechar) btnFechar.style.display = nowChecked ? '' : 'none';
    });

    if (btnSave)    btnSave.addEventListener('click', saveStoreStatusFromAdmin);
    if (btnReabrir) btnReabrir.addEventListener('click', () => { if (toggle) toggle.checked = true; toggle.dispatchEvent(new Event('change')); saveStoreStatusFromAdmin(); });
    if (btnFechar)  btnFechar.addEventListener('click', () =>  { if (toggle) toggle.checked = false; toggle.dispatchEvent(new Event('change')); saveStoreStatusFromAdmin(); });
}

async function saveStoreStatusFromAdmin() {
    const host = document.getElementById('tab-storeStatus');
    if (!host) return;
    const toggle = host.querySelector('#storeStatusToggle');
    const inputReabre = host.querySelector('#cfgReabre');
    const inputMsg = host.querySelector('#cfgFechadoMsg');

    const open = toggle ? toggle.checked : true;
    const reabre_em = (inputReabre ? inputReabre.value : '').trim();
    const mensagem_fechado = (inputMsg ? inputMsg.value : '').trim();

    /* 1) APLICAR LOCALMENTE DE FORMA IMEDIATA (funciona mesmo sem permissão Firestore) */
    applyStoreStatusGlobal({ open, reabre_em, mensagem_fechado }, { origem: 'localstorage' });

    if (!window.FirebaseAPI || typeof window.FirebaseAPI.setStoreStatus !== 'function') {
        alert('✅ Alteração salva LOCALMENTE no seu aparelho.\n\n⚠️ Firebase ainda não conectou. A alteração valerá para este dispositivo agora. Para sincronizar com TODOS os clientes, atualize a página (F5) e tente salvar novamente quando aparecer "☁️ Conectado ao Firebase".');
        return;
    }

    try {
        await Promise.race([
            window.FirebaseAPI.setStoreStatus({ open, reabre_em, mensagem_fechado }),
            new Promise((_, rj) => setTimeout(() => rj(new Error('timeout_setStoreStatus_12s')), 12000))
        ]);
        alert('✅ Status da loja alterado com sucesso!\n\n' +
            (open ? '🟢 Loja ABERTA — clientes já podem adicionar cestas ao carrinho.' :
                   '🛑 Loja FECHADA — banner vermelho apareceu para todos em tempo real, carrinho bloqueado.') +
            '\n\nA alteração já está valendo GLOBALMENTE em todos os dispositivos.');
    } catch (err) {
        console.error('[SALVAR LOJA ABERTA] Falhou (mas já salvamos LOCALMENTE):', err);
        const ePerm = /permission|permiss|insufficient|denied/i.test(err.message || String(err));
        const rulesLink = 'https://console.firebase.google.com/project/tatie-atelie-cestas/firestore/rules';
        if (ePerm) {
            alert('⚠️ Funcionou no SEU APARELHO, mas NÃO sincronizou com os outros!\n\n' +
                'Problema: Faltam PERMISSÕES no Firestore para a coleção "store_config".\n\n' +
                'COMO RESOLVER (1 minuto):\n' +
                '1) Abra este link no Console Firebase → ' + rulesLink + '\n' +
                '2) Apague as regras antigas e cole o texto abaixo (completinho):\n\n' +
                'rules_version = \'2\';\n' +
                'service cloud.firestore {\n' +
                '  match /databases/{database}/documents {\n' +
                '    match /cestas/{document=**} {\n' +
                '      allow read, write: if true;\n' +
                '    }\n' +
                '    match /store_config/{document=**} {\n' +
                '      allow read, write: if true;\n' +
                '    }\n' +
                '  }\n' +
                '}\n\n' +
                '3) Clique em "Publicar"\n\n' +
                'Enquanto isso, a loja já está ' + (open ? '🟢 ABERTA' : '🛑 FECHADA') + ' no SEU navegador.');
        } else {
            alert('⚠️ Funcionou no SEU APARELHO.\n\nNão conseguimos sincronizar com o Firebase agora (sem internet?).\nA loja já está ' + (open ? '🟢 ABERTA' : '🛑 FECHADA') + ' para você. Quando a internet voltar, basta clicar em Salvar novamente para aplicar globalmente.\n\nErro técnico: ' + (err.message || String(err)));
        }
    }
}

function applyStoreStatusGlobal(status, meta) {
    const prev = storeOpenGlobal || { open: true };
    storeOpenGlobal = Object.assign({ open: true, reabre_em: '', mensagem_fechado: '' }, status || {});
    const doCache = !!(meta && meta.doCache);

    /* Sempre salvamos no localStorage também: garante fallback offline e se Firestore não autorizar */
    try { saveToStorage(STORAGE_KEYS.STORE_STATUS, storeOpenGlobal); } catch(_) {}

    if (doCache) {
        console.warn('[STATUS LOJA] Recebido DO CACHE LOCAL (aguardando confirmação do servidor)... status =', storeOpenGlobal.open ? 'ABERTA' : 'FECHADA');
    } else if (meta && meta.doServidor !== undefined) {
        console.log('[STATUS LOJA] Confirmado DIRETO DO SERVIDOR ✅ status =', storeOpenGlobal.open ? 'ABERTA' : 'FECHADA');
    } else if (meta && meta.origem === 'localstorage') {
        console.log('[STATUS LOJA] Aplicado do FALLBACK LOCAL (Firestore indisponível/permissão):', storeOpenGlobal.open ? 'ABERTA' : 'FECHADA');
    }
    renderStoreClosedBannerAndBadge();
    try { renderAdminStoreStatusTab(); } catch(_) {}
    if (prev.open !== storeOpenGlobal.open) {
        try { renderProducts(); } catch(_) {}
    }
    try { renderCartModal(); } catch(_) {}
    try { updateCartSummary(); } catch(_) {}
}

function renderStoreClosedBannerAndBadge() {
    const isOpen = !!storeOpenGlobal.open;
    /* 1) Banner topo da vitrine */
    const banner = document.getElementById('storeClosedBanner');
    const tit = document.getElementById('storeClosedTit');
    const msg = document.getElementById('storeClosedMsg');
    if (banner) {
        if (isOpen) {
            banner.style.display = 'none';
        } else {
            if (tit) tit.textContent = '🛑 A loja está fechada para novos pedidos no momento.';
            if (msg) {
                const parts = [];
                if (storeOpenGlobal.reabre_em) parts.push(`⏰ ${storeOpenGlobal.reabre_em}.`);
                if (storeOpenGlobal.mensagem_fechado) parts.push(storeOpenGlobal.mensagem_fechado);
                msg.textContent = parts.length ? (' ' + parts.join(' ')) : '';
            }
            banner.style.display = 'block';
        }
    }
    /* 2) Badge header */
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.getElementById('statusText');
    if (statusDot) {
        statusDot.style.background = isOpen ? '#22C55E' : '#EF4444';
        statusDot.style.boxShadow = `0 0 0 4px ${isOpen ? 'rgba(34,197,94,0.18)' : 'rgba(239,68,68,0.18)'}`;
    }
    if (statusText) {
        statusText.textContent = isOpen
            ? (storeOpenGlobal.reabre_em ? 'Aberto hoje' : 'Aberto hoje')
            : '🛑 Fechado agora';
        statusText.style.color = isOpen ? '' : '#B91C1C';
        statusText.style.fontWeight = isOpen ? '' : '700';
    }
    /* 3) Tab no admin muda cor de fundo */
    const tabBtn = document.querySelector('.admin-tab[data-tab="storeStatus"]');
    if (tabBtn) {
        tabBtn.textContent = isOpen ? '🟢 Loja Aberta' : '🛑 Loja Fechada';
        tabBtn.style.background = isOpen ? '' : '#FEF2F2';
        tabBtn.style.color = isOpen ? '' : '#991B1B';
    }
}

function disableCartWhenClosed(btnAdd, btnFinish) {
    const isOpen = !!storeOpenGlobal.open;
    if (btnAdd && typeof btnAdd.disabled !== 'undefined') {
        btnAdd.disabled = !isOpen;
        if (!isOpen) {
            btnAdd.setAttribute('data-title-old', btnAdd.textContent || '');
            btnAdd.innerHTML = '🛑 Loja fechada';
            btnAdd.style.opacity = '0.7';
            btnAdd.style.cursor = 'not-allowed';
        } else {
            if (btnAdd.hasAttribute('data-title-old')) {
                btnAdd.textContent = btnAdd.getAttribute('data-title-old');
                btnAdd.removeAttribute('data-title-old');
            }
            btnAdd.style.opacity = '';
            btnAdd.style.cursor = '';
        }
    }
    if (btnFinish && typeof btnFinish.disabled !== 'undefined') {
        btnFinish.disabled = !isOpen;
        if (!isOpen) {
            btnFinish.style.opacity = '0.7';
            btnFinish.style.cursor = 'not-allowed';
        } else {
            btnFinish.style.opacity = '';
            btnFinish.style.cursor = '';
        }
    }
}

function formatWhatsAppDisplay(raw) {
    const s = String(raw || '').replace(/\D/g,'');
    if (s.length === 13) return `+${s.slice(0,2)} (${s.slice(2,4)}) ${s.slice(4,9)}-${s.slice(9)}`;
    if (s.length === 11) return `(${s.slice(0,2)}) ${s.slice(2,7)}-${s.slice(7)}`;
    if (s.length === 10) return `(${s.slice(0,2)}) ${s.slice(2,6)}-${s.slice(6)}`;
    return raw || '';
}
function extractHandle(url, network) {
    try {
        if (!url) return '';
        const clean = url.replace(/\/+$/,'');
        const parts = clean.split('/').filter(Boolean);
        const last = parts.pop() || '';
        if (last.startsWith('@')) return last;
        if (network === 'instagram' && /^[A-Za-z0-9._-]+$/.test(last)) return '@' + last;
        if (network === 'facebook'  && /^[A-Za-z0-9.%-]+$/.test(last)) return last;
        return last;
    } catch(_) { return url || ''; }
}
function escapeHtml(s) {
    return String(s == null ? '' : s)
        .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function escapeAttr(s) {
    return escapeHtml(s).replace(/"/g,'&quot;');
}

function renderFooter() {
    const host = document.getElementById('footerContactHost');
    if (!host) return;
    const wa = (storeContact.whatsapp || DEFAULT_WHATSAPP).replace(/\D/g,'');
    const waFmt = formatWhatsAppDisplay(wa);
    const waLink = 'https://wa.me/' + wa;
    const ig = storeContact.instagram || '';
    const fb = storeContact.facebook  || '';
    const igHandle = ig ? extractHandle(ig,'instagram') : '';
    const fbHandle = fb ? extractHandle(fb,'facebook') : '';

    let html = `<div>WhatsApp: <a href="${waLink}" target="_blank" rel="noopener">${waFmt}</a></div>`;
    if (ig || fb) {
        html += `<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:14px;justify-content:center;">`;
        if (ig) html += `<a href="${ig}" target="_blank" rel="noopener" style="color:#E1306C;text-decoration:none;font-weight:600;">📷 ${igHandle || 'Instagram'}</a>`;
        if (fb) html += `<a href="${fb}" target="_blank" rel="noopener" style="color:#1877F2;text-decoration:none;font-weight:600;">📘 ${fbHandle || 'Facebook'}</a>`;
        html += `</div>`;
    }
    host.innerHTML = html;
}

function renderTopSocialBar() {
    const wa = (storeContact.whatsapp || DEFAULT_WHATSAPP).replace(/\D/g,'');
    const waFmt = formatWhatsAppDisplay(wa);
    const ig = storeContact.instagram || '';
    const fb = storeContact.facebook  || '';
    const igHandle = ig ? extractHandle(ig,'instagram') : '';
    const fbHandle = fb ? extractHandle(fb,'facebook') : '';
    const waMsg = encodeURIComponent(storeContact.whatsappMessage || DEFAULT_WHATSAPP_MESSAGE);
    const waLink = 'https://wa.me/' + wa + '?text=' + waMsg;

    /* ========== 1) Barra SUPERIOR (acima do header, faixa completa) ========== */
    const stripHost = document.getElementById('topStripSocialHost');
    if (stripHost) {
        let s = '';
        s += `<a href="${waLink}" target="_blank" rel="noopener" class="top-chip top-chip-wa" title="Chamar no WhatsApp (${waFmt})">
            <span class="top-chip-icon">💬</span>
            <span class="top-chip-label">WhatsApp</span>
        </a>`;
        if (ig) s += `<a href="${ig}" target="_blank" rel="noopener" class="top-chip top-chip-ig" title="Abrir Instagram ${igHandle}">
            <span class="top-chip-icon">📷</span>
            <span class="top-chip-label">Instagram</span>
        </a>`;
        if (fb) s += `<a href="${fb}" target="_blank" rel="noopener" class="top-chip top-chip-fb" title="Abrir Facebook ${fbHandle}">
            <span class="top-chip-icon">📘</span>
            <span class="top-chip-label">Facebook</span>
        </a>`;
        stripHost.innerHTML = s;
    }

    /* ========== 2) Barra INLINE NO HEADER (ao lado do status "Aberto hoje") ========== */
    const headerHost = document.getElementById('headerSocialHost');
    if (headerHost) {
        let h = '';
        h += `<a href="${waLink}" target="_blank" rel="noopener" class="header-social-icon header-social-icon-wa" title="WhatsApp ${waFmt}">💬</a>`;
        if (ig) h += `<a href="${ig}" target="_blank" rel="noopener" class="header-social-icon header-social-icon-ig" title="Instagram ${igHandle}">📷</a>`;
        if (fb) h += `<a href="${fb}" target="_blank" rel="noopener" class="header-social-icon header-social-icon-fb" title="Facebook ${fbHandle}">📘</a>`;
        headerHost.innerHTML = h;
    }
}

function openEntityForm(entity, editId = null) {
    adminEditingEntity = entity;
    adminEditingId = editId;

    if (entity === 'product') {
        document.getElementById('productForm').style.display = 'block';
        document.getElementById('productFormTitle').textContent = editId ? 'Editar Cesta' : 'Nova Cesta';
        if (editId) {
            const p = products.find(x => x.id === editId);
            document.getElementById('pImage').value = p.image || '';
            document.getElementById('pName').value = p.name || '';
            document.getElementById('pItems').value = (p.items || []).join('\n');
            document.getElementById('pDesc').value = p.description || '';
            document.getElementById('pPrice').value = p.price || 0;
        } else {
            document.getElementById('pImage').value = '';
            document.getElementById('pName').value = '';
            document.getElementById('pItems').value = '';
            document.getElementById('pDesc').value = '';
            document.getElementById('pPrice').value = '';
        }
    } else if (entity === 'addon') {
        document.getElementById('addonForm').style.display = 'block';
        document.getElementById('addonFormTitle').textContent = editId ? 'Editar Adicional' : 'Novo Adicional';
        if (editId) {
            const a = addons.find(x => x.id === editId);
            document.getElementById('aName').value = a.name || '';
            document.getElementById('aPrice').value = a.price || 0;
        } else {
            document.getElementById('aName').value = '';
            document.getElementById('aPrice').value = '';
        }
    } else if (entity === 'delivery') {
        document.getElementById('deliveryForm').style.display = 'block';
        document.getElementById('deliveryFormTitle').textContent = editId ? 'Editar Taxa' : 'Nova Taxa';
        if (editId) {
            const d = deliveryRates.find(x => x.id === editId);
            document.getElementById('dName').value = d.name || '';
            document.getElementById('dPrice').value = d.price || 0;
        } else {
            document.getElementById('dName').value = '';
            document.getElementById('dPrice').value = '';
        }
    } else if (entity === 'coupon') {
        document.getElementById('couponForm').style.display = 'block';
        document.getElementById('couponFormTitle').textContent = editId ? 'Editar Cupom' : 'Novo Cupom';
        if (editId) {
            const c = coupons.find(x => x.id === editId);
            document.getElementById('cCode').value = c.code || '';
            document.getElementById('cType').value = c.type || 'percent';
            document.getElementById('cValue').value = c.value || 0;
            document.getElementById('cActive').checked = !!c.active;
        } else {
            document.getElementById('cCode').value = '';
            document.getElementById('cType').value = 'percent';
            document.getElementById('cValue').value = '';
            document.getElementById('cActive').checked = true;
        }
    }
}

function closeEntityForm(entity) {
    if (entity === 'product') document.getElementById('productForm').style.display = 'none';
    else if (entity === 'addon') document.getElementById('addonForm').style.display = 'none';
    else if (entity === 'delivery') document.getElementById('deliveryForm').style.display = 'none';
    else if (entity === 'coupon') document.getElementById('couponForm').style.display = 'none';
    adminEditingEntity = null;
    adminEditingId = null;
}

function saveEntityProduct() {
    const image = document.getElementById('pImage').value.trim();
    const name = document.getElementById('pName').value.trim();
    const itemsText = document.getElementById('pItems').value;
    const desc = document.getElementById('pDesc').value.trim();
    const price = parseFloat(document.getElementById('pPrice').value);

    if (!name || !price || isNaN(price)) {
        alert('Preencha nome e preço da cesta.');
        return;
    }

    const items = itemsText.split('\n').map(i => i.trim()).filter(i => i.length > 0);
    const obj = {
        name,
        image: image || 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20gift%20basket%20pink%20wine%20decoration%20ribbon&image_size=landscape_4_3',
        items,
        description: desc,
        price
    };

    if (adminEditingId) {
        const idx = products.findIndex(p => p.id === adminEditingId);
        if (idx !== -1) products[idx] = { ...products[idx], ...obj };
    } else {
        obj.id = generateId();
        products.push(obj);
    }
    saveToStorage(STORAGE_KEYS.PRODUCTS, products);
    renderProducts();
    renderAdminProducts();
    closeEntityForm('product');
}

function saveEntityAddon() {
    const name = document.getElementById('aName').value.trim();
    const price = parseFloat(document.getElementById('aPrice').value);

    if (!name || isNaN(price)) {
        alert('Preencha nome e preço do adicional.');
        return;
    }

    const obj = { name, price };
    if (adminEditingId) {
        const idx = addons.findIndex(a => a.id === adminEditingId);
        if (idx !== -1) addons[idx] = { ...addons[idx], ...obj };
    } else {
        obj.id = generateId();
        addons.push(obj);
    }
    saveToStorage(STORAGE_KEYS.ADDONS, addons);
    renderAdminAddons();
    closeEntityForm('addon');
}

function saveEntityDelivery() {
    const name = document.getElementById('dName').value.trim();
    const price = parseFloat(document.getElementById('dPrice').value);

    if (!name || isNaN(price)) {
        alert('Preencha bairro e valor da taxa.');
        return;
    }

    const obj = { name, price };
    if (adminEditingId) {
        const idx = deliveryRates.findIndex(d => d.id === adminEditingId);
        if (idx !== -1) deliveryRates[idx] = { ...deliveryRates[idx], ...obj };
    } else {
        obj.id = generateId();
        deliveryRates.push(obj);
    }
    saveToStorage(STORAGE_KEYS.DELIVERY, deliveryRates);
    renderAdminDelivery();
    renderDeliveryOptions();
    closeEntityForm('delivery');
}

function saveEntityCoupon() {
    const code = document.getElementById('cCode').value.trim().toUpperCase();
    const type = document.getElementById('cType').value;
    const value = parseFloat(document.getElementById('cValue').value);
    const active = document.getElementById('cActive').checked;

    if (!code || isNaN(value)) {
        alert('Preencha código e valor do cupom.');
        return;
    }

    const obj = { code, type, value, active };
    if (adminEditingId) {
        const idx = coupons.findIndex(c => c.id === adminEditingId);
        if (idx !== -1) coupons[idx] = { ...coupons[idx], ...obj };
    } else {
        obj.id = generateId();
        coupons.push(obj);
    }
    saveToStorage(STORAGE_KEYS.COUPONS, coupons);
    renderAdminCoupons();
    closeEntityForm('coupon');
}

function deleteEntity(entity, id) {
    const msgMap = {
        product: 'Tem certeza que deseja excluir esta cesta?',
        addon: 'Tem certeza que deseja excluir este adicional?',
        delivery: 'Tem certeza que deseja excluir esta taxa de entrega?',
        coupon: 'Tem certeza que deseja excluir este cupom?'
    };
    if (!confirm(msgMap[entity] || 'Confirmar exclusão?')) return;

    if (entity === 'product') {
        products = products.filter(p => p.id !== id);
        saveToStorage(STORAGE_KEYS.PRODUCTS, products);
        renderProducts();
        renderAdminProducts();
    } else if (entity === 'addon') {
        addons = addons.filter(a => a.id !== id);
        saveToStorage(STORAGE_KEYS.ADDONS, addons);
        renderAdminAddons();
    } else if (entity === 'delivery') {
        deliveryRates = deliveryRates.filter(d => d.id !== id);
        saveToStorage(STORAGE_KEYS.DELIVERY, deliveryRates);
        renderAdminDelivery();
        renderDeliveryOptions();
    } else if (entity === 'coupon') {
        coupons = coupons.filter(c => c.id !== id);
        saveToStorage(STORAGE_KEYS.COUPONS, coupons);
        renderAdminCoupons();
    }
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    setTimeout(() => {
        const anyActive = document.querySelectorAll('.modal.active').length > 0;
        if (!anyActive) document.body.style.overflow = '';
    }, 50);
}

/* ============================================================
   🔥 INTEGRAÇÃO FIREBASE (Fallback automático para localStorage)
   + UPLOAD LOCAL SEM FIREBASE (imagens comprimidas em Base64)
   ============================================================ */

let firebaseEnabledRuntime = false;
let pendingImageFile = null;
let pendingObjectUrl = null;
let pendingBase64Image = null;

/* ---------- Helper: Comprime imagem e converte para Base64 (Funciona SEM Firebase!) ---------- */
function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error('Não foi possível ler a imagem.'));
        reader.onload = () => resolve(String(reader.result || ''));
        reader.readAsDataURL(file);
    });
}

async function compressImageToBase64(file, maxWidth = 1200, quality = 0.78) {
    if (!file) return null;
    try {
        let rawBase64 = null;
        try {
            rawBase64 = await Promise.race([
                readFileAsDataURL(file),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout ao ler a imagem (tente outra foto).')), 12000))
            ]);
        } catch (err) {
            throw new Error('Falha ao ler a foto do arquivo: ' + (err.message || err));
        }

        const canvasSupported = typeof document !== 'undefined' && typeof HTMLCanvasElement !== 'undefined';
        if (!canvasSupported || /heic|heif|webp/i.test(file.type || '')) {
            // Fallback 1: HEIC / formatos que Canvas não suporta → retorna Base64 cru (já funciona)
            if (/heic|heif/i.test(file.type || '') || !canvasSupported) {
                return rawBase64;
            }
        }

        // Tenta comprimir via Canvas (JPEG)
        return await new Promise((resolve, reject) => {
            const safety = setTimeout(() => reject(new Error('Timeout ao comprimir. Usaremos a foto original.')), 12000);
            const img = new Image();
            img.onerror = () => {
                clearTimeout(safety);
                // Fallback 2: se Canvas não conseguir renderizar (ex: HEIC/MIME errado), devolve o Base64 cru
                resolve(rawBase64);
            };
            img.onload = () => {
                try {
                    let w = img.naturalWidth || img.width;
                    let h = img.naturalHeight || img.height;
                    if (!w || !h) { clearTimeout(safety); return resolve(rawBase64); }
                    if (w > maxWidth) {
                        h = Math.max(1, Math.round((h * maxWidth) / w));
                        w = maxWidth;
                    }
                    const canvas = document.createElement('canvas');
                    canvas.width = w;
                    canvas.height = h;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) { clearTimeout(safety); return resolve(rawBase64); }
                    ctx.drawImage(img, 0, 0, w, h);
                    let out = '';
                    try { out = canvas.toDataURL('image/jpeg', quality); } catch (_) { out = ''; }
                    clearTimeout(safety);
                    // Se a saída for vazia ou igual a nada, volta ao Base64 cru
                    resolve(out && out.length > 100 ? out : rawBase64);
                } catch (err) {
                    clearTimeout(safety);
                    resolve(rawBase64);
                }
            };
            img.src = rawBase64;
        });
    } catch (err) {
        console.warn('compressImageToBase64 falhou, usando fallback readAsDataURL.', err);
        if (file) return readFileAsDataURL(file);
        throw err;
    }
}

function kbOfBase64(b64) {
    if (!b64) return 0;
    const base64Length = b64.indexOf(',') !== -1 ? b64.split(',')[1].length : b64.length;
    return Math.round((base64Length * 3) / 4 / 1024);
}

function updateFirebaseStatus(state, msg) {
    const el = document.getElementById('fbStatus');
    if (!el) return;
    const dot = el.querySelector('.fb-dot');
    const text = el.querySelector('.fb-status-text');
    el.classList.remove('fb-status-offline', 'fb-status-online', 'fb-status-error');
    const map = { online: 'fb-status-online', offline: 'fb-status-offline', error: 'fb-status-error' };
    el.classList.add(map[state] || 'fb-status-offline');
    if (text) text.innerHTML = msg;
}

async function bootstrapFirebase() {
    try {
        if (!window.FirebaseAPI) {
            updateFirebaseStatus('error',
                '❌ Firebase SDK não carregou. O cadastro de cestas não funcionará. Atualize a página e verifique se o arquivo firebase-init.js está carregando corretamente.');
            showFirebaseError('Inicialização (SDK)', new Error('FirebaseAPI não foi criado no window.'),
                'O carregamento do SDK do Firebase falhou. Atualize a página (F5) ou verifique sua conexão com a internet.');
            return false;
        }
        const ok = await window.FirebaseAPI.init();
        firebaseEnabledRuntime = !!ok;

        if (ok) {
            updateFirebaseStatus('online',
                `☁️ Conectado ao Firebase · Projeto: <code>${window.FirebaseAPI.CONFIG.projectId}</code>. <b>Modo 100% nuvem:</b> salvar/excluir uma cesta reflete para TODOS os clientes em tempo real.`);

            /* ====== PING RÁPIDO (6s max) em Storage + Firestore antes de qualquer operação ====== */
            try {
                console.log('[bootstrapFirebase] Rodando ping rápido FIRESTORE (Storage é opcional hoje, não bloqueia)...');
                const ping = window.FirebaseAPI.pingFirebaseServices
                    ? await Promise.race([
                          window.FirebaseAPI.pingFirebaseServices(),
                          new Promise((_, rj) => setTimeout(() => rj(new Error('timeout_ping_total_8s')), 8000))
                      ])
                    : { ok: true, code: 'ping_not_available', message: 'Ping não disponível nesta versão do firebase-init.js.' };

                // ====== REGRA NOVA: Storage não é mais obrigatório. ======
                // Se ping.ok === false, VAMOS CHECAR SE FALHA É SÓ NO STORAGE.
                const storageOnlyCodes = new Set(['storage_warn','bucket_not_found','permission_denied','storage_error','timeout']);
                const hasFirestoreRealFailure = ping && !ping.ok && (
                    ping.code === 'firestore_permission_denied' ||
                    ping.code === 'firestore_disabled' ||
                    ping.code === 'firestore_error' ||
                    (ping && ping.message && /firestore/i.test(ping.message) && !/storage/i.test(ping.code || ''))
                );
                const isOnlyStorageWarning = ping && (
                    (ping.ok && ping.code && /storage/i.test(String(ping.code))) ||
                    (!ping.ok && !hasFirestoreRealFailure && storageOnlyCodes.has(ping.code))
                );
                const isPingReallyFailed = (!ping || !ping.ok) && !isOnlyStorageWarning && hasFirestoreRealFailure;

                if (isOnlyStorageWarning) {
                    console.log('[bootstrapFirebase] PING OK (Storage warning, NÃO BLOQUEIA):', ping && ping.code, ping && ping.message);
                    showFirebaseSuccess('Conexão validada: FIRESTORE 100% ativo e sincronia em tempo real ligada! (Storage aviso ignorado, não usamos Storage hoje). 🎉');
                    setTimeout(() => {
                        const bn = document.getElementById('fbStatusBanner');
                        if (bn) bn.style.display = 'none';
                    }, 8000);
                } else if (isPingReallyFailed) {
                    console.warn('[bootstrapFirebase] PING detectou problema FIRESTORE:', ping && ping.code, ping && ping.message);
                    const extraLinkFs = ping && (ping.code === 'firestore_permission_denied' || ping.code === 'firestore_disabled')
                        ? ' · <a href="' + CONSOLE_FIRESTORE_RULES + '" target="_blank" style="color:#991B1B;font-weight:700;text-decoration:underline;">👉 Abrir Firestore → Regras → Publicar</a>'
                        : '';
                    showFirebaseError('Configuração (Firestore OBRIGATÓRIO)', ping && ping.rawError,
                        '<b>Atenção:</b> ' + (ping && ping.message ? ping.message : 'Não foi possível validar os serviços do Firebase.') +
                        extraLinkFs +
                        ' · Sem resolver isso, nenhuma cesta será salva na nuvem.');
                } else {
                    console.log('[bootstrapFirebase] PING OK → ' + (ping.message || 'Serviços prontos.'));
                    showFirebaseSuccess('Conexão validada: Firebase (Firestore 100% OK + sincronia em tempo real). Você já pode cadastrar cestas! 🎉');
                    setTimeout(() => {
                        const bn = document.getElementById('fbStatusBanner');
                        if (bn) bn.style.display = 'none';
                    }, 6000);
                }
            } catch (pingErr) {
                console.warn('[bootstrapFirebase] Ping falhou (timeout/erro não esperado, NÃO BLOQUEIA pois o onSnapshot funciona como validação):', pingErr);
            }

            /* ====== onSnapshot EM TEMPO REAL: ATUALIZA A VITRINE E PAINEL ADMIN AUTOMATICAMENTE ====== */
            const snapshotUnsub = window.FirebaseAPI.subscribeProdutos(
                (listaCestas, meta) => {
                    const onlyActive = Array.isArray(listaCestas)
                        ? listaCestas.filter(p => p.ativo !== false)
                        : [];
                    const doCache = !!(meta && meta.doCache);
                    const doServidor = !!(meta && meta.doServidor);
                    if (doCache) {
                        console.warn('[FIREBASE onSnapshot - CESTAS] Recebemos', onlyActive.length, 'cestas (DO CACHE LOCAL). Mostrando provisoriamente, aguardando servidor...');
                        showCacheIndicator('Atualizando cestas do servidor…');
                    } else if (doServidor) {
                            console.log('[FIREBASE onSnapshot - CESTAS] Recebemos', onlyActive.length, 'cestas DIRETAS DO SERVIDOR ✅. Atualizando vitrine e admin...');
                            setTimeout(() => hideCacheIndicator(), 400);
                        }
                    products = onlyActive.length > 0 ? onlyActive : [];
                    try { renderProducts(); } catch(_) {}
                    try { renderAdminProducts(); } catch(_) {}
                    /* Limpa o localStorage antigo (1 vez) para garantir que o velho não seja confundido */
                    nukeLocalProductsCache();
                },
                (err) => {
                    console.error('[FIREBASE onSnapshot - CESTAS] Erro ao receber atualizações:', err);
                    hideCacheIndicator();
                    showFirebaseError('Leitura em tempo real (onSnapshot)', err,
                        'Não foi possível ler as cestas do Firestore. <b>Causa provável: Regras do Firestore não publicadas ou bloqueando a leitura.</b>');
                }
            );
            if (typeof snapshotUnsub === 'function') {
                window.__firebaseUnsubscribeProdutos = snapshotUnsub;
            }

            /* GetDocs inicial extra (garante 1ª carga mesmo em conexão ruim) */
            try {
                const loadOnce = await window.FirebaseAPI.loadCestas();
                if (loadOnce && loadOnce.ok && Array.isArray(loadOnce.list) && loadOnce.list.length > 0) {
                    const onlyActive = loadOnce.list.filter(p => p.ativo !== false);
                    if (onlyActive.length > 0 && products.length === 0) {
                        products = onlyActive;
                        try { renderProducts(); } catch(_) {}
                        try { renderAdminProducts(); } catch(_) {}
                    }
                }
            } catch(_) {}

            return true;
        } else {
            updateFirebaseStatus('error',
                '❌ Firebase NÃO foi inicializado. <b>Sem o Firebase, o cadastro de cestas não funciona (não há modo local).</b> Cole as credenciais corretamente no arquivo <code>firebase-init.js</code>.');
            showFirebaseError('Inicialização (Credenciais)', new Error('Firebase retornou disabled no init().'),
                'Credenciais do Firebase estão com placeholders. Preencha o objeto FIREBASE_CONFIG em firebase-init.js com as credenciais reais do projeto.');
            return false;
        }
    } catch (err) {
        console.error('bootstrapFirebase error', err);
        firebaseEnabledRuntime = false;
        updateFirebaseStatus('error',
            `⚠️ Erro ao conectar Firebase: ${err.message}. <b>O cadastro de cestas não funcionará até este problema ser resolvido.</b>`);
        showFirebaseError('Inicialização', err, 'Conexão com o Firebase não pôde ser feita. Verifique sua internet e as credenciais.');
        return false;
    }
}

async function loadProductsFromFirebaseOrFallback() {
    /* Antigo fallback. Como onSnapshot() já está ligado em bootstrapFirebase, esta função
       agora só garante uma carga getDocs() extra e é mantida para compatibilidade de chamadas antigas. */
    nukeLocalProductsCache();
    if (firebaseEnabledRuntime && window.FirebaseAPI) {
        const r = await window.FirebaseAPI.loadCestas();
        if (r.ok && Array.isArray(r.list) && r.list.length > 0) {
            const onlyActive = r.list.filter(p => p.ativo !== false);
            if (onlyActive.length > 0) {
                products = onlyActive;
                try { renderProducts(); } catch(_) {}
                try { renderAdminProducts(); } catch(_) {}
                return true;
            }
        }
    }
    return false;
}

async function importLocalProductsToFirebase() {
    const btn = document.getElementById('btnSyncFirebase');
    if (!firebaseEnabledRuntime || !window.FirebaseAPI) {
        alert('❌ Firebase não está disponível agora. Atualize a página, corrija as credenciais e as Regras do Firestore/Storage.');
        return;
    }

    /* 1. Carrega dados ANTIGOS do localStorage deste dispositivo (se houver) */
    const oldRaw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    let oldList = [];
    try { oldList = oldRaw ? JSON.parse(oldRaw) : []; } catch(_) { oldList = []; }

    /* 2. Se não tem nada no localStorage antigo, tenta usar a variável `products`
          atual (que pode ter DEFAULT_PRODUCTS ou os dados do onSnapshot já) */
    if (!Array.isArray(oldList) || oldList.length === 0) {
        oldList = (Array.isArray(products) && products.length > 0) ? products.slice() : [];
    }

    if (oldList.length === 0) {
        alert('ℹ️ Não há nenhuma cesta antiga para importar. Cadastre suas cestas no painel admin.');
        return;
    }

    if (!confirm(`Deseja realmente importar ${oldList.length} cestas locais para a nuvem?\n\n` +
                `Se elas já existirem no Firestore com o mesmo ID, serão atualizadas (mescladas).\n` +
                `Caso contrário, serão criadas como novas cestas.`)) return;

    if (btn) { btn.disabled = true; btn.textContent = '⏳ Importando...'; }
    let okCount = 0;
    let failCount = 0;
    for (let i = 0; i < oldList.length; i++) {
        const p = oldList[i];
        try {
            /* Limpa campos legados / image Base64 excessiva (não enviamos Base64 ao Firestore) */
            const payload = { ...p };
            if (typeof payload.image === 'string' && payload.image.indexOf('data:') === 0) {
                /* Aviso: imagens em Base64 locais não podem ser migradas automaticamente.
                   Será preciso re-uploadar a foto no painel admin após importar. */
                payload.image = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20gift%20basket%20pink%20wine%20decoration%20ribbon&image_size=landscape_4_3';
            }
            await window.FirebaseAPI.saveCesta(payload, p.id ? String(p.id) : null);
            okCount++;
        } catch (e) {
            failCount++;
            console.warn('[Importar] Falhou ao importar cesta ' + (p && p.name ? p.name : 'sem nome') + ':', e);
        }
    }

    /* Limpa o cache local depois de importar */
    nukeLocalProductsCache();

    if (failCount === 0) {
        alert(`✅ Importação concluída!\n\n${okCount} cestas importadas para a nuvem!\n\n` +
              `👉 AVISO: as cestas antigas que tinham fotos em Base64 local (salvas no seu navegador) receberam uma foto placeholder.\n` +
              `Edite cada cesta no Painel Admin para re-uploadar a foto original de volta =)`);
        showFirebaseSuccess(`${okCount} cestas locais importadas para a nuvem com sucesso!`);
    } else {
        alert(`⚠️ Importação finalizada com falhas:\n\n✅ ${okCount} importadas com sucesso\n❌ ${failCount} falharam.\n\nVerifique as Regras do Firestore (precisam permitir "create" e "update").`);
        showFirebaseError('Importar Cestas Locais → Nuvem',
            new Error(`${failCount} falhas ao importar.`),
            `Importadas ${okCount} cestas. ${failCount} falharam (verifique as Regras do Firestore).`);
    }
    if (btn) { btn.disabled = false; btn.textContent = '☁️ Importar Cestas Locais → Nuvem'; }
}

/* Helper: Comprime imagem via Canvas (max w/h=1280, q=0.82 JPEG) e retorna Base64. Suporta PNG/JPG/WEBP. */
async function compressImageFileToBase64(file, onProgress, maxSizePx) {
    maxSizePx = maxSizePx || 1280;
    const quality = 0.82;
    return new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            if (typeof onProgress === 'function') onProgress(5);
            reader.onerror = () => reject(new Error('Falha ao ler imagem selecionada (FileReader).'));
            reader.onload = (e) => {
                if (typeof onProgress === 'function') onProgress(15);
                const img = new Image();
                img.onerror = () => reject(new Error('Formato de imagem inválido. Use JPG, PNG ou WebP.'));
                img.onload = () => {
                    if (typeof onProgress === 'function') onProgress(30);
                    try {
                        let w = img.naturalWidth, h = img.naturalHeight;
                        const scale = Math.min(1, maxSizePx / Math.max(w, h));
                        w = Math.max(1, Math.round(w * scale));
                        h = Math.max(1, Math.round(h * scale));
                        const canvas = document.createElement('canvas');
                        canvas.width = w;
                        canvas.height = h;
                        const ctx = canvas.getContext('2d');
                        if (!ctx) { reject(new Error('Canvas não suportado no navegador.')); return; }
                        ctx.drawImage(img, 0, 0, w, h);
                        if (typeof onProgress === 'function') onProgress(60);
                        // Cede um tick pro UI antes de comprimir
                        setTimeout(() => {
                            try {
                                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                                if (typeof onProgress === 'function') onProgress(100);
                                resolve({ base64: dataUrl, width: w, height: h, sizeBytes: Math.round((dataUrl.length * 3)/4) });
                            } catch (eCanvas2) {
                                reject(new Error('Falha ao comprimir imagem (canvas.toDataURL): ' + eCanvas2.message));
                            }
                        }, 10);
                    } catch (eCanvas) {
                        reject(new Error('Falha ao desenhar imagem no canvas: ' + eCanvas.message));
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } catch (e) {
            reject(e);
        }
    });
}

async function bindProductImageUploader(editingProduct) {
    pendingImageFile = null;
    pendingBase64Image = null;
    if (pendingObjectUrl) { try { URL.revokeObjectURL(pendingObjectUrl); } catch(_) {} pendingObjectUrl = null; }
    const fileInput   = document.getElementById('pImageFile');
    const fileLabel   = document.getElementById('pImageFileLabel');
    const previewWrap = document.getElementById('pImagePreviewWrap');
    const previewImg  = document.getElementById('pImagePreview');
    const previewClear= document.getElementById('pImageClear');
    const statusEl    = document.getElementById('pUploadStatus');
    const progressFill= document.getElementById('pUploadProgressFill');
    const progressText= document.getElementById('pUploadText');
    const pImageInput = document.getElementById('pImage');

    if (fileLabel) fileLabel.textContent = 'Clique para selecionar foto';
    if (previewWrap) previewWrap.style.display = 'none';
    if (statusEl) statusEl.style.display = 'none';
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) {
        progressText.className = 'upload-status-text';
        progressText.textContent = 'Ao clicar em 💾 Salvar abaixo, a foto é comprimida e salva DIRETAMENTE no Firestore (Base64). Nenhum upload externo — 100% sincronia em tempo real.';
    }

    if (editingProduct && editingProduct.image && !pImageInput.value) {
        pImageInput.value = editingProduct.image;
    }
    if (editingProduct && editingProduct.image) {
        previewWrap.style.display = 'block';
        previewImg.src = editingProduct.image;
    }

    fileInput.onchange = async () => {
        const f = fileInput.files && fileInput.files[0];
        if (!f) return;
        if (f.size > 10 * 1024 * 1024) {
            alert('A imagem é muito grande! Escolha uma foto de até 10MB (ela será comprimida automaticamente para JPEG 1280px).');
            fileInput.value = '';
            return;
        }
        if (!/^image\//.test(f.type || '') && !/\.(heic|heif)$/i.test(f.name || '')) {
            alert('Por favor selecione uma imagem (PNG, JPG, WebP ou HEIC).');
            fileInput.value = '';
            return;
        }
        // Comprime IMEDIATAMENTE ao selecionar, para feedback rápido e já deixar pronto para salvar.
        pendingImageFile = f;
        pendingBase64Image = null;
        if (pendingObjectUrl) try { URL.revokeObjectURL(pendingObjectUrl); } catch(_) {}
        pendingObjectUrl = URL.createObjectURL(f);
        previewWrap.style.display = 'block';
        previewImg.src = pendingObjectUrl;
        fileLabel.textContent = `${f.name} (${(f.size/1024).toFixed(1)} KB)`;

        if (statusEl) statusEl.style.display = 'flex';
        if (progressFill) progressFill.style.width = '0%';
        if (progressText) {
            progressText.className = 'upload-status-text';
            progressText.textContent = '⏳ Comprimindo imagem (max 1280px, JPEG 82% qualidade)...';
        }
        try {
            const compressed = await compressImageFileToBase64(f, (pct) => {
                if (progressFill) progressFill.style.width = pct + '%';
            });
            pendingBase64Image = compressed.base64;
            pImageInput.value = compressed.base64;
            if (progressFill) progressFill.style.width = '100%';
            if (progressText) {
                progressText.className = 'upload-status-text success';
                progressText.textContent = `✅ Foto pronta! (${(compressed.width)}×${compressed.height}, ${(compressed.sizeBytes/1024).toFixed(0)} KB). Ao clicar em 💾 Salvar, ela é gravada no Firestore e aparece em tempo real em todos os dispositivos.`;
            }
            console.log('[Upload Imagem] Foto comprimida para Base64: tamanho KB=' + Math.round(compressed.sizeBytes/1024) + ' dimensoes=' + compressed.width + 'x' + compressed.height);
        } catch (errCompress) {
            console.error('[Upload Imagem] Erro ao comprimir:', errCompress);
            if (progressFill) progressFill.style.width = '0%';
            if (progressText) {
                progressText.className = 'upload-status-text error';
                progressText.textContent = '❌ Erro ao comprimir: ' + errCompress.message;
            }
            alert('❌ Erro ao comprimir a imagem: ' + errCompress.message + '\n\nSugestão: tente uma foto JPG/PNG menor.');
            pendingImageFile = null;
            pendingBase64Image = null;
            if (pendingObjectUrl) try { URL.revokeObjectURL(pendingObjectUrl); } catch(_) {} pendingObjectUrl = null;
            previewWrap.style.display = 'none';
            if (fileInput) fileInput.value = '';
            if (fileLabel) fileLabel.textContent = 'Clique para selecionar foto';
        }
    };

    previewClear.onclick = () => {
        pendingImageFile = null;
        pendingBase64Image = null;
        if (pendingObjectUrl) { try { URL.revokeObjectURL(pendingObjectUrl); } catch(_) {} pendingObjectUrl = null; }
        fileInput.value = '';
        previewWrap.style.display = 'none';
        fileLabel.textContent = 'Clique para selecionar foto';
        if (statusEl) statusEl.style.display = 'none';
        if (progressFill) progressFill.style.width = '0%';
    };
}

function resetUploadUI() {
    const statusEl    = document.getElementById('pUploadStatus');
    const progressFill= document.getElementById('pUploadProgressFill');
    const progressText= document.getElementById('pUploadText');
    const previewWrap = document.getElementById('pImagePreviewWrap');
    const fileLabel   = document.getElementById('pImageFileLabel');
    const fileInput   = document.getElementById('pImageFile');
    const previewImg  = document.getElementById('pImagePreview');

    if (statusEl) statusEl.style.display = 'none';
    if (progressFill) progressFill.style.width = '0%';
    if (progressText) progressText.className = 'upload-status-text';
    if (previewWrap) previewWrap.style.display = 'none';
    if (previewImg) previewImg.src = '';
    if (fileLabel) fileLabel.textContent = 'Clique para selecionar foto';
    if (fileInput) fileInput.value = '';
    if (pendingObjectUrl) { try { URL.revokeObjectURL(pendingObjectUrl); } catch(_) {} pendingObjectUrl = null; }
    pendingImageFile = null;
    pendingBase64Image = null;
}

function overrideOpenEntityForm() {
    const orig = openEntityForm;
    openEntityForm = function (entity, editId) {
        orig(entity, editId);
        if (entity === 'product') {
            const editing = editId ? products.find(p => p.id === editId) : null;
            bindProductImageUploader(editing);
        }
    };
}

function overrideCloseEntityForm() {
    const orig = closeEntityForm;
    closeEntityForm = function (entity) {
        orig(entity);
        if (entity === 'product') resetUploadUI();
    };
}

overrideOpenEntityForm();
overrideCloseEntityForm();

function showFirebaseError(where, err, userMessage) {
    const banner = document.getElementById('fbStatusBanner');
    const msg = userMessage || ('Não foi possível completar a operação: ' + (err && err.message ? err.message : err));
    if (banner) {
        banner.className = 'fb-status fb-status-error';
        banner.innerHTML = '❌ <b>Erro Firebase (' + where + '):</b> ' + msg +
            ' &nbsp; <small>(Verifique as Regras do Firestore/Storage e sua conexão com a internet).</small>';
        banner.style.display = 'block';
    }
    console.error('[FIREBASE ERROR - ' + where + ']', err);
}

function showFirebaseSuccess(message) {
    const banner = document.getElementById('fbStatusBanner');
    if (banner) {
        banner.className = 'fb-status fb-status-success';
        banner.innerHTML = '✅ <b>Sucesso:</b> ' + (message || 'Operação realizada com sucesso no Firebase!');
        banner.style.display = 'block';
    }
}

const CONSOLE_FIRESTORE_RULES = 'https://console.firebase.google.com/project/tatie-atelie-cestas/firestore/rules';
const CONSOLE_STORAGE_RULES   = 'https://console.firebase.google.com/project/tatie-atelie-cestas/storage/tatie-atelie-cestas.firebasestorage.app/rules';
const LINK_CONSOLE_FIREBASE   = 'https://console.firebase.google.com/project/tatie-atelie-cestas';
const STORAGE_TIMEOUT_MS      = 12000;
const FIRESTORE_TIMEOUT_MS    = 15000;

/* Helper: cria Promise que rejeita com timeout amigável + barra de progresso fake */
function promiseTimeoutMs(ms, stage, progressFillEl, progressTextEl, startFakePct, endFakePct) {
    return new Promise((_, reject) => {
        let pct = startFakePct;
        const step = Math.max(1, Math.round((endFakePct - startFakePct) / Math.max(5, Math.floor(ms / 300))));
        const tick = setInterval(() => {
            pct = Math.min(endFakePct, pct + step);
            if (progressFillEl) progressFillEl.style.width = pct + '%';
        }, 300);
        setTimeout(() => {
            clearInterval(tick);
            if (progressFillEl) progressFillEl.style.width = endFakePct + '%';
            reject(new Error(
                'Tempo excedido para ' + stage +
                ' (esperamos ' + Math.round(ms/1000) + 's e o Firebase não respondeu).' +
                '\n👉 99% das vezes isso acontece porque AS REGRAS DO STORAGE OU FIRESTORE AINDA NÃO FORAM PUBLICADAS.'
            ));
        }, ms);
    });
}


async function saveEntityProductAsyncOverride() {
    const saveBtn = document.getElementById('saveProduct');
    const statusEl     = document.getElementById('pUploadStatus');
    const progressFill = document.getElementById('pUploadProgressFill');
    const progressText = document.getElementById('pUploadText');
    const pImageInput  = document.getElementById('pImage');
    const prevBtnText = saveBtn ? saveBtn.textContent : '💾 Salvar';

    try {
        const name = document.getElementById('pName').value.trim();
        const itemsText = document.getElementById('pItems').value;
        const desc = document.getElementById('pDesc').value.trim();
        const priceStr = document.getElementById('pPrice').value;
        const price = parseFloat(priceStr);

        if (!name || !priceStr || isNaN(price)) {
            alert('Preencha nome e preço da cesta para salvar.');
            return;
        }
        const items = itemsText.split('\n').map(i => i.trim()).filter(i => i.length > 0);

        if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = '⌛ Salvando na nuvem...'; }

        if (!window.FirebaseAPI) {
            throw new Error('SDK do Firebase não foi carregado. Atualize a página (F5) e tente novamente.');
        }
        console.log('[SALVAR CESTA] Passo 1: Inicializando Firebase...');
        const initOk = await Promise.race([
            window.FirebaseAPI.init(),
            promiseTimeoutMs(8000, 'conectar ao Firebase', progressFill, progressText, 2, 10)
        ]);
        if (!initOk || !window.FirebaseAPI.isEnabled()) {
            throw new Error('Firebase não configurado. Verifique as credenciais no arquivo firebase-init.js e sua conexão com a internet.');
        }
        console.log('[SALVAR CESTA] Passo 1 OK: Firebase inicializado. Projeto:', window.FirebaseAPI.CONFIG.projectId);

        if (window.FirebaseAPI.pingFirebaseServices && typeof window.FirebaseAPI.pingFirebaseServices === 'function') {
            console.log('[SALVAR CESTA] Passo 1.5: Ping rápido FIRESTORE para validar regras antes de gravar...');
            try {
                const ping = await Promise.race([
                    window.FirebaseAPI.pingFirebaseServices(),
                    new Promise((_, rj) => setTimeout(() => rj(new Error('timeout_ping_preupload_7s')), 7000))
                ]);
                if (!ping || !ping.ok) {
                    const hasFirestoreFailure = ping && (
                        ping.code === 'firestore_permission_denied' ||
                        ping.code === 'firestore_disabled' ||
                        ping.code === 'timeout' ||
                        ping.code === 'firestore_error'
                    );
                    if (!ping || hasFirestoreFailure) {
                        console.error('[SALVAR CESTA] Ping detectou problema FIRESTORE:', ping && ping.code, ping && ping.message);
                        showFirebaseError('Configuração (pré-salvar)', ping && ping.rawError,
                            '<b>Impossível salvar agora:</b> ' + (ping && ping.message ? ping.message : 'Não foi possível validar os serviços.') +
                            (ping && (ping.code === 'firestore_permission_denied' || ping.code === 'firestore_disabled')
                                ? ' · <a href="' + CONSOLE_FIRESTORE_RULES + '" target="_blank" style="color:#6B1E3A;font-weight:700;text-decoration:underline;">👉 Corrigir Firestore (Publicar Regras)</a>' : ''));
                        alert(
                            '❌ ANTES DE SALVAR — VALIDAÇÃO DO FIRESTORE REPROVOU:\n\n' +
                            (ping && ping.message ? ping.message : 'Configuração inválida.') + '\n\n' +
                            'Como corrigir (apenas 2 passos):\n' +
                            '1) Abra: ' + CONSOLE_FIRESTORE_RULES + '\n' +
                            '2) Cole as regras (rules_version = "2" ... allow read, create, update, delete: if true)\n' +
                            '3) CLIQUE NO BOTÃO AZUL/VERDE "PUBLICAR" (obrigatório)\n' +
                            '4) Volte aqui e clique em 💾 Salvar de novo! 💪'
                        );
                        if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = prevBtnText; }
                        return;
                    }
                    console.log('[SALVAR CESTA] Ping retornou storage_warn (Storage não ativado) — OK, não usamos mais Storage. Continuando...');
                } else {
                    console.log('[SALVAR CESTA] Passo 1.5 OK: Ping validou Firestore pronto.');
                }
            } catch (pingErr) {
                console.warn('[SALVAR CESTA] Ping pré-save falhou (timeout/erro não esperado). Continuando usando timeouts do save.', pingErr);
            }
        }

        let image = '';
        if (pendingBase64Image && /^data:image\//i.test(pendingBase64Image)) {
            image = pendingBase64Image;
            pImageInput.value = image;
            console.log('[SALVAR CESTA] Passo 2: Usando imagem BASE64 recém-comprimida. Tamanho KB:', Math.round(image.length / 1024 * 3 / 4));
            if (progressText) {
                progressText.className = 'upload-status-text success';
                progressText.textContent = '✅ Foto comprimida pronta. Gravando dados da cesta no Firestore...';
            }
            if (progressFill) progressFill.style.width = '70%';
        } else if (pendingImageFile) {
            console.log('[SALVAR CESTA] Passo 2: pendingImageFile existe mas Base64 não foi gerado. Comprimindo AGORA...');
            if (statusEl) statusEl.style.display = 'flex';
            if (progressFill) progressFill.style.width = '10%';
            if (progressText) {
                progressText.className = 'upload-status-text';
                progressText.textContent = '⏳ Comprimindo imagem (max 1280px, JPEG 82% qualidade)...';
            }
            try {
                const compressed = await Promise.race([
                    compressImageFileToBase64(pendingImageFile, (pct) => {
                        if (progressFill) progressFill.style.width = (10 + Math.round(pct * 0.5)) + '%';
                    }),
                    promiseTimeoutMs(25000, 'comprimir imagem', progressFill, progressText, 10, 60)
                ]);
                image = compressed.base64;
                pendingBase64Image = compressed.base64;
                pImageInput.value = image;
                console.log('[SALVAR CESTA] Passo 2 OK: Imagem comprimida AGORA no save. KB:', Math.round(compressed.sizeBytes/1024));
                if (progressText) {
                    progressText.className = 'upload-status-text success';
                    progressText.textContent = '✅ Foto comprimida. Gravando dados da cesta no Firestore...';
                }
                if (progressFill) progressFill.style.width = '70%';
            } catch (compressErr) {
                alert('❌ Erro ao comprimir foto para salvar: ' + compressErr.message + '\n\nSugestão: use uma foto JPG/PNG menor.');
                if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = prevBtnText; }
                return;
            }
        } else {
            image = (pImageInput.value || '').trim();
            console.log('[SALVAR CESTA] Passo 2 OK: Sem imagem nova. Usando imagem existente/URL:', image ? (image.length > 80 ? image.slice(0, 80) + '...' : image) : '(vazia, usará placeholder)');
        }

        const hasImage = Boolean(image && image.length > 10);
        const obj = {
            name,
            image: hasImage
                ? image
                : 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=beautiful%20gift%20basket%20pink%20wine%20decoration%20ribbon&image_size=landscape_4_3',
            items,
            description: desc,
            price: Number(price) || 0,
            ativo: true,
            storage_mode: (hasImage && /^data:image\//i.test(image)) ? 'firestore_base64' : (hasImage ? 'url_external' : 'placeholder')
        };

        let docIdToSave = adminEditingId ? String(adminEditingId) : null;
        console.log('[SALVAR CESTA] Passo 3: Salvando no Firestore...', { docIdToSave, nome: obj.name, preco: obj.price, storage_mode: obj.storage_mode, imagem_tamanho: obj.image.length });

        try {
            if (progressText) {
                progressText.className = 'upload-status-text';
                progressText.textContent = '💾 Gravando dados da cesta no Firestore... (timeout ' + Math.round(FIRESTORE_TIMEOUT_MS/1000) + 's)';
            }
            if (progressFill) progressFill.style.width = '85%';

            const saved = await Promise.race([
                window.FirebaseAPI.saveCesta(obj, docIdToSave),
                promiseTimeoutMs(FIRESTORE_TIMEOUT_MS, 'salvar dados no Firestore', progressFill, progressText, 85, 99)
            ]);

            if (saved && saved.id) {
                obj.id = (typeof saved.id === 'number' || /^\d+$/.test(saved.id)) ? Number(saved.id) : saved.id;
            } else if (adminEditingId) {
                obj.id = adminEditingId;
            } else {
                obj.id = Date.now();
            }
            console.log('[FIREBASE FIRESTORE] Cesta salva com sucesso! doc.id:', obj.id, 'savedResult:', saved);
            if (progressFill) progressFill.style.width = '100%';
            showFirebaseSuccess(`Cesta "${obj.name}" salva NO FIRESTORE e atualizada em tempo real para TODOS os clientes! (modo foto: ${obj.storage_mode}). <a href="${LINK_CONSOLE_FIREBASE}" target="_blank" style="font-weight:500;text-decoration:underline;color:#1B5E20;">Ver no Console</a>`);
        } catch (firestoreErr) {
            console.error('[FIREBASE FIRESTORE] Erro ao salvar a cesta:', firestoreErr);
            showFirebaseError('Salvar Cesta (Firestore)', firestoreErr,
                'Não foi possível salvar os dados no Firestore. <b>As REGRAS do Firestore provavelmente NÃO FORAM PUBLICADAS.</b> Publique as regras aqui: <a href="' + CONSOLE_FIRESTORE_RULES + '" target="_blank" style="color:#6B1E3A;font-weight:600;text-decoration:underline;">👉 Abrir Firestore → Regras</a>');
            alert(
                '❌ ERRO AO SALVAR NO FIREBASE FIRESTORE\n\n' +
                'Mensagem: ' + (firestoreErr.message || firestoreErr) + '\n\n' +
                'CAUSA MAIS COMUM: Regras do Firestore NÃO publicadas!\n\n' +
                '👉 FAÇA ISSO AGORA (1 minuto):\n' +
                '1. Abra: ' + CONSOLE_FIRESTORE_RULES + '\n' +
                '2. Cole as regras (rules_version = "2" ... allow read, create, update, delete: if true)\n' +
                '3. CLIQUE NO BOTÃO AZUL/VERDE "PUBLICAR" (obrigatório)\n' +
                '4. Volte aqui e clique em 💾 Salvar de novo!\n\n' +
                '(Se aparecer "Create database", clique primeiro: crie o Firestore em Native Mode, localização southamerica-east1 ou us-central1)'
            );
            if (saveBtn) { saveBtn.disabled = false; saveBtn.textContent = prevBtnText; }
            return;
        }

        if (statusEl) {
            if (progressFill) progressFill.style.width = '100%';
            if (progressText) {
                progressText.className = 'upload-status-text success';
                progressText.textContent = '🎉 Tudo salvo no Firestore! Atualizando a lista...';
            }
        }

        renderProducts();
        try { renderAdminProducts(); } catch(_) {}
        closeEntityForm('product');
    } catch (globalErr) {
        console.error('[saveEntityProduct] Erro inesperado:', globalErr);
        showFirebaseError('Salvar Cesta (Erro inesperado)', globalErr, globalErr.message);
        alert('❌ Ocorreu um erro inesperado ao salvar a cesta:\n\n' + (globalErr.message || globalErr));
    } finally {
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.textContent = prevBtnText;
        }
    }
}

async function deleteEntityAsyncOverride(entity, id) {
    const msgMap = {
        product: 'Tem certeza que deseja EXCLUIR esta cesta?\n\n⚠️ Ela será removida PERMANENTEMENTE do Firebase e desaparecerá do catálogo de TODOS os clientes.',
        addon: 'Tem certeza que deseja excluir este adicional?',
        delivery: 'Tem certeza que deseja excluir esta taxa de entrega?',
        coupon: 'Tem certeza que deseja excluir este cupom?'
    };
    if (!confirm(msgMap[entity] || 'Confirmar exclusão?')) return;

    if (entity === 'product') {
        /* ====== EXCLUSÃO SOMENTE NO FIRESTORE (produtos são 100% nuvem) ====== */
        if (!window.FirebaseAPI || !window.FirebaseAPI.isEnabled()) {
            alert('❌ Firebase não está disponível agora.\nVerifique sua conexão e as credenciais. Não foi possível excluir.');
            return;
        }
        try {
            console.log('[FIREBASE FIRESTORE] Excluindo cesta doc.id:', id);
            const deleted = await Promise.race([
                window.FirebaseAPI.deleteCesta(id),
                promiseTimeoutMs(10000, 'excluir a cesta no Firestore', null, null, 0, 100)
            ]);
            console.log('[FIREBASE FIRESTORE] Cesta doc.id=' + id + ' foi excluída com sucesso.', deleted);
            showFirebaseSuccess('Cesta excluída da nuvem! O catálogo de todos os clientes será atualizado automaticamente. <a href="' + CONSOLE_FIRESTORE_RULES + '" target="_blank" style="color:#1B5E20;text-decoration:underline;font-weight:500;">Ver no Console</a>');
            /* onSnapshot vai atualizar products[] e as views automaticamente. */
            try {
                products = products.filter(p => String(p.id) !== String(id));
            } catch(_) {}
            try { renderProducts(); } catch(_) {}
            try { renderAdminProducts(); } catch(_) {}
        } catch (err) {
            console.error('[FIREBASE FIRESTORE] Erro ao excluir cesta doc.id=' + id + ':', err);
            showFirebaseError('Excluir Cesta (Firestore)', err,
                'Não foi possível excluir a cesta. <b>As regras do Firestore provavelmente bloqueiam "delete".</b> Publique as regras aqui: <a href="' + CONSOLE_FIRESTORE_RULES + '" target="_blank" style="color:#6B1E3A;font-weight:600;text-decoration:underline;">👉 Abrir Firestore → Regras</a>');
            alert('❌ ERRO AO EXCLUIR NO FIREBASE FIRESTORE:\n\n' +
                'Mensagem: ' + (err.message || err) + '\n\n' +
                '👉 CAUSA MAIS COMUM: Regras do Firestore NÃO publicadas (falta "allow delete" na regra).\n' +
                '   Abra: ' + CONSOLE_FIRESTORE_RULES + '\n' +
                '👉 Verifique sua conexão com a internet.');
            return;
        }
    } else if (entity === 'addon') {
        addons = addons.filter(a => a.id !== id);
        saveToStorage(STORAGE_KEYS.ADDONS, addons);
        try { renderAdminAddons(); } catch(_) {}
    } else if (entity === 'delivery') {
        deliveryRates = deliveryRates.filter(d => d.id !== id);
        saveToStorage(STORAGE_KEYS.DELIVERY, deliveryRates);
        try { renderAdminDelivery(); } catch(_) {}
        try { renderDeliveryOptions(); } catch(_) {}
    } else if (entity === 'coupon') {
        coupons = coupons.filter(c => c.id !== id);
        saveToStorage(STORAGE_KEYS.COUPONS, coupons);
        try { renderAdminCoupons(); } catch(_) {}
    }
}

async function syncLocalProductsToFirebase() {
    alert('ℹ️  Modo atual: ARMAZENAMENTO 100% NA NUVEM.\n\n' +
        'As cestas são automaticamente salvas no Firebase Firestore e Storage.\n' +
        'Não há mais a etapa de "sincronizar local → nuvem", pois tudo é salvo direto na nuvem.\n\n' +
        'Se suas cestas antigas estão salvas apenas localmente neste dispositivo:\n' +
        '  1. Clique em "☁️ Importar Cestas Locais para Nuvem" abaixo\n' +
        '  2. Ou recadastre as cestas pelo painel admin =)');
}

let forceLocalStorageMode = false;

function toggleFirebaseForceLocal() {
    /* Modo Local foi REMOVIDO para produtos/cestas (100% nuvem obrigatório).
       Esta função existe para não quebrar o botão do HTML — ao invés de mudar estado,
       exibe uma mensagem informando o usuário. */
    const info =
        'ℹ️  O MODO LOCAL foi desativado para as cestas!\n\n' +
        'Agora as cestas são SALVAS APENAS NO FIREBASE (100% nuvem):\n' +
        '   • Todos usuários veem as mesmas cestas em TEMPO REAL\n' +
        '   • Alterações em um celular aparecem INSTANTANEAMENTE em todos\n\n' +
        'Se você tem cestas antigas salvas LOCALMENTE no seu dispositivo:\n' +
        '   1. Abra o Painel Admin → tab "Cestas"\n' +
        '   2. Clique no botão "☁️ Importar Cestas Locais → Nuvem"\n' +
        '   3. Confirme e pronto! Suas cestas serão movidas para a nuvem.';
    alert(info);
    console.log('[toggleFirebaseForceLocal] Invocado: Modo Local desativado para produtos/cestas (100% nuvem agora).');
}

async function bindFirebaseUI() {
    /* Botão antigo "Sync Local → Firebase" agora vira "Importar Locais → Nuvem" */
    const syncBtn = document.getElementById('btnSyncFirebase');
    if (syncBtn) {
        syncBtn.textContent = '☁️ Importar Cestas Locais → Nuvem';
        syncBtn.addEventListener('click', importLocalProductsToFirebase);
    }
    const toggleBtn = document.getElementById('btnToggleFirebase');
    if (toggleBtn) {
        toggleBtn.textContent = 'ℹ️ Sobre o Modo Nuvem';
        toggleBtn.addEventListener('click', toggleFirebaseForceLocal);
    }
}

/* ====== Sobrescreve os handlers globais (antes do DOMContentLoaded chamar init()) ====== */
window.saveEntityProductSyncLegacy = saveEntityProduct;
saveEntityProduct = saveEntityProductAsyncOverride;

window.deleteEntitySyncLegacy = deleteEntity;
deleteEntity = deleteEntityAsyncOverride;

document.addEventListener('DOMContentLoaded', async function () {
    init(); // inicializa o resto do site como sempre
    setCepHelpWhatsAppLink(); // inicializa link de ajuda do CEP
    bindFirebaseUI();
    try { renderFooter(); } catch(_) {}
    try { renderTopSocialBar(); } catch(_) {}
    try { renderStoreClosedBannerAndBadge(); } catch(_) {}

    /* ====== onSnapshot(Loja Aberta/Fechada) — GLOBAL em todos dispositivos ====== */
    try {
        if (window.FirebaseAPI && typeof window.FirebaseAPI.subscribeStoreStatus === 'function') {
            window.FirebaseAPI.subscribeStoreStatus(
                (status, meta) => {
                    const doServidor = !!(meta && meta.doServidor);
                    const doCache = !!(meta && meta.doCache);
                    const docExists = meta ? !!meta.docExists : (status !== null && status !== undefined);
                    console.log('[FIREBASE onSnapshot - LOJA] Status recebido:', status, 'origem:', doServidor ? 'SERVIDOR' : (doCache ? 'CACHE FIRESTORE' : '?'), 'docExists=', docExists);

                    /* CASO 1: Doc não existe no Firestore ainda (status=null).
                       → Se temos localStorage, deixamos ele quieto (applyStoreStatusGlobal já foi no loadFromStorage)
                       → Se NÃO temos localStorage, aplicamos default open=true */
                    if (status === null || status === undefined) {
                        const temStatusLocal = !!localStorage.getItem(STORAGE_KEYS.STORE_STATUS);
                        if (!temStatusLocal) {
                            applyStoreStatusGlobal({ open: true, reabre_em: '', mensagem_fechado: '' }, { origem: 'firestore_doc_nao_existe' });
                        } else {
                            console.log('[FIREBASE onSnapshot - LOJA] Doc store_config/status não existe no Firestore. Usando status LOCAL salvo.');
                        }
                        return;
                    }

                    /* CASO 2: Veio DO SERVIDOR (doc existe). SEMPRE sobrescreve o local — é a versão mais confiável */
                    if (doServidor) {
                        applyStoreStatusGlobal(status, meta);
                        return;
                    }

                    /* CASO 3: Veio de cache do Firestore (sem chegar no servidor ainda).
                       → Só aplica se NÃO tivermos nada salvo em localStorage, para evitar
                         que um cache antigo sobrescreva uma alteração LOCAL recente. */
                    const temStatusLocal = !!localStorage.getItem(STORAGE_KEYS.STORE_STATUS);
                    if (!temStatusLocal) {
                        applyStoreStatusGlobal(status, meta);
                    } else {
                        console.log('[FIREBASE onSnapshot - LOJA] Ignorado dado de cache Firestore — usando status LOCAL salvo.');
                    }
                },
                (err) => {
                    console.warn('[FIREBASE onSnapshot - LOJA] Erro (mantendo status LOCAL salvo, não voltamos para ABERTA automaticamente):', err);
                    /* IMPORTANTE: NÃO chamamos applyStoreStatusGlobal com open=true aqui.
                       Se houver erro de permissão ou conexão, mantemos o valor salvo no localStorage
                       (que já foi carregado em loadFromStorage e aplicado via renderStoreClosedBannerAndBadge). */
                }
            );
        }
    } catch(_) {}

    /* bootstrapFirebase() já conecta o onSnapshot(cestas) que atualiza a vitrine AUTOMATICAMENTE
       em tempo real. Não precisamos mais esperar retorno. */
    const fbOk = await bootstrapFirebase();

    if (!fbOk) {
        /* Se não conectar, mostra banner fixo e placeholder DEFAULT_PRODUCTS continua na vitrine. */
        showFirebaseError('Conexão Geral', new Error('bootstrapFirebase retornou false'),
            'Não foi possível conectar ao Firebase. As cestas cadastradas no painel admin NÃO serão salvas.');
    } else {
        /* Segunda tentativa garante que a vitrine tenha as cestas mais novas
           mesmo se o onSnapshot ainda estiver chegando em conexões lentas. */
        try { await loadProductsFromFirebaseOrFallback(); } catch(_) {}
    }
});

