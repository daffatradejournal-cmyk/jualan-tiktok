import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-950 text-white pt-8 pb-20 md:pb-8 border-t border-white/10 text-xs">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 text-center sm:text-left">
          
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-surface-900 border border-white/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-sm tracking-tight">
              SolusiDigital<span className="text-emerald-400">.id</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://wa.me/6282392048485?text=Halo%20Admin%2C%20tanya%20WPS%20Tablet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-lg text-surface-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Admin WPS: 0823-9204-8485</span>
            </a>
            <a
              href="https://wa.me/6285121342871?text=Halo%20Admin%2C%20tanya%20Jasa%20NPWP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-lg text-surface-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Admin NPWP: 0851-2134-2871</span>
            </a>
          </div>

        </div>

        <div className="pt-4 text-center text-surface-400 text-[11px] leading-relaxed">
          <p>&copy; {new Date().getFullYear()} SolusiDigital Indonesia. Layanan Asistensi Digital Terpercaya.</p>
          <p className="mt-0.5 text-surface-500">Pendaftaran NPWP diproses melalui portal resmi e-Registration Ditjen Pajak RI.</p>
        </div>
      </div>
    </footer>
  );
};
