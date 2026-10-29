import React from 'react';
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <MessageSquare className="w-5 h-5 text-brand-600" />,
      title: 'Pilih Layanan & Chat WhatsApp',
      desc: 'Klik tombol order pada layanan yang diinginkan. Draf pesan otomatis telah kami siapkan sehingga Anda tinggal mengirimnya tanpa mengetik ulang.'
    },
    {
      num: '02',
      icon: <Send className="w-5 h-5 text-brand-600" />,
      title: 'Kirim Data / Info Perangkat',
      desc: 'Kirimkan kelengkapan data KTP (untuk NPWP) atau sebutkan tipe tablet/HP Android Anda (untuk WPS PC). Admin langsung memvalidasi.'
    },
    {
      num: '03',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      title: 'Proses Kilat & Langsung Jadi',
      desc: 'Pengerjaan diproses langsung. Anda menerima file PDF resmi NPWP Digital atau aplikasi WPS PC Level terpasang rapi dan siap kerja.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-surface-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-block mb-2">
            Alur Kerja Praktis
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-950 tracking-tight">
            3 Langkah Mudah Tanpa Ribet
          </h2>
          <p className="text-xs sm:text-sm text-surface-600 mt-2">
            Tidak perlu registrasi akun atau isi formulir berbelit. Cukup lewat WhatsApp langsung ditangani admin.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="relative rounded-3xl bg-surface-50 p-6 border border-surface-200/90 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-surface-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-display font-extrabold text-2xl text-surface-300">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-surface-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-surface-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
