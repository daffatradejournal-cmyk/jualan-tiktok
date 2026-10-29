import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <section className="pt-6 sm:pt-10 pb-4 px-4 text-center max-w-2xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        <span>100% Bergaransi Resmi • Proses Cepat</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl font-extrabold text-surface-950 tracking-tight leading-tight">
        Katalog Layanan Digital & Setup Tablet / HP
      </h1>

      {/* Clean Subtitle */}
      <p className="text-xs sm:text-sm text-surface-600 mt-2 max-w-md mx-auto leading-relaxed">
        Pilih layanan yang Anda butuhkan di bawah. Klik tombol untuk langsung order via WhatsApp dengan respon cepat admin.
      </p>

      {/* Trust Highlights */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-3 text-[11px] sm:text-xs font-semibold text-surface-700">
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          Data Aman & Terlindungi
        </span>
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          Dipandu Sampai Tuntas
        </span>
        <span className="inline-flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          Bisa Bayar QRIS / Transfer
        </span>
      </div>

      {/* Minimalist Filter Pills */}
      <div className="flex items-center justify-center gap-2 mt-5 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeFilter === 'all'
              ? 'bg-surface-950 text-white shadow-sm'
              : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
          }`}
        >
          Semua (2)
        </button>
        <button
          onClick={() => onFilterChange('wps')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeFilter === 'wps'
              ? 'bg-brand-600 text-white shadow-sm'
              : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
          }`}
        >
          💻 WPS Tablet & HP (60k)
        </button>
        <button
          onClick={() => onFilterChange('npwp')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            activeFilter === 'npwp'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
          }`}
        >
          💳 NPWP Elektronik (80k)
        </button>
      </div>
    </section>
  );
};
