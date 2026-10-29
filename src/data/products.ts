import { Product, FaqItem, SocialProofToast } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'wps',
    category: 'Productivity Setup',
    badge: 'Paling Populer',
    discountBadge: 'Hemat 29%',
    title: 'Setup WPS Office PC Level Android Tablet',
    headline: 'Ubah Tablet & HP Android Anda Menjadi Laptop Kerja Profesional',
    oldPrice: 'Rp85.000',
    price: 'Rp60.000',
    saveAmount: 'Rp25.000',
    desc: 'Bebaskan batasan versi mobile. Nikmati interface ribbon bar penuh layaknya Microsoft Office di PC/laptop: formula Excel tanpa limitasi, Word formatting presisi, & presentasi PPT mulus.',
    coverImage: 'assets/images/wps-cover.jpg',
    waNumber: '082392048485',
    waMessage: 'Halo Admin, saya mau order Setup WPS Office PC Level untuk Tablet Android.',
    btnText: 'Pesan WPS PC Level (Rp60.000)',
    rating: 4.9,
    ordersCount: 428,
    isGallery: true,
    features: [
      'Ribbon Bar Desktop Penuh (Menu Home, Insert, Formulas, Layout)',
      'Formula Excel Lengkap: VLOOKUP, XLOOKUP, Pivot, Multi-IF',
      'Multi-Tab Browsing: Buka banyak dokumen kerja sekaligus',
      'Dukungan Penuh Keyboard & Mouse Bluetooth (Shortcut Ctrl+C, Ctrl+V, dll)',
      'Garansi Remote Dipandu Sampai 100% Aktif & Siap Pakai'
    ],
    specs: [
      { label: 'Tampilan Antarmuka', value: 'Desktop Windows 10 Ribbon Bar penuh tanpa pemotongan menu' },
      { label: 'Aplikasi Terpasang', value: 'WPS Writer (Word), Spreadsheets (Excel), Presentation (PPT)' },
      { label: 'Dukungan Formula', value: 'VLOOKUP, HLOOKUP, Pivot Table, Conditional Formatting, Charts' },
      { label: 'Hardware Support', value: 'Keyboard Bluetooth, Wireless Mouse, Stylus Pen, Display Proyektor' },
      { label: 'Kompatibilitas OS', value: 'Android 8.0 s/d Android 14+ (Xiaomi Pad, Samsung Tab, Huawei, Lenovo, dll)' },
      { label: 'Layanan Garansi', value: 'Panduan step-by-step remote via WhatsApp sampai lancar digunakan' }
    ],
    gallery: [
      {
        id: 'desktop',
        tabName: '🖥️ Desktop View',
        badge: 'Interface Windows',
        title: 'Tampilan Desktop Windows di Tablet Anda',
        desc: 'Mode desktop penuh dengan taskbar bawah, start menu, folder direktori file system, dan multi-window layaknya monitor komputer asli.',
        image: 'assets/images/wps-desktop.jpg'
      },
      {
        id: 'word',
        tabName: '📝 WPS Word (PC)',
        badge: 'Ribbon Penuh',
        title: 'WPS Writer: Olah Dokumen Tanpa Limitasi Mobile',
        desc: 'Ribbon menu lengkap (Home, Insert, Page Layout, References, Review, View) untuk skripsi, surat dinas, tabel rumit, dan format margins rapi.',
        image: 'assets/images/wps-word.jpg'
      },
      {
        id: 'ppt',
        tabName: '📊 WPS PPT (PC)',
        badge: 'Slide Dinamis',
        title: 'WPS Presentation: Slide Presentasi Standar Laptop',
        desc: 'Buat presentasi bisnis atau kuliah profesional dengan slide designer, transisi halus, animasi kustom, dan output HDMI/proyektor eksternal.',
        image: 'assets/images/wps-ppt.jpg'
      },
      {
        id: 'excel',
        tabName: '📈 WPS Excel (PC)',
        badge: 'Formula Power-User',
        title: 'WPS Spreadsheets: Analisis Data & Formula Berat',
        desc: 'Bebas masukkan rumus kompleks (VLOOKUP, INDEX-MATCH, Pivot Table, IF bertingkat, Conditional Formatting). Pekerjaan administrasi kantor beres di tablet!',
        image: 'assets/images/wps-excel.jpg'
      }
    ]
  },
  {
    id: 'npwp',
    category: 'Layanan Pajak Resmi',
    badge: 'Proses Kilat 1-3 Jam',
    discountBadge: 'Hemat 33%',
    title: 'Jasa Pembuatan NPWP Online Resmi (DJP)',
    headline: 'NPWP Pribadi Terdaftar Sah di Server DJP Tanpa Antre di Kantor Pajak',
    oldPrice: 'Rp120.000',
    price: 'Rp80.000',
    saveAmount: 'Rp40.000',
    desc: 'Solusi kilat pembuatan Nomor Pokok Wajib Pajak (NPWP) Pribadi langsung terdaftar di sistem e-Registration Direktorat Jenderal Pajak RI. Valid untuk kerja, buka rekening bank, KPR, dan usaha.',
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    waNumber: '085121342871',
    waMessage: 'Halo Admin, saya mau order Jasa Pembuatan NPWP Online Resmi.',
    btnText: 'Pesan Jasa NPWP (Rp80.000)',
    rating: 4.95,
    ordersCount: 890,
    isGallery: false,
    features: [
      '100% Sah & Terverifikasi di Server Resmi Ditjen Pajak (DJP)',
      'Dapat File PDF Kartu NPWP Digital & Surat Keterangan Terdaftar (SKT)',
      'Bebas Ribet: Cukup kirim foto KTP & data pokok via WhatsApp',
      'Valid untuk Lamaran Kerja, Buka Rekening Bank, KPR, dan Legalitas',
      'Privasi Terjamin: Data pribadi langsung dihapus setelah pendaftaran selesai'
    ],
    specs: [
      { label: 'Status Keabsahan', value: 'Resmi e-Registration Direktorat Jenderal Pajak (Kemenkeu RI)' },
      { label: 'Output Berkas', value: 'File Kartu NPWP Digital & Surat Keterangan Terdaftar (SKT) PDF High-Res' },
      { label: 'Keperluan Valid', value: 'Syarat kerja, payroll kantor, buka tabungan bank, KPR, pinjaman usaha' },
      { label: 'Persyaratan', value: 'Foto e-KTP & data diri pokok (dibantu pengisian sampai terbit)' },
      { label: 'Estimasi Pengerjaan', value: '1–3 Jam (menyesuaikan kelancaran server DJP)' },
      { label: 'Keamanan Data', value: 'Enkripsi data ketat & penghapusan berkas permanen setelah pendaftaran selesai' }
    ]
  }
];

export const COMPARISONS = [
  {
    feature: 'Tampilan Antarmuka',
    regular: 'Mode HP sederhana, toolbar tersembunyi & terpotong',
    ourService: 'Ribbon Bar PC Desktop penuh (Home, Insert, Layout, Formulas)',
    highlight: true
  },
  {
    feature: 'Kemampuan Formula Excel',
    regular: 'Sangat terbatas, sering error saat rumus bercabang',
    ourService: 'VLOOKUP, XLOOKUP, Pivot Table, IF bertingkat 100% lancar',
    highlight: true
  },
  {
    feature: 'Multitasking Dokumen',
    regular: 'Hanya bisa buka 1 file, bolak-balik keluar aplikasi',
    ourService: 'Multi-Tab Browser: buka Word, Excel, & PPT bersamaan',
    highlight: false
  },
  {
    feature: 'Dukungan Mouse & Keyboard',
    regular: 'Kursor lingkaran besar, shortcut keyboard terbatas',
    ourService: 'Kursor panah presisi laptop, shortcut Ctrl+C, Ctrl+V, Alt aktif',
    highlight: true
  },
  {
    feature: 'Proses Setup & Garansi',
    regular: 'Cari tutorial YouTube sendiri, rentan gagal / file crash',
    ourService: 'Dipandu admin via WhatsApp sampai tuntas & garansi uang kembali',
    highlight: false
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Apakah NPWP yang dibuat ini resmi dan terdaftar di DJP?',
    answer: 'Ya, 100% resmi. Pendaftaran diproses langsung melalui sistem resmi e-Registration Direktorat Jenderal Pajak (DJP). Anda akan mendapatkan Nomor Pokok Wajib Pajak sah beserta file PDF Kartu NPWP Digital dan Surat Keterangan Terdaftar (SKT) yang valid untuk kerja, bank, maupun legalitas usaha.'
  },
  {
    question: 'Tablet Android tipe apa saja yang mendukung WPS Office PC Level?',
    answer: 'Mendukung hampir seluruh tablet Android populer seperti Xiaomi Pad (Pad 5, Pad 6, Poco Pad), Redmi Pad, Samsung Galaxy Tab (A-Series & S-Series), Huawei MatePad, Lenovo Tab, Realme Pad, dan smartphone Android (OS Android 8 hingga Android 14+). Kami bantu cek spesifikasi perangkat Anda terlebih dahulu sebelum instalasi.'
  },
  {
    question: 'Berapa lama proses pengerjaannya?',
    answer: 'Untuk pendaftaran NPWP biasanya selesai dalam hitungan 1–3 jam (tergantung antrean server DJP). Untuk pemasangan setup WPS PC Level memakan waktu sekitar 15–30 menit dengan panduan remote interaktif via WhatsApp.'
  },
  {
    question: 'Bagaimana metode pembayarannya?',
    answer: 'Kami menerima transfer antar-bank (BCA, Mandiri, BRI, BNI), QRIS instan bebas biaya admin dari semua e-wallet & mobile banking, serta e-Wallet (GoPay, OVO, Dana, ShopeePay).'
  },
  {
    question: 'Apakah data saya aman dan dijamin privasinya?',
    answer: 'Sangat aman. Data pribadi Anda (seperti foto KTP untuk NPWP) semata-mata hanya digunakan untuk keperluan pengisian formulir resmi server DJP, dan segera dihapus permanen dari perangkat admin begitu proses terbit selesai.'
  }
];

export const SOCIAL_PROOF_TOASTS: SocialProofToast[] = [
  { id: 1, name: 'Rian Pratama', location: 'Jakarta Selatan', service: 'Setup WPS Tablet Xiaomi Pad 6', timeAgo: '2 menit lalu', avatar: '👨‍💼' },
  { id: 2, name: 'Dina Anggraini', location: 'Surabaya', service: 'Cetak NPWP Online Resmi (DJP)', timeAgo: '4 menit lalu', avatar: '👩‍💻' },
  { id: 3, name: 'Bagus Wicaksono', location: 'Bandung', service: 'Setup WPS Tablet Samsung Tab S9', timeAgo: '7 menit lalu', avatar: '👨‍💻' },
  { id: 4, name: 'Fitri Handayani', location: 'Yogyakarta', service: 'Penerbitan NPWP Kilat Karyawan', timeAgo: '11 menit lalu', avatar: '👩‍💼' },
  { id: 5, name: 'Ilham Kurniawan', location: 'Medan', service: 'Setup WPS Tablet Huawei MatePad', timeAgo: '15 menit lalu', avatar: '👨‍🎓' }
];
