import { Product, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'wps',
    category: 'Setup Tablet Kerja',
    badge: 'Terlaris',
    discountBadge: 'Diskon 29%',
    title: 'Pemasangan WPS Office PC Level Android Tablet',
    headline: 'Ubah Tablet Android Anda Menjadi Laptop Kerja Lengkap',
    oldPrice: 'Rp85.000',
    price: 'Rp60.000',
    saveAmount: 'Rp25.000',
    desc: 'Bebaskan batasan aplikasi mobile. Dapatkan tampilan desktop ribbon bar penuh layaknya Microsoft Office di PC: formula Excel lengkap, Word presisi, & presentasi PPT mulus.',
    coverImage: 'assets/images/wps-cover.jpg',
    waNumber: '082392048485',
    waMessage: 'Halo Admin, saya mau order Setup WPS Office PC Level untuk Tablet Android.',
    btnText: 'Pesan WPS Tablet via WhatsApp (Rp60.000)',
    rating: 4.9,
    ordersCount: 520,
    isGallery: true,
    features: [
      'Interface Ribbon Bar Desktop Lengkap (Home, Insert, Layout, Formulas)',
      'Rumus Excel Bebas Limit: VLOOKUP, XLOOKUP, Pivot Table, Multi-IF',
      'Multi-Tab Browsing: Buka banyak dokumen kerja sekaligus',
      'Mendukung Penuh Mouse & Keyboard Bluetooth (Shortcut Ctrl+C, Ctrl+V)',
      'Dipandu Remote Step-by-Step Sampai 100% Aktif & Siap Kerja'
    ],
    specs: [
      { label: 'Tampilan', value: 'Desktop Windows 10 Ribbon Bar penuh tanpa pemotongan menu' },
      { label: 'Paket Software', value: 'WPS Writer (Word), Spreadsheets (Excel), Presentation (PPT)' },
      { label: 'Dukungan Rumus', value: 'VLOOKUP, Pivot Table, IF bertingkat, Conditional Formatting' },
      { label: 'Dukungan Hardware', value: 'Keyboard Bluetooth, Wireless Mouse, Stylus Pen, HDMI Proyektor' },
      { label: 'Kompatibilitas', value: 'Android 8 s/d Android 14+ (Xiaomi Pad, Samsung Tab, Huawei, Lenovo, dll)' },
      { label: 'Garansi', value: 'Garansi uang kembali jika aplikasi tidak berhasil aktif' }
    ],
    gallery: [
      {
        id: 'cover',
        tabName: '📱 Foto Setup',
        badge: 'Setup Nyata',
        title: 'Foto Nyata Tablet + Keyboard Stand',
        desc: 'Tampilan fisik nyata tablet Android dipasangkan dengan keyboard dan mouse.',
        image: 'assets/images/wps-cover.jpg'
      },
      {
        id: 'desktop',
        tabName: '🖥️ Desktop',
        badge: 'Interface PC',
        title: 'Tampilan Desktop Windows di Tablet',
        desc: 'Interface desktop Windows 10 penuh dengan taskbar, start menu, dan folder file.',
        image: 'assets/images/wps-desktop.jpg'
      },
      {
        id: 'word',
        tabName: '📝 Word PC',
        badge: 'Ribbon Penuh',
        title: 'WPS Writer (Word PC Level)',
        desc: 'Toolbar ribbon bar laptop lengkap untuk format dokumen, margins, dan tabel rapi.',
        image: 'assets/images/wps-word.jpg'
      },
      {
        id: 'excel',
        tabName: '📈 Excel PC',
        badge: 'Formula Lengkap',
        title: 'WPS Spreadsheets (Excel PC Level)',
        desc: 'Formula analitik lengkap (VLOOKUP, Pivot Table, IF bercabang) lancar di tablet.',
        image: 'assets/images/wps-excel.jpg'
      },
      {
        id: 'ppt',
        tabName: '📊 PPT PC',
        badge: 'Slide Dinamis',
        title: 'WPS Presentation (PowerPoint PC Level)',
        desc: 'Desain presentasi bisnis & kuliah dengan transisi halus dan animasi laptop.',
        image: 'assets/images/wps-ppt.jpg'
      }
    ]
  },
  {
    id: 'npwp',
    category: 'Layanan Pajak Resmi',
    badge: 'Proses Kilat 1-3 Jam',
    discountBadge: 'Diskon 33%',
    title: 'Jasa Pembuatan NPWP Online Resmi (DJP)',
    headline: 'NPWP Pribadi Terdaftar Sah di Server DJP Tanpa Antre di Kantor Pajak',
    oldPrice: 'Rp120.000',
    price: 'Rp80.000',
    saveAmount: 'Rp40.000',
    desc: 'Pembuatan Nomor Pokok Wajib Pajak (NPWP) Pribadi langsung diverifikasi resmi di server e-Registration Direktorat Jenderal Pajak RI. Praktis tanpa perlu datang ke kantor pajak.',
    coverImage: 'assets/images/npwp-cover.jpg',
    waNumber: '085121342871',
    waMessage: 'Halo Admin, saya mau order Jasa Pembuatan NPWP Online Resmi.',
    btnText: 'Pesan Jasa NPWP via WhatsApp (Rp80.000)',
    rating: 4.95,
    ordersCount: 940,
    isGallery: false,
    features: [
      '100% Sah & Terverifikasi di Server Resmi Ditjen Pajak (DJP)',
      'Dapat Kartu NPWP Digital & Surat Keterangan Terdaftar (SKT) PDF Resmi',
      'Syarat Simpel: Cukup kirim foto KTP & data pokok via WhatsApp',
      'Valid untuk Syarat Kerja, Penggajian Kantor, Bank, KPR, & Usaha',
      'Privasi Terjamin: Data pribadi langsung dihapus setelah pendaftaran selesai'
    ],
    specs: [
      { label: 'Status Resmi', value: 'e-Registration Direktorat Jenderal Pajak (Kementerian Keuangan RI)' },
      { label: 'Berkas Diterima', value: 'File Kartu NPWP Digital & Surat Keterangan Terdaftar (SKT) format PDF asli' },
      { label: 'Keperluan', value: 'Melamar pekerjaan, payroll kantor, buka tabungan bank, KPR, legalitas usaha' },
      { label: 'Persyaratan', value: 'Foto e-KTP & data diri pokok (dibantu pengisian formulir sampai beres)' },
      { label: 'Waktu Proses', value: 'Selesai 1–3 Jam (menyesuaikan kelancaran server DJP)' },
      { label: 'Keamanan Data', value: 'Data pribadi dijamin aman dan langsung dihapus permanen setelah terbit' }
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Apakah NPWP ini resmi dan terdaftar di server DJP?',
    answer: 'Ya, 100% resmi. Pendaftaran diproses langsung melalui sistem resmi e-Registration Direktorat Jenderal Pajak (DJP). Anda akan menerima Kartu NPWP Digital dan Surat Keterangan Terdaftar (SKT) PDF resmi yang sah dan valid untuk melamar kerja, perbankan, KPR, maupun administrasi legalitas.'
  },
  {
    question: 'Tablet Android apa saja yang mendukung WPS Office PC Level?',
    answer: 'Mendukung semua tipe tablet Android populer seperti Xiaomi Pad, Redmi Pad, Poco Pad, Samsung Galaxy Tab, Huawei MatePad, Lenovo Tab, Realme Pad, dan smartphone Android (OS Android 8 hingga Android 14+). Kami bantu pandu sampai berhasil.'
  },
  {
    question: 'Berapa lama proses pengerjaannya?',
    answer: 'Untuk NPWP biasanya selesai dalam 1–3 jam (tergantung antrean server DJP). Untuk pemasangan WPS PC Level membutuhkan waktu sekitar 15–20 menit dengan panduan remote interaktif lewat WhatsApp.'
  },
  {
    question: 'Bagaimana metode pembayarannya?',
    answer: 'Kami menerima QRIS instan bebas biaya admin (bisa dari semua mobile banking & e-wallet seperti GoPay, OVO, Dana, ShopeePay) serta transfer antar-bank (BCA, Mandiri, BRI, BNI).'
  }
];
