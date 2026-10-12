# Tugas Kuliah Web — Amber & Bean + Naga Steam

Multi-site Astro 5 berisi dua brand fiktif dalam satu project:

- **Amber & Bean Coffee Roasters**
  - `/cafe/` — Beranda
  - `/cafe/produk/` — Produk
  - `/cafe/kontak/` — Kontak
- **Naga Steam Dimsum House**
  - `/dimsum/` — Beranda
  - `/dimsum/produk/` — Produk
  - `/dimsum/kontak/` — Kontak
- `/` — Portal dua brand

## Menjalankan

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

## Struktur penting

- `public/logo-cafe.svg` dan `public/logo-dimsum.svg` dipakai sebagai logo sekaligus favicon.
- `src/data/brands.js` menyimpan konfigurasi brand dan seluruh data menu.
- `src/layouts/BrandLayout.astro` adalah layout shared untuk header/footer/SEO dasar.
- `src/styles/global.css` berisi visual system responsif untuk kedua brand.

## Aset gambar

Foto ditautkan dari halaman download Unsplash agar project tetap ringan. Foto yang dipilih berasal dari hasil pencarian web untuk coffee shop/barista dan dimsum/bamboo steamer, dan ditandai sebagai free-to-use di bawah Unsplash License pada halaman sumber saat patch dibuat.

## Catatan demo

Alamat, email, dan nomor telepon di halaman Kontak adalah data contoh untuk tugas kuliah. Ganti sebelum digunakan sebagai website bisnis nyata.
