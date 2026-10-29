import React from 'react';
import { Zap, ShieldCheck, Wrench, CreditCard } from 'lucide-react';

export const TrustGuarantees: React.FC = () => {
  const items = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: 'Respon Kilat (< 5 Menit)',
      desc: 'Admin standby setiap hari merespon chat konsultasi dan pengerjaan tanpa antrean berjam-jam.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: 'Privasi & Data Aman 100%',
      desc: 'Data KTP & informasi perangkat Anda terenkripsi dan langsung dihapus permanen begitu pengerjaan selesai.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-brand-500" />,
      title: 'Garansi Sampai Berhasil',
      desc: 'Dipandu langkah demi langkah secara remote via WhatsApp. Jika sistem tidak aktif, uang kami kembalikan 100%.'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-purple-500" />,
      title: 'Pembayaran Fleksibel',
      desc: 'Bisa transfer BCA, Mandiri, BRI, QRIS instan semua e-wallet (GoPay, OVO, Dana, ShopeePay) bebas biaya admin.'
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-white p-5 border border-surface-200/90 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-surface-950 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-surface-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
