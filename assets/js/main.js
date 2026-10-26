const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-navigation');
const toast = document.querySelector('.toast');
let toastTimer;

function showNotice(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
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

document.querySelectorAll('.add-button, .cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        showNotice('Keranjang belanja akan tersedia di tahap berikutnya.');
    });
});
