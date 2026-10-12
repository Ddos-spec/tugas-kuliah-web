# 🍽️ Tugas Web Jokian: Multi-Site Astro Project (Cafe & Dimsum)

Projek website gabungan 2 brand dalam 1 repository Astro 5, didesain modular, clean code, dan sangat ramah untuk dilanjutkan pengembangannya via ChatGPT.

---

## 🌐 Struktur Link Website (2-in-1 Project)

| Halaman | URL Path | Deskripsi Brand |
|---|---|---|
| **Portal Switcher** | `/` | Beranda portal showcase yang menghubungkan kedua website |
| **Website Cafe** | `/cafe` | **Amber & Bean Coffee Roasters** (Artisan single-origin cafe, coworking space & pastry) |
| **Website Dimsum** | `/dimsum` | **Naga Steam Dimsum House** (Restoran dimsum Kanton autentik, xiao long bao & chili oil) |

---

## 🎨 Asset Logo (Vector SVG Terpasang)

1. **Logo Cafe**: `public/logo-cafe.svg`
   - *Brand*: **Amber & Bean Artisan Coffee Roasters**
   - *Warna*: Warm Amber, Roasted Caramel, Gold (`#D97706`, `#78350F`)
   - *Elemen*: Cangkir kopi keramik, piring tatakan, uap aromatik & tipografi serif/modern.

2. **Logo Dimsum**: `public/logo-dimsum.svg`
   - *Brand*: **Naga Steam Authentic Cantonese Dimsum**
   - *Warna*: Crimson Red, Bamboo Ochre, Rose (`#E11D48`, `#B45309`, `#FFF1F2`)
   - *Elemen*: Klakat kukusan bambu tradisional, xiao long bao lembut, sumpit & aksen uap panas.

---

## 📂 Struktur File Projek

```
tugas-kuliah-web/
├── public/
│   ├── logo-cafe.svg       # Logo resmi Cafe
│   └── logo-dimsum.svg     # Logo resmi Dimsum
├── src/
│   └── pages/
│       ├── index.astro     # Halaman portal utama (pintu masuk ke 2 web)
│       ├── cafe/
│       │   └── index.astro # Full landing page Cafe (Hero, Menu, Fasilitas, Lokasi)
│       └── dimsum/
│           └── index.astro # Full landing page Dimsum (Hero, Menu, Jaminan Mutu, Lokasi)
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🚀 Cara Menjalankan Project

1. **Install Dependencies** (jika belum):
   ```bash
   npm install
   ```
2. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
3. Buka di browser:
   - Portal Utama: `http://localhost:4321/`
   - Website Cafe: `http://localhost:4321/cafe`
   - Website Dimsum: `http://localhost:4321/dimsum`

---

## 🤖 Panduan Melanjutkan Pengembangan dengan ChatGPT

Karena kode ditulis menggunakan standard **Astro 5 + clean semantic HTML/CSS inline**, Bos atau siapa pun bisa langsung copas kode ke ChatGPT dengan prompt seperti:

> *"ChatGPT, tambahkan form pemesanan meja interaktif dengan validasi nama dan jumlah orang di file `src/pages/cafe/index.astro`."*

atau

> *"ChatGPT, tambahkan filter kategori menu (Kukus, Goreng, Minuman) dengan filter tombol di file `src/pages/dimsum/index.astro`."*
