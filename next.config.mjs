/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /**
   * Enam alamat pendaftaran lama → satu halaman, jalurnya dititipkan.
   *
   * ── Apa yang ada di sana sebelumnya ──────────────────────────────────────
   *
   * `homeindo` dan `homeinter` dua halaman pemilih; `indo-offline`,
   * `indo-online`, `inter-offline`, dan `inter-online` formulir yang sama
   * disalin empat kali, ~700 baris masing-masing. Bedanya cuma dua: daftar
   * paket yang ditampilkan, dan bahasa halamannya.
   *
   * Keduanya sekarang jadi SATU LANGKAH di dalam formulir sisipan. Tiap paket
   * di dasbor sudah membawa `origin` dan `mode`, jadi pilihannya dibaca dari
   * data — dan ajang berskala nasional, yang tidak punya paket internasional
   * sama sekali, tidak ditanyai asal peserta.
   *
   * ── Kenapa dialihkan, bukan dihapus ──────────────────────────────────────
   *
   * Keempat formulir lama mengirim isian ke sebuah Google Apps Script, bukan
   * ke dasbor. Siapa pun yang masih menemukan alamatnya — penanda buku, hasil
   * pencarian, tautan di grup WhatsApp angkatan lalu — mendaftar ke sebuah
   * spreadsheet yang tidak ada yang menunggu. Menghapus halamannya
   * menjadikannya 404; mengalihkannya membawa orangnya ke formulir yang benar
   * dengan pilihan yang sudah ia buat di tautan yang ia klik masih utuh.
   *
   * ── Kenapa 307, bukan 301 ────────────────────────────────────────────────
   *
   * `permanent: false`. Peramban menyimpan 301 nyaris selamanya dan berhenti
   * bertanya — kalau suatu saat alamat-alamat ini dipakai untuk hal lain, yang
   * pernah membukanya tidak akan pernah sampai ke sana.
   */
  async redirects() {
    return [
      { source: "/registration/homeindo", destination: "/registration/homeregist?jalur=indo", permanent: false },
      { source: "/registration/homeinter", destination: "/registration/homeregist?jalur=inter", permanent: false },
      { source: "/registration/indo-offline", destination: "/registration/homeregist?jalur=indo-offline", permanent: false },
      { source: "/registration/indo-online", destination: "/registration/homeregist?jalur=indo-online", permanent: false },
      { source: "/registration/inter-offline", destination: "/registration/homeregist?jalur=inter-offline", permanent: false },
      { source: "/registration/inter-online", destination: "/registration/homeregist?jalur=inter-online", permanent: false },
    ];
  },
};

export default nextConfig;
