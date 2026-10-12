# Patch Notes — Awwwards-lite Multi-Site Upgrade

## Scope selesai

- Portal `/` untuk memilih dua brand.
- Amber & Bean Coffee Roasters:
  - `/cafe/`
  - `/cafe/produk/`
  - `/cafe/kontak/`
- Naga Steam Dimsum House:
  - `/dimsum/`
  - `/dimsum/produk/`
  - `/dimsum/kontak/`
- Logo existing dipakai di header dan favicon masing-masing brand.
- Shared layout + shared CSS + shared product data.
- Responsive desktop/tablet/mobile.
- Tidak ada dependency tambahan, GSAP, carousel library, atau animasi berat.
- Motion hanya ticker CSS ringan dan hover micro-interaction; `prefers-reduced-motion` dihormati.

## Arah visual

### Amber & Bean
Warm amber / roasted caramel / cream / dark espresso. Editorial serif typography, foto coffee bar, natural warm interior, whitespace besar, dan sudut geometris yang tidak terlalu card-heavy.

### Naga Steam
Crimson / bamboo / ivory / deep wine. Visual fokus pada bamboo steamer dan folds dimsum, layout editorial yang sama agar project konsisten tetapi tetap terasa sebagai brand berbeda.

## Sumber foto internet

Foto ditautkan dari Unsplash dan dipilih dari halaman yang pada saat patch dibuat berstatus free-to-use under the Unsplash License.

Cafe:
- https://unsplash.com/photos/PaKa6QrFytA
- https://unsplash.com/photos/eN9vH3SSrIA
- https://unsplash.com/photos/GX6_yPidVoQ
- https://unsplash.com/photos/_yJXuiFdsPo

Dimsum:
- https://unsplash.com/photos/j9fy7p_hcpM
- https://unsplash.com/photos/idUSfFfqLmw
- https://unsplash.com/photos/IhR3WOLuM7M

## Catatan pengujian

Static structure check lulus untuk:
- kelengkapan 7 route Astro,
- resolusi seluruh local imports,
- link internal utama,
- keseimbangan blok CSS,
- keberadaan logo/favicon.

`npm install` tidak dapat diselesaikan di sandbox karena akses jaringan package registry timeout, jadi build Astro final tetap perlu dijalankan di mesin lokal dengan `npm install && npm run build`.
