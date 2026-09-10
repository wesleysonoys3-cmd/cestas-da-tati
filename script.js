const STORAGE_KEYS = {
    PRODUCTS: 'cestasTati_products',
    ADDONS: 'cestasTati_addons',
    DELIVERY: 'cestasTati_delivery',
    COUPONS: 'cestasTati_coupons',
    CART: 'cestasTati_cart',
    ADMIN_LOGGED: 'cestasTati_adminLogged',
    WHATSAPP: 'cestasTati_whatsapp'
};

const ADMIN_USERNAME = 'tati2026';
const ADMIN_PASSWORD = 'tatiane2026';
const DEFAULT_WHATSAPP = '5561995869522';
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
    { id: 1, name: 'Centro', price: 10.00 },
    { id: 2, name: 'Jardins', price: 12.00 },
    { id: 3, name: 'Vila Esperança', price: 15.00 },
    { id: 4, name: 'Alto da Glória', price: 15.00 },
    { id: 5, name: 'Cidade Jardim', price: 18.00 },
    { id: 6, name: 'Parque das Flores', price: 18.00 },
    { id: 7, name: 'Bairro Novo', price: 20.00 },
    { id: 8, name: 'Zona Rural / Sítios', price: 35.00 },
    { id: 9, name: 'Retirada na loja (Grátis)', price: 0.00 }
];

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
let selectedProduct = null;
let modalQty = 1;
let modalSelectedAddons = [];
let appliedCoupon = null;
let adminEditingId = null;
let adminEditingEntity = null;

function init() {
    loadFromStorage();
    renderProducts();
    renderDeliveryOptions();
    updateCartCount();
    setupEventListeners();
}

function loadFromStorage() {
    const storedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    const storedAddons = localStorage.getItem(STORAGE_KEYS.ADDONS);
    const storedDelivery = localStorage.getItem(STORAGE_KEYS.DELIVERY);
    const storedCoupons = localStorage.getItem(STORAGE_KEYS.COUPONS);
    const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
    const storedWhatsApp = localStorage.getItem(STORAGE_KEYS.WHATSAPP);

    products = storedProducts ? JSON.parse(storedProducts) : DEFAULT_PRODUCTS;
    addons = storedAddons ? JSON.parse(storedAddons) : DEFAULT_ADDONS;
    deliveryRates = storedDelivery ? JSON.parse(storedDelivery) : DEFAULT_DELIVERY;
    coupons = storedCoupons ? JSON.parse(storedCoupons) : DEFAULT_COUPONS;
    cart = storedCart ? JSON.parse(storedCart) : [];
    whatsappNumber = storedWhatsApp || DEFAULT_WHATSAPP;

    if (!storedProducts) saveToStorage(STORAGE_KEYS.PRODUCTS, products);
    if (!storedAddons) saveToStorage(STORAGE_KEYS.ADDONS, addons);
    if (!storedDelivery) saveToStorage(STORAGE_KEYS.DELIVERY, deliveryRates);
    if (!storedCoupons) saveToStorage(STORAGE_KEYS.COUPONS, coupons);
    if (!storedWhatsApp) localStorage.setItem(STORAGE_KEYS.WHATSAPP, whatsappNumber);
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

function renderDeliveryOptions() {
    const select = document.getElementById('neighborhoodSelect');
    const currentValue = select.value;
    select.innerHTML = '<option value="">Selecione o bairro...</option>';
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
    const neighborhoodId = parseInt(document.getElementById('neighborhoodSelect').value);
    if (neighborhoodId) {
        const d = deliveryRates.find(x => x.id === neighborhoodId);
        delivery = d ? d.price : 0;
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
    document.getElementById('summaryDelivery').textContent = delivery === 0 ? (neighborhoodId ? 'Grátis' : 'R$ 0,00') : formatCurrency(delivery);
    document.getElementById('summaryTotal').textContent = formatCurrency(Math.max(0, total));
    document.getElementById('pixTotalValue').textContent = 'Total: ' + formatCurrency(Math.max(0, total));
}

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
    if (!neighborhoodId) errors.push('Selecione o bairro de entrega.');
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

    const d = deliveryRates.find(x => x.id === neighborhoodId);
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const deliveryPrice = d ? d.price : 0;
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
    message += `🚚 *Frete (${d.name}):* ${deliveryPrice === 0 ? 'Grátis' : formatCurrency(deliveryPrice)}\n`;
    if (appliedCoupon) {
        message += `🎟️ *Cupom ${appliedCoupon.code}:* -${formatCurrency(discount)}\n`;
    }
    message += `💵 *TOTAL:* ${formatCurrency(Math.max(0, total))}\n`;
    message += '\n────────────────────\n';
    message += `📅 *Entrega:* ${dateFormatted} às ${timeFormatted}\n\n`;
    message += `👤 *Comprador:*\n`;
    message += `   Nome: ${buyerName}\n`;
    message += `   WhatsApp: ${buyerWhatsapp}\n\n`;
    if (isAnonymous) {
        message += `🤫 *PRESENTE ANÔNIMO*\n\n`;
    }
    message += `🎁 *Destinatário:*\n`;
    message += `   Nome: ${receiverName}\n`;
    message += `   Telefone: ${receiverPhone}\n`;
    message += `   Endereço: ${receiverAddress}\n\n`;
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
    switchAdminTab('products');
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

document.addEventListener('DOMContentLoaded', init);
