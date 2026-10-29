import React from 'react';
import { COMPARISONS } from '../data/products';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-surface-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3 h-3 text-brand-500" /> Kenapa Harus Setup PC Level?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-950 tracking-tight">
            Beda Jauh dengan Aplikasi Kantor Tablet Biasa
          </h2>
          <p className="text-xs sm:text-sm text-surface-600 mt-2">
            Bandingkan efisiensi kerja versi mobile standar dari Play Store dengan setup PC Level kami.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-white border border-surface-200 shadow-soft-card overflow-hidden">
          <div className="grid grid-cols-12 bg-surface-900 text-white p-3.5 sm:p-5 text-xs sm:text-sm font-bold border-b border-surface-800">
            <div className="col-span-4 sm:col-span-4">Fitur Kerja</div>
            <div className="col-span-4 sm:col-span-4 text-surface-400">Aplikasi Tablet Biasa</div>
            <div className="col-span-4 sm:col-span-4 text-emerald-400 flex items-center gap-1.5">
              <span>Setup PC Level Kita</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded hidden sm:inline">Unggulan</span>
            </div>
          </div>

          <div className="divide-y divide-surface-100 text-xs sm:text-sm">
            {COMPARISONS.map((row, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-12 p-3.5 sm:p-5 items-center transition-colors hover:bg-surface-50/80 ${
                  row.highlight ? 'bg-brand-50/20' : ''
                }`}
              >
                <div className="col-span-4 sm:col-span-4 font-bold text-surface-950 pr-2">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-4 text-surface-500 flex items-start gap-1.5 pr-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{row.regular}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-surface-900 font-semibold flex items-start gap-1.5 bg-emerald-50/50 -m-2 sm:-m-3 p-2 sm:p-3 rounded-xl border border-emerald-200/60">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-emerald-950 leading-snug">{row.ourService}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
