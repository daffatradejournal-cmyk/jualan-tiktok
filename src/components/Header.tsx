import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-surface-200/80 transition-all">
      {/* Subtle Trust Top Bar */}
      <div className="bg-surface-950 text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium text-surface-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Layanan Aktif • Konsultasi Cepat via WhatsApp
          </span>
          <span className="font-semibold text-emerald-400">
            Garansi 100% Berhasil
          </span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-4xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-surface-950 flex items-center justify-center text-emerald-400 shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-surface-950 leading-none">
              SolusiDigital<span className="text-emerald-600">.id</span>
            </span>
            <span className="text-[10px] text-surface-500 font-semibold tracking-wide uppercase mt-0.5">
              Jasa Resmi & Terpercaya
            </span>
          </div>
        </a>

        {/* WhatsApp Quick CTA */}
        <a
          href="https://wa.me/6282392048485?text=Halo%20Admin%2C%20saya%20mau%20tanya%20layanan%20digital"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat Admin</span>
        </a>
      </div>
    </header>
  );
};
