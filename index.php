<?php
$year = date('Y');
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#fffaf2">
    <meta name="description" content="ROBINCO — roti isi telur dan es krim dengan satu gigitan, banyak kenikmatan.">
    <title>ROBINCO — Satu Gigitan, Banyak Kenikmatan</title>
    <link rel="icon" type="image/svg+xml" href="assets/images/robinco-mark.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="#home" aria-label="ROBINCO, ke beranda">
                <img src="assets/images/robinco-mark.svg" alt="" width="44" height="44">
                <span class="brand-name">ROBINCO<span class="brand-period">.</span><small>Satu Gigitan, Banyak Kenikmatan.</small></span>
            </a>
            <button class="menu-toggle" type="button" aria-label="Buka navigasi" aria-expanded="false" aria-controls="main-navigation">
                <span></span><span></span><span></span>
            </button>
            <nav class="main-navigation" id="main-navigation" aria-label="Navigasi utama">
                <a href="#home">Home</a>
                <a href="#produk">Product</a>
                <a href="#layanan">Layanan</a>
                <a href="#tentang">Tentang Kami</a>
            </nav>
            <button class="cart-button" type="button" aria-label="Keranjang belanja">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6"></path><circle cx="10" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle></svg>
                <span>Keranjang</span><span class="cart-count">0</span>
            </button>
        </div>
    </header>

    <main>
        <section class="hero section" id="home">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow"><span></span> HANGAT DARI DAPUR, MANIS DI HATI</p>
                    <h1>Bahagia itu<br><em>sesederhana</em><br>gigitan pertama.</h1>
                    <p class="hero-description">Temukan nikmatnya roti isi telur yang hangat dan es krim yang menyegarkan. Teman kecil untuk momen spesialmu.</p>
                    <div class="hero-actions">
                        <a class="button button-primary" href="#produk">Lihat Produk <span aria-hidden="true">↗</span></a>
                        <a class="button button-outline" href="#layanan">Pesan Sekarang</a>
                    </div>
                    <div class="hero-note"><span class="note-star">✳</span><span>Dibuat untuk momen yang<br>layak dinikmati.</span></div>
                </div>
                <div class="hero-visual">
                    <div class="hero-image-wrap">
                        <img src="assets/images/roti-isi.jpg" alt="Roti lapis isi yang hangat dan menggugah selera" fetchpriority="high">
                    </div>
                    <div class="hero-sticker"><span>ENAKNYA</span><strong>JUJUR.</strong><span>BAHAGIANYA</span><strong>UTUH.</strong></div>
                    <div class="hero-caption"><span class="caption-dot"></span> RASA YANG BIKIN BALIK LAGI</div>
                    <span class="hero-sparkle sparkle-one" aria-hidden="true">✳</span>
                    <span class="hero-sparkle sparkle-two" aria-hidden="true">✦</span>
                </div>
            </div>
        </section>

        <section class="feature-strip" aria-label="Keunggulan Robinco">
            <div class="container feature-list">
                <div><span class="feature-icon">✳</span><span>Dibuat dengan sepenuh hati</span></div>
                <div><span class="feature-icon">◒</span><span>Rasa yang bikin nyaman</span></div>
                <div><span class="feature-icon">♡</span><span>Teman di setiap suasana</span></div>
            </div>
        </section>

        <section class="products section" id="produk">
            <div class="container">
                <div class="section-heading">
                    <div>
                        <p class="eyebrow"><span></span> DARI DAPUR ROBINCO</p>
                        <h2>Kenalan dengan<br><em>favoritmu.</em></h2>
                    </div>
                    <p class="section-intro">Pilihan hangat dan dingin untuk menemani harimu. Menu di bawah adalah contoh tampilan dan dapat disesuaikan.</p>
                </div>
                <div class="product-filters" role="group" aria-label="Filter kategori produk">
                    <button class="filter-button is-active" type="button" data-filter="semua" aria-pressed="true">Semua menu</button>
                    <button class="filter-button" type="button" data-filter="roti" aria-pressed="false">Roti isi telur</button>
                    <button class="filter-button" type="button" data-filter="es-krim" aria-pressed="false">Es krim</button>
                </div>
                <div class="product-grid">
                    <article class="product-card" data-category="roti">
                        <div class="product-image">
                            <img src="assets/images/roti-isi.jpg" alt="Contoh roti lapis telur hangat" loading="lazy">
                            <span class="product-tag">ROTI ISI TELUR</span>
                        </div>
                        <div class="product-info">
                            <div class="product-title-row"><h3>Roti Telur Klasik</h3><span class="product-number">01</span></div>
                            <p>Roti lembut dengan isian telur gurih untuk memulai hari dengan senyum.</p>
                            <div class="product-bottom"><span class="price-placeholder">Harga belum tersedia</span><button class="add-button" type="button" aria-label="Tambah Roti Telur Klasik ke keranjang">+</button></div>
                        </div>
                    </article>
                    <article class="product-card" data-category="roti">
                        <div class="product-image">
                            <img src="assets/images/roti-isi.jpg" alt="Contoh roti lapis isi telur dan keju" loading="lazy">
                            <span class="product-tag">ROTI ISI TELUR</span>
                        </div>
                        <div class="product-info">
                            <div class="product-title-row"><h3>Roti Telur Spesial</h3><span class="product-number">02</span></div>
                            <p>Contoh varian roti isi telur dengan tambahan yang bisa kamu tentukan.</p>
                            <div class="product-bottom"><span class="price-placeholder">Harga belum tersedia</span><button class="add-button" type="button" aria-label="Tambah Roti Telur Spesial ke keranjang">+</button></div>
                        </div>
                    </article>
                    <article class="product-card" data-category="es-krim">
                        <div class="product-image">
                            <img src="assets/images/es-krim.jpg" alt="Es krim cone warna-warni yang dipegang" loading="lazy">
                            <span class="product-tag">ES KRIM</span>
                        </div>
                        <div class="product-info">
                            <div class="product-title-row"><h3>Es Krim Ceria</h3><span class="product-number">03</span></div>
                            <p>Manis, dingin, dan menyenangkan—pilihan rasa dapat disesuaikan.</p>
                            <div class="product-bottom"><span class="price-placeholder">Harga belum tersedia</span><button class="add-button" type="button" aria-label="Tambah Es Krim Ceria ke keranjang">+</button></div>
                        </div>
                    </article>
                    <article class="product-card" data-category="es-krim">
                        <div class="product-image">
                            <img src="assets/images/es-krim.jpg" alt="Es krim cone untuk dinikmati kapan saja" loading="lazy">
                            <span class="product-tag">ES KRIM</span>
                        </div>
                        <div class="product-info">
                            <div class="product-title-row"><h3>Es Krim Favorit</h3><span class="product-number">04</span></div>
                            <p>Contoh menu es krim; nama varian dan sajian final bisa kamu ubah.</p>
                            <div class="product-bottom"><span class="price-placeholder">Harga belum tersedia</span><button class="add-button" type="button" aria-label="Tambah Es Krim Favorit ke keranjang">+</button></div>
                        </div>
                    </article>
                </div>
                <p class="sample-note">* Nama menu, varian, dan foto merupakan contoh untuk pratinjau website.</p>
            </div>
        </section>

        <section class="promo-section" aria-label="Banner promosi">
            <div class="container promo-banner">
                <div class="promo-mark" aria-hidden="true">✳</div>
                <div class="promo-copy"><p class="eyebrow">KABAR DARI ROBINCO</p><h2>Momen manis<br>dimulai dari sini.</h2><p>Banner promosi ini siap disesuaikan dengan promo dan informasi terbaru Robinco.</p></div>
                <a class="button button-light" href="#layanan">Yuk, kenalan <span aria-hidden="true">↗</span></a>
                <span class="promo-decoration" aria-hidden="true">R</span>
            </div>
        </section>

        <section class="service section" id="layanan">
            <div class="container service-grid">
                <div class="service-copy">
                    <p class="eyebrow"><span></span> GAMPANG BANGET</p>
                    <h2>Enak itu<br>nggak perlu <em>ribet.</em></h2>
                    <p class="section-intro">Informasi pemesanan berikut adalah gambaran awal. Detail layanan akan diperbarui sesuai operasional Robinco.</p>
                    <a class="button button-primary contact-button" href="https://wa.me/62XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">Hubungi Robinco <span aria-hidden="true">↗</span></a>
                    <p class="placeholder-note">Nomor WhatsApp masih berupa placeholder dan belum aktif.</p>
                </div>
                <div class="service-steps">
                    <article class="step-card"><span class="step-number">01</span><div><h3>Pilih yang kamu suka</h3><p>Lihat contoh pilihan roti isi telur dan es krim di katalog.</p></div><span class="step-arrow" aria-hidden="true">↗</span></article>
                    <article class="step-card"><span class="step-number">02</span><div><h3>Tanyakan ketersediaannya</h3><p>Hubungi kami untuk info menu, harga, dan cara pemesanan.</p></div><span class="step-arrow" aria-hidden="true">↗</span></article>
                    <article class="step-card"><span class="step-number">03</span><div><h3>Nikmati momenmu</h3><p>Detail pengambilan atau pengantaran akan dikonfirmasi langsung.</p></div><span class="step-arrow" aria-hidden="true">↗</span></article>
                </div>
            </div>
        </section>

        <section class="about section" id="tentang">
            <div class="container about-grid">
                <div class="about-image">
                    <img src="assets/images/roti-isi.jpg" alt="Roti lapis dengan isian yang menggugah selera" loading="lazy">
                    <div class="about-image-label"><span>ROBINCO</span><strong>Dibuat untuk dinikmati.</strong></div>
                    <span class="about-image-sparkle" aria-hidden="true">✳</span>
                </div>
                <div class="about-copy">
                    <p class="eyebrow"><span></span> CERITA KAMI</p>
                    <h2>Hal sederhana,<br><em>rasa istimewa.</em></h2>
                    <p>ROBINCO hadir membawa dua hal yang selalu punya tempat di hati: roti isi telur yang mengenyangkan dan es krim yang menyegarkan.</p>
                    <p>Ini adalah ruang untuk cerita Robinco. Tambahkan kisah, nilai, dan perjalanan brand di sini saat siap dibagikan.</p>
                    <a class="text-link" href="#layanan">Mari terhubung <span aria-hidden="true">→</span></a>
                </div>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <div class="container footer-main">
            <div class="footer-brand">
                <a class="brand brand-footer" href="#home">
                    <img src="assets/images/robinco-mark.svg" alt="" width="44" height="44">
                    <span class="brand-name">ROBINCO<span class="brand-period">.</span><small>Satu Gigitan, Banyak Kenikmatan.</small></span>
                </a>
                <p>Teman hangat dan manis untuk hari-harimu.</p>
            </div>
            <div class="footer-column"><h3>Jelajahi</h3><a href="#home">Home</a><a href="#produk">Product</a><a href="#layanan">Layanan</a><a href="#tentang">Tentang Kami</a></div>
            <div class="footer-column"><h3>Hubungi</h3><span>WhatsApp: nomor belum tersedia</span><span>Alamat: belum tersedia</span><a href="#layanan">Tanyakan informasi</a></div>
            <div class="footer-column"><h3>Ikuti cerita kami</h3><a href="#layanan">Instagram: @username</a><a href="#layanan">Media sosial: segera hadir</a></div>
        </div>
        <div class="container footer-bottom"><span>© <?= htmlspecialchars((string) $year, ENT_QUOTES, 'UTF-8') ?> ROBINCO. Dibuat dengan sepenuh hati.</span><a href="#home">Kembali ke atas ↑</a></div>
    </footer>

    <div class="toast" role="status" aria-live="polite"></div>
    <script src="assets/js/main.js"></script>
</body>
</html>
