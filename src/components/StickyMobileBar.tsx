import React from 'react';
import { Laptop, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export const StickyMobileBar: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.9 },
      colors: ['#25D366', '#38bdf8']
    });
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-surface-200 p-2.5 px-3 shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-2 max-w-sm mx-auto">
        {/* NPWP Button */}
        <a
          href="https://wa.me/6285121342871?text=Halo%20Admin%2C%20saya%20mau%20order%20Jasa%20Pembuatan%20NPWP%20Resmi"
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerConfetti}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-900 active:scale-95 text-white font-bold text-xs py-2.5 px-2 rounded-xl shadow-sm"
        >
          <FileText className="w-3.5 h-3.5 text-emerald-400" />
          <span>NPWP (80k)</span>
        </a>

        {/* WPS Button */}
        <a
          href="https://wa.me/6282392048485?text=Halo%20Admin%2C%20saya%20mau%20order%20WPS%20Office%20PC%20Level%20Tablet"
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerConfetti}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] active:scale-95 text-white font-bold text-xs py-2.5 px-2 rounded-xl shadow-sm"
        >
          <Laptop className="w-3.5 h-3.5 fill-white" />
          <span>WPS (60k)</span>
        </a>
      </div>
    </div>
  );
};
