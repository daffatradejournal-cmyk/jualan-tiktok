import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-950 text-white pt-12 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface-900 border border-white/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                SolusiDigital<span className="text-brand-400">.id</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-surface-400 max-w-md leading-relaxed">
              Penyedia asistensi layanan pendaftaran pajak resmi dan panduan optimalisasi produktivitas tablet Android. Cepat, aman, dan bergaransi resmi.
            </p>
          </div>

          {/* Quick Contact Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-surface-400">
              Layanan Bantuan WhatsApp:
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://wa.me/6282392048485?text=Halo%20Admin%2C%20tanya%20WPS%20PC%20Level"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-surface-200 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin WPS: 0823-9204-8485</span>
              </a>
              <a
                href="https://wa.me/6285121342871?text=Halo%20Admin%2C%20tanya%20Jasa%20NPWP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-xl text-xs font-semibold text-surface-200 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin NPWP: 0851-2134-2871</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-surface-500">
          <p>&copy; {new Date().getFullYear()} SolusiDigital Indonesia. Seluruh hak cipta dilindungi.</p>
          <p>
            Layanan asistensi digital independen. Pendaftaran NPWP diproses melalui portal resmi Ditjen Pajak RI.
          </p>
        </div>
      </div>
    </footer>
  );
};
