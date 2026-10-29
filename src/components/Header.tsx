import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  // Countdown Timer state: e.g. 02 hours, 45 minutes, 18 seconds
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 44, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Announcement Urgency Bar */}
      <div className="bg-surface-950 text-white px-4 py-2 border-b border-white/10 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
          <span className="inline-flex items-center gap-1.5 bg-red-500/90 text-white font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Promo Terbatas Hari Ini
          </span>
          <span className="text-surface-300 hidden md:inline">
            Potongan hingga 33% untuk Setup Tablet & Layanan Pajak Resmi
          </span>
          <div className="inline-flex items-center gap-1.5 font-display bg-white/10 px-2.5 py-0.5 rounded border border-white/15 text-amber-300 font-bold tracking-wider">
            <span>{formatNum(timeLeft.hours)}</span>:
            <span>{formatNum(timeLeft.minutes)}</span>:
            <span>{formatNum(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-panel border-b border-surface-200/80 transition-all duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-surface-900 to-surface-950 border border-white/20 shadow-md flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-surface-950 flex items-center gap-1.5">
                SolusiDigital<span className="text-brand-500">.id</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-surface-500 uppercase tracking-wider">
                Resmi & Terverifikasi
              </span>
            </div>
          </a>

          {/* Right Action / Status */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 bg-white/80 border border-surface-200 px-3 py-1.5 rounded-full text-xs font-semibold text-surface-700 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Admin Online (Respon &lt; 5 mnt)</span>
            </div>

            <a
              href="https://wa.me/6282392048485?text=Halo%20Admin%2C%20saya%20mau%20konsultasi%20layanan%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface-900 hover:bg-surface-800 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
