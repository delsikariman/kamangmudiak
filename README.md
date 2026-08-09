# Situs PBW Nagari Kamang Mudiak

Situs statis (HTML + CSS + JS murni) untuk program Pemberdayaan Berbasis Wilayah.
Tidak perlu instalasi apa pun — cukup buka foldernya di VS Code.

## Struktur berkas (satu file per bagian)

| Berkas | Bagian situs |
|---|---|
| `index.html` | Beranda (hero + 3 pilar + cuplikan berita) |
| `tentang.html` | Tentang — skema PBW |
| `tim.html` | Tim — 9 orang (4 dosen, 5 mahasiswa) |
| `berita.html` | Berita — arsip |
| `berita-detail.html` | Detail berita (gandakan per berita baru) |
| `ttg.html` | TTG — 6 alat |
| `produk.html` | Produk — katalog |
| `produk-detail.html` | Detail produk + tombol pesan WhatsApp |
| `galeri.html` | Galeri + Kontak |
| `css/style.css` | Semua gaya; warna & huruf diatur di blok `:root` |
| `js/main.js` | Menu navigasi layar kecil |
| `img/` | Letakkan semua foto di sini |

## Cara melihat hasilnya

1. Buka folder ini di VS Code.
2. Pasang ekstensi **Live Server**, klik kanan `index.html` → *Open with Live Server*.
   (Atau cukup klik dua kali `index.html` di File Explorer.)

## Suntingan yang paling sering dibutuhkan

- **Ganti foto contoh**: taruh foto di `img/`, lalu ubah
  `<div class="kotak-gambar">…</div>` menjadi
  `<img src="img/nama-foto.jpg" alt="deskripsi foto">`.
- **Tambah berita**: salin satu blok `<article class="kartu">…</article>` di
  `berita.html`, lalu gandakan `berita-detail.html` (mis.
  `berita-2026-08-pelatihan.html`) dan arahkan tautannya.
- **Tambah produk**: pola sama dengan berita, lewat `produk.html` dan
  `produk-detail.html`.
- **Nomor WhatsApp tombol pesan**: cari `62812xxxxxxx` (ada di
  `produk-detail.html` dan `galeri.html`), ganti dengan nomor asli
  format internasional tanpa tanda `+`.
- **Ubah warna/huruf seluruh situs**: sunting variabel di blok `:root`
  pada `css/style.css`.
- Semua bagian di setiap halaman ditandai komentar
  `<!-- ===== BAGIAN: ... ===== -->` agar mudah dicari (Ctrl+F).
