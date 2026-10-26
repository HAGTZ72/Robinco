const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-navigation');
const toast = document.querySelector('.toast');
const cartDialog = document.querySelector('.cart-dialog');
const cartItemsElement = document.querySelector('.cart-items');
const cartCountElement = document.querySelector('.cart-count');
const cartEmptyElement = document.querySelector('.cart-empty');
const cartTotalElement = document.querySelector('.cart-total-value');
const cartPriceNote = document.querySelector('.cart-price-note');
const checkoutButton = document.querySelector('.checkout-button');
const whatsappNumber = '6285762779405';
const cartStorageKey = 'robinco-cart-v1';
const currencyFormatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
});
let toastTimer;

const products = new Map(
    Array.from(document.querySelectorAll('.product-card')).map((card) => {
        const rawPrice = card.dataset.price;
        const parsedPrice = rawPrice === '' ? null : Number(rawPrice);
        const price = Number.isSafeInteger(parsedPrice) && parsedPrice >= 0 ? parsedPrice : null;
        const product = {
            id: card.dataset.productId,
            name: card.querySelector('h3').textContent.trim(),
            price,
        };

        card.querySelector('.price-placeholder').textContent =
            price === null ? 'Harga belum tersedia' : currencyFormatter.format(price);

        return [product.id, product];
    }),
);

function showNotice(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3600);
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem(cartStorageKey);
        if (savedCart === null) {
            return new Map();
        }

        const parsedCart = JSON.parse(savedCart);
        if (!Array.isArray(parsedCart)) {
            throw new Error('Format keranjang tersimpan tidak sesuai.');
        }

        const loadedItems = new Map();
        let skippedItems = false;

        parsedCart.forEach((item) => {
            if (
                item === null ||
                typeof item !== 'object' ||
                !products.has(item.id) ||
                !Number.isSafeInteger(item.quantity) ||
                item.quantity < 1
            ) {
                skippedItems = true;
                return;
            }

            const combinedQuantity = (loadedItems.get(item.id) || 0) + item.quantity;
            if (!Number.isSafeInteger(combinedQuantity)) {
                skippedItems = true;
                return;
            }

            loadedItems.set(item.id, combinedQuantity);
        });

        if (skippedItems) {
            showNotice('Sebagian data keranjang tidak valid dan tidak dimuat.');
        }

        return loadedItems;
    } catch (error) {
        console.error('Gagal memuat keranjang dari penyimpanan lokal.', error);
        showNotice('Keranjang tersimpan tidak dapat dibaca. Silakan tambahkan produk kembali.');
        return new Map();
    }
}

let cart = loadCart();

function saveCart() {
    try {
        localStorage.setItem(
            cartStorageKey,
            JSON.stringify(Array.from(cart, ([id, quantity]) => ({ id, quantity }))),
        );
        return true;
    } catch (error) {
        console.error('Gagal menyimpan keranjang ke penyimpanan lokal.', error);
        showNotice('Keranjang hanya tersimpan sementara di halaman ini.');
        return false;
    }
}

function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    if (text !== undefined) {
        element.textContent = text;
    }
    return element;
}

function renderCart() {
    cartItemsElement.replaceChildren();
    let itemCount = 0;
    let total = 0;
    let hasUnknownPrice = false;

    cart.forEach((quantity, id) => {
        const product = products.get(id);
        if (!product) {
            return;
        }

        itemCount += quantity;
        const line = createElement('article', 'cart-item');
        const itemHeading = createElement('div', 'cart-item-heading');
        const name = createElement('h3', '', product.name);
        const removeButton = createElement('button', 'cart-remove', 'Hapus');
        removeButton.type = 'button';
        removeButton.dataset.action = 'remove';
        removeButton.dataset.productId = id;
        removeButton.setAttribute('aria-label', `Hapus ${product.name} dari keranjang`);
        itemHeading.append(name, removeButton);

        const itemPrice = createElement(
            'p',
            'cart-item-unit-price',
            product.price === null
                ? 'Harga satuan: belum tersedia'
                : `Harga satuan: ${currencyFormatter.format(product.price)}`,
        );

        const itemDetails = createElement('div', 'cart-item-details');
        const quantityControls = createElement('div', 'quantity-controls');
        const decreaseButton = createElement('button', 'quantity-button', '−');
        decreaseButton.type = 'button';
        decreaseButton.dataset.action = 'decrease';
        decreaseButton.dataset.productId = id;
        decreaseButton.setAttribute('aria-label', `Kurangi jumlah ${product.name}`);
        decreaseButton.disabled = quantity <= 1;

        const quantityLabel = createElement('span', 'quantity-value', String(quantity));
        const increaseButton = createElement('button', 'quantity-button', '+');
        increaseButton.type = 'button';
        increaseButton.dataset.action = 'increase';
        increaseButton.dataset.productId = id;
        increaseButton.setAttribute('aria-label', `Tambah jumlah ${product.name}`);

        quantityControls.append(decreaseButton, quantityLabel, increaseButton);
        const subtotalValue = product.price === null ? null : product.price * quantity;
        const subtotal = createElement(
            'strong',
            'cart-item-subtotal',
            subtotalValue === null || !Number.isSafeInteger(subtotalValue)
                ? 'Belum tersedia'
                : currencyFormatter.format(subtotalValue),
        );
        itemDetails.append(quantityControls, subtotal);
        line.append(itemHeading, itemPrice, itemDetails);
        cartItemsElement.append(line);

        if (product.price === null || !Number.isSafeInteger(subtotalValue)) {
            hasUnknownPrice = true;
        } else {
            total += subtotalValue;
            if (!Number.isSafeInteger(total)) {
                hasUnknownPrice = true;
            }
        }
    });

    const isEmpty = itemCount === 0;
    cartCountElement.textContent = String(itemCount);
    cartEmptyElement.hidden = !isEmpty;
    cartItemsElement.hidden = isEmpty;
    cartTotalElement.textContent = isEmpty
        ? currencyFormatter.format(0)
        : hasUnknownPrice
            ? 'Belum tersedia'
            : currencyFormatter.format(total);
    cartPriceNote.hidden = isEmpty || !hasUnknownPrice;

    if (!isEmpty && hasUnknownPrice) {
        cartPriceNote.textContent =
            'Harga menu belum tersedia. Konfirmasi harga terlebih dahulu sebelum memesan.';
    } else if (!isEmpty) {
        cartPriceNote.textContent = 'Total belum termasuk biaya pengantaran, jika ada.';
    }
}

function addToCart(id) {
    if (!products.has(id)) {
        showNotice('Produk tidak ditemukan. Silakan muat ulang halaman.');
        return;
    }

    const currentQuantity = cart.get(id) || 0;
    if (!Number.isSafeInteger(currentQuantity + 1)) {
        showNotice('Jumlah produk sudah mencapai batas yang dapat diproses.');
        return;
    }

    cart.set(id, currentQuantity + 1);
    saveCart();
    renderCart();
    showNotice(`${products.get(id).name} ditambahkan ke keranjang.`);
}

function buildWhatsAppMessage(items) {
    const lines = [
        'Halo ROBINCO, saya ingin memesan:',
        '',
    ];

    let total = 0;
    items.forEach(({ product, quantity }) => {
        const subtotal = product.price * quantity;
        total += subtotal;
        lines.push(
            `• ${product.name}`,
            `  Harga satuan: ${currencyFormatter.format(product.price)}`,
            `  Jumlah: ${quantity}`,
            `  Subtotal: ${currencyFormatter.format(subtotal)}`,
            '',
        );
    });

    lines.push(`Total pesanan: ${currencyFormatter.format(total)}`);
    lines.push('', 'Mohon konfirmasi ketersediaan dan pesanan saya. Terima kasih.');
    return lines.join('\n');
}

function openWhatsAppOrder(items) {
    if (items.length === 0) {
        showNotice('Keranjang masih kosong. Tambahkan produk sebelum memesan.');
        return;
    }

    const hasUnavailablePrice = items.some(({ product, quantity }) =>
        product.price === null || !Number.isSafeInteger(product.price * quantity),
    );
    if (hasUnavailablePrice) {
        showNotice('Harga belum tersedia. Lengkapi harga menu sebelum membuat pesanan WhatsApp.');
        return;
    }

    const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
    if (!Number.isSafeInteger(total)) {
        showNotice('Total pesanan terlalu besar untuk diproses. Periksa kembali jumlah produk.');
        return;
    }

    const message = buildWhatsAppMessage(items);
    const link = document.createElement('a');
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.hidden = true;
    document.body.append(link);
    link.click();
    link.remove();
    showNotice('Pesan disiapkan di WhatsApp. Periksa kembali lalu tekan Kirim untuk mengirimnya.');
}

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Buka navigasi' : 'Tutup navigasi');
    navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Buka navigasi');
    });
});

document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;
        document.querySelectorAll('.filter-button').forEach((filterButton) => {
            const isActive = filterButton === button;
            filterButton.classList.toggle('is-active', isActive);
            filterButton.setAttribute('aria-pressed', String(isActive));
        });

        document.querySelectorAll('.product-card').forEach((card) => {
            card.hidden = selectedFilter !== 'semua' && card.dataset.category !== selectedFilter;
        });
    });
});

document.querySelectorAll('.add-button').forEach((button) => {
    button.addEventListener('click', () => {
        addToCart(button.closest('.product-card').dataset.productId);
    });
});

document.querySelectorAll('.order-button').forEach((button) => {
    button.addEventListener('click', () => {
        const id = button.closest('.product-card').dataset.productId;
        const product = products.get(id);
        openWhatsAppOrder(product ? [{ product, quantity: cart.get(id) || 1 }] : []);
    });
});

document.querySelector('.cart-button').addEventListener('click', () => {
    renderCart();
    cartDialog.showModal();
});

document.querySelector('.cart-close').addEventListener('click', () => cartDialog.close());

cartItemsElement.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) {
        return;
    }

    const { action, productId } = button.dataset;
    const quantity = cart.get(productId);
    if (!products.has(productId) || !Number.isSafeInteger(quantity) || quantity < 1) {
        showNotice('Produk keranjang tidak valid. Silakan muat ulang halaman.');
        return;
    }

    if (action === 'remove') {
        cart.delete(productId);
    } else if (action === 'decrease' && quantity > 1) {
        cart.set(productId, quantity - 1);
    } else if (action === 'increase' && Number.isSafeInteger(quantity + 1)) {
        cart.set(productId, quantity + 1);
    } else {
        return;
    }

    saveCart();
    renderCart();
});

checkoutButton.addEventListener('click', () => {
    const items = Array.from(cart, ([id, quantity]) => ({
        product: products.get(id),
        quantity,
    })).filter((item) => item.product);

    openWhatsAppOrder(items);
});

renderCart();
