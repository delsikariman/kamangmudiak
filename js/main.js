// ============================================================
// SITUS PBW KAMANG MUDIAK — SKRIP UTAMA
// Hanya satu fungsi: buka/tutup menu navigasi di layar kecil.
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  var tombol = document.querySelector(".tombol-menu");
  var nav = document.querySelector(".nav-utama");
  if (!tombol || !nav) return;

  tombol.addEventListener("click", function () {
    var terbuka = nav.classList.toggle("terbuka");
    tombol.setAttribute("aria-expanded", terbuka ? "true" : "false");
  });
});
