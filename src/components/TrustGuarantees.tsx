import React from 'react';
import { Zap, ShieldCheck, Wrench, CreditCard } from 'lucide-react';

export const TrustGuarantees: React.FC = () => {
  const items = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: 'Respon Kilat (< 5 Mnt)',
      desc: 'Admin standby setiap hari merespon chat Anda tanpa formulir rumit.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: 'Privasi Data 100% Aman',
      desc: 'Data pribadi Anda langsung dihapus permanen begitu pengerjaan selesai.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-brand-500" />,
      title: 'Garansi Sampai Berhasil',
      desc: 'Dipandu langkah demi langkah secara remote sampai aplikasi/berkas tuntas.'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-purple-500" />,
      title: 'Bayar Fleksibel',
      desc: 'Bisa transfer antar-bank (BCA, Mandiri, BRI) & QRIS semua e-wallet.'
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl font-extrabold text-surface-950">
          Kenapa Order di SolusiDigital?
        </h3>
        <p className="text-xs text-surface-600 mt-1">
          Layanan terpercaya dengan reputasi ratusan order sukses setiap bulan.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, idx) => (
          <div 
            key={idx}
            className="rounded-2xl bg-white p-3.5 sm:p-4 border border-surface-200/80 shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-9 h-9 rounded-xl bg-surface-100 flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <h4 className="text-xs font-bold text-surface-950 mb-1 leading-snug">
              {item.title}
            </h4>
            <p className="text-[11px] text-surface-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
