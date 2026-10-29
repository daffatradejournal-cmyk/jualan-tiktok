import React from 'react';
import { Laptop, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export const StickyMobileBar: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.9 },
      colors: ['#25D366', '#38bdf8']
    });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-surface-200 p-2.5 px-4 shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-surface-950 uppercase tracking-wider">
            Order Cepat WA:
          </span>
          <span className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Promo Diskon Aktif
          </span>
        </div>

        <div className="flex items-center gap-2 flex-grow justify-end">
          {/* NPWP Quick Button */}
          <a
            href="https://wa.me/6285121342871?text=Halo%20Admin%2C%20saya%20mau%20order%20Jasa%20Pembuatan%20NPWP%20Resmi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerConfetti}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-900 hover:bg-surface-800 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-sm transition-transform active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>NPWP (80k)</span>
          </a>

          {/* WPS Quick Button */}
          <a
            href="https://wa.me/6282392048485?text=Halo%20Admin%2C%20saya%20mau%20order%20WPS%20Office%20PC%20Level%20Tablet"
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerConfetti}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-sm transition-transform active:scale-95"
          >
            <Laptop className="w-3.5 h-3.5 fill-white" />
            <span>WPS (60k)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
