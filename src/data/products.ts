import { Product, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'wps',
    category: 'Produktivitas Tablet & HP',
    badge: 'Paling Laris',
    discountBadge: 'Diskon 29%',
    title: 'Setup WPS Office PC Level (Tablet & HP Android)',
    headline: 'Ubah Tablet & Smartphone Android Anda Menjadi Laptop Kerja Profesional',
    oldPrice: 'Rp85.000',
    price: 'Rp60.000',
    saveAmount: 'Rp25.000',
    desc: 'Bebaskan batasan aplikasi mobile. Dapatkan tampilan desktop ribbon bar penuh layaknya Microsoft Office di PC untuk Tablet maupun HP Android Anda: formula Excel lengkap, Word presisi, & presentasi PPT mulus.',
    coverImage: 'assets/images/wps-cover.jpg',
    waNumber: '082392048485',
    waMessage: 'Halo Admin, saya mau order Setup WPS Office PC Level untuk Tablet / HP Android.',
    btnText: 'Pesan WPS PC Level via WA (Rp60.000)',
    rating: 4.9,
    ordersCount: 540,
    isGallery: true,
    features: [
      'Bisa Dipasang di Semua Tablet & HP Android (Samsung, Xiaomi, Oppo, Vivo, Infinix, dll)',
      'Interface Ribbon Bar Desktop Lengkap (Home, Insert, Layout, Formulas)',
      'Rumus Excel Bebas Limit: VLOOKUP, XLOOKUP, Pivot Table, Multi-IF',
      'Multi-Tab Browsing: Buka banyak dokumen kerja sekaligus',
      'Mendukung Penuh Mouse & Keyboard Bluetooth (Shortcut Ctrl+C, Ctrl+V)',
      'Dipandu Remote Step-by-Step Sampai 100% Aktif & Siap Kerja'
    ],
    specs: [
      { label: 'Dukungan Perangkat', value: 'Bisa untuk Tablet Android & Smartphone / HP Android (Xiaomi, Samsung, Oppo, Vivo, Realme, Infinix, Poco, Huawei, dll)' },
      { label: 'Tampilan Antarmuka', value: 'Desktop Windows 10 Ribbon Bar penuh tanpa pemotongan menu' },
      { label: 'Paket Software', value: 'WPS Writer (Word), Spreadsheets (Excel), Presentation (PPT)' },
      { label: 'Dukungan Rumus', value: 'VLOOKUP, XLOOKUP, Pivot Table, IF bertingkat, Conditional Formatting' },
      { label: 'Dukungan Hardware', value: 'Keyboard Bluetooth, Wireless Mouse, Stylus Pen, HDMI Proyektor' },
      { label: 'Kompatibilitas OS', value: 'Android 8.0 s/d Android 14+ (Semua merk Tablet & HP Android)' },
      { label: 'Layanan Garansi', value: 'Garansi uang kembali jika aplikasi tidak berhasil aktif di perangkat Anda' }
    ],
    gallery: [
      {
        id: 'cover',
        tabName: '📱 Foto Setup',
        badge: 'Setup Nyata',
        title: '1. Foto Setup Nyata (Tablet & HP Android + Keyboard Stand)',
        desc: 'Tampilan fisik nyata perangkat Android dipadukan dengan keyboard dan mouse wireless layaknya mini-laptop.',
        image: 'assets/images/wps-cover.jpg'
      },
      {
        id: 'desktop',
        tabName: '🖥️ Desktop',
        badge: 'Interface PC',
        title: '2. Tampilan Desktop Windows di Tablet & HP Android',
        desc: 'Interface desktop Windows 10 penuh dengan taskbar bawah, start menu, dan folder file system layaknya monitor komputer.',
        image: 'assets/images/wps-desktop.jpg'
      },
      {
        id: 'word',
        tabName: '📝 Word PC',
        badge: 'Ribbon Penuh',
        title: '3. WPS Writer (Word PC Level Ribbon Bar Lengkap)',
        desc: 'Toolbar ribbon bar laptop lengkap (Home, Insert, Page Layout, References, Review, View) untuk format dokumen, margins, dan tabel rapi.',
        image: 'assets/images/wps-word.jpg'
      },
      {
        id: 'excel',
        tabName: '📈 Excel PC',
        badge: 'Formula Lengkap',
        title: '4. WPS Spreadsheets (Excel PC Level Rumus Lengkap)',
        desc: 'Formula analitik lengkap tanpa limit (VLOOKUP, Pivot Table, IF bercabang) siap untuk pengolahan data kantor berat di Tablet atau HP.',
        image: 'assets/images/wps-excel.jpg'
      },
      {
        id: 'ppt',
        tabName: '📊 PPT PC',
        badge: 'Slide Dinamis',
        title: '5. WPS Presentation (PowerPoint PC Level)',
        desc: 'Desain presentasi bisnis & kuliah profesional dengan slide designer, animasi halus, dan dukungan proyektor eksternal.',
        image: 'assets/images/wps-ppt.jpg'
      }
    ]
  },
  {
    id: 'npwp',
    category: 'Layanan Pajak Digital',
    badge: 'Terima Beres (1-3 Jam)',
    discountBadge: 'Diskon 33%',
    title: 'Jasa Pendaftaran NPWP Elektronik Resmi (DJP)',
    headline: 'Terima Beres Tanpa Pusing Isi Formulir e-Reg DJP yang Rumit',
    oldPrice: 'Rp120.000',
    price: 'Rp80.000',
    saveAmount: 'Rp40.000',
    desc: 'Daftar mandiri sering gagal atau bingung isi form pajak? Serahkan ke kami. Terima beres tanpa ribet: pendaftaran resmi diproseskan sampai terbit file Kartu NPWP Elektronik & SKT PDF resmi dari server Ditjen Pajak RI.',
    coverImage: 'assets/images/npwp-cover.jpg',
    waNumber: '085121342871',
    waMessage: 'Halo Admin, saya mau dibantu pendaftaran NPWP Elektronik resmi (terima beres).',
    btnText: 'Pesan Jasa NPWP Elektronik via WA (Rp80.000)',
    rating: 4.96,
    ordersCount: 960,
    isGallery: false,
    features: [
      'Terima Beres: Cukup kirim foto KTP & data pokok via WA, formulir kami yang urus',
      'Bebas Pusing: Gak perlu bingung isi kode KLU, status pajak, atau error server e-Reg',
      'Output Resmi: File Kartu NPWP Elektronik & Surat Keterangan Terdaftar (SKT) PDF Asli',
      'Sah 100% untuk Syarat Kerja, Pembukaan Rekening Bank, KPR, dan Legalitas Usaha',
      'Privasi Terjamin: Data pribadi Anda langsung dihapus permanen begitu nomor NPWP terbit'
    ],
    specs: [
      { label: 'Bentuk Berkas', value: 'NPWP Elektronik Digital & SKT Resmi format PDF resolusi tinggi (bukan kartu fisik/plastik)' },
      { label: 'Status Keabsahan', value: '100% Sah & Terverifikasi di Server e-Registration Ditjen Pajak (Kemenkeu RI)' },
      { label: 'Keperluan Valid', value: 'Syarat lamaran kerja, payroll kantor, buka tabungan bank, KPR, pinjaman usaha' },
      { label: 'Kemudahan', value: 'Terima beres, tidak perlu pusing antre di kantor pajak atau gagal verifikasi mandiri' },
      { label: 'Estimasi Waktu', value: 'Selesai 1–3 Jam (menyesuaikan antrean server DJP)' },
      { label: 'Jaminan Privasi', value: 'Data pribadi hanya untuk pendaftaran resmi dan langsung dihapus permanen' }
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Apakah WPS PC Level ini hanya bisa di Tablet atau bisa di HP Android juga?',
    answer: 'Bisa di keduanya! WPS Office PC Level ini mendukung Tablet Android (seperti Xiaomi Pad, Redmi Pad, Samsung Tab, Huawei MatePad, Lenovo Tab) DAN juga bisa dipasang di Smartphone / HP Android (Xiaomi, Samsung, Oppo, Vivo, Realme, Infinix, Poco, dll) dengan OS Android 8 hingga 14+.'
  },
  {
    question: 'Apakah hasil akhir NPWP berupa kartu fisik atau elektronik?',
    answer: 'Layanan kami adalah bantuan pendaftaran NPWP Elektronik resmi langsung ke sistem Direktorat Jenderal Pajak (DJP). Hasil akhirnya berupa file resmi Kartu NPWP Elektronik Digital dan Surat Keterangan Terdaftar (SKT) format PDF asli beresolusi tinggi. Berkas PDF resmi ini sah 100% dan langsung valid digunakan untuk melamar kerja, perbankan, KPR, atau dicetak sendiri jika diperlukan.'
  },
  {
    question: 'Kenapa lebih baik pakai jasa pendaftaran ini daripada daftar sendiri?',
    answer: 'Pendaftaran mandiri di web e-Reg DJP seringkali membingungkan bagi orang awam (pengisian status K/TK, kode klasifikasi usaha KLU, error server, atau verifikasi email/SMS yang sering gagal). Melalui layanan kami, Anda cukup mengirimkan data pokok via WhatsApp, dan tim kami yang mengurus pengisian secara profesional sampai terbit tuntas.'
  },
  {
    question: 'Berapa lama proses pengerjaannya?',
    answer: 'Untuk NPWP Elektronik biasanya selesai dalam 1–3 jam (tergantung kelancaran antrean server DJP). Untuk pemasangan WPS PC Level membutuhkan waktu sekitar 15–20 menit dengan panduan remote interaktif lewat WhatsApp.'
  },
  {
    question: 'Bagaimana metode pembayarannya?',
    answer: 'Kami menerima QRIS instan bebas biaya admin (bisa dari semua mobile banking & e-wallet seperti GoPay, OVO, Dana, ShopeePay) serta transfer antar-bank (BCA, Mandiri, BRI, BNI).'
  }
];
