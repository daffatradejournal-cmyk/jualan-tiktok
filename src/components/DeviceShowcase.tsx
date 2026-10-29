import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import { CheckCircle, Monitor, FileSpreadsheet, Presentation, FileText, Sparkles, ExternalLink } from 'lucide-react';

interface DeviceShowcaseProps {
  onOpenModal: (productId: string) => void;
}

export const DeviceShowcase: React.FC<DeviceShowcaseProps> = ({ onOpenModal }) => {
  const wpsProduct = PRODUCTS.find(p => p.id === 'wps');
  const gallery = wpsProduct?.gallery || [];
  const [activeTabId, setActiveTabId] = useState(gallery[0]?.id || 'desktop');

  const currentItem = gallery.find(item => item.id === activeTabId) || gallery[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'desktop': return <Monitor className="w-4 h-4" />;
      case 'word': return <FileText className="w-4 h-4" />;
      case 'ppt': return <Presentation className="w-4 h-4" />;
      case 'excel': return <FileSpreadsheet className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-surface-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 text-brand-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" /> Demo Interaktif Antarmuka
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-surface-950 tracking-tight leading-tight">
            Lihat Sendiri Tampilan PC di Layar Tablet Anda
          </h2>
          <p className="text-sm sm:text-base text-surface-600 mt-3">
            Bukan sekadar aplikasi HP biasa. Nikmati toolbar ribbon desktop, navigasi multi-tab, dan shortcut keyboard persis laptop kantor.
          </p>
        </div>

        {/* Tactile Tab Selector (Linear-style Spring Pill) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <div className="inline-flex p-1.5 bg-surface-100 rounded-2xl border border-surface-200 shadow-inner">
            {gallery.map(item => {
              const isActive = item.id === activeTabId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabId(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-surface-600 hover:text-surface-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-surface-950 rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {getIcon(item.id)}
                    {item.tabName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Display Stage: Realistic Monitor / Tablet Bezel Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-surface-900 to-surface-950 border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Top Toolbar Simulation */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-display text-surface-300 font-semibold hidden sm:inline">
                  {currentItem.badge}
                </span>
              </div>
              <button 
                onClick={() => onOpenModal('wps')}
                className="text-surface-300 hover:text-white flex items-center gap-1 text-[11px] sm:text-xs font-semibold bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-lg transition-colors"
              >
                <span>Lihat Spesifikasi Lengkap</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Screen Image with AnimatePresence */}
            <div className="relative mt-3 rounded-2xl overflow-hidden bg-black aspect-[16/10] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentItem.image}
                  src={currentItem.image}
                  alt={currentItem.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Bottom Info Gradient Strip */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="inline-block bg-brand-500/90 text-white font-bold text-[11px] uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                      {currentItem.badge}
                    </div>
                    <h3 className="text-base sm:text-xl font-bold tracking-tight">
                      {currentItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-300 mt-1 max-w-2xl line-clamp-2 sm:line-clamp-none">
                      {currentItem.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Feature Pills Below Screen */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 pt-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-white text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Ribbon Menu PC</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-white text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>VLOOKUP & Pivot</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-white text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Multi-Tab File</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl px-3 py-2 text-white text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Mouse Panah Presisi</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
