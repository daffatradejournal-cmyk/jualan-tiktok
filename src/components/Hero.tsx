import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Laptop, FileText } from 'lucide-react';

interface HeroProps {
  onSelectProduct: (productId: string) => void;
  onExploreGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, onExploreGallery }) => {
  return (
    <section className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 overflow-hidden">
      {/* Background Subtle Ambient Glows (No generic purple blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-500/5 via-emerald-500/5 to-transparent pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & High Conversion Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold mb-5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Layanan Terpercaya • 1.200+ Berkas & Setup Selesai</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-extrabold text-surface-950 tracking-tight leading-[1.15] mb-5">
              Optimalkan Tablet Jadi{' '}
              <span className="relative inline-block text-brand-600">
                Laptop Kerja
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-400/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              & Layanan Berkas Resmi.
            </h1>

            {/* Lead Subtitle */}
            <p className="text-base sm:text-lg text-surface-600 leading-relaxed mb-6 max-w-xl">
              Nikmati kebebasan olah dokumen dengan <strong>WPS Office PC Level</strong> (Ribbon bar penuh layaknya laptop) serta asistensi kilat pendaftaran <strong>NPWP Online Resmi DJP</strong>. Dipandu step-by-step sampai tuntas.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-surface-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Interface Ribbon Bar Desktop Penuh</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-surface-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>100% Sah di Server Resmi DJP</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-surface-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Formula Excel Berat (VLOOKUP, Pivot)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-surface-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Garansi Uang Kembali Jika Gagal</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onSelectProduct('wps')}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-600 hover:bg-brand-500 active:scale-98 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg shadow-brand-600/25 transition-all duration-200 group"
              >
                <Laptop className="w-4 h-4" />
                <span>Setup WPS Tablet (Rp60.000)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onSelectProduct('npwp')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface-100 active:scale-98 text-surface-800 font-bold text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-surface-200 shadow-sm transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Jasa NPWP Resmi (Rp80.000)</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Authentic Tactile Device Stage (NO CROPPING) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Device Frame Wrapper with Studio Dark Backing */}
            <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-surface-900 via-surface-950 to-surface-900 border border-white/10 shadow-2xl">
              
              {/* Studio Reflection Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-500/10 via-transparent to-white/5 pointer-events-none" />

              {/* Status Header Badge on Device */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-white text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-surface-200">WPS Office PC Level Setup</span>
                </div>
                <span className="font-display text-emerald-400 font-bold bg-white/10 px-2 py-0.5 rounded text-[11px]">
                  Aktif & Siap Kerja
                </span>
              </div>

              {/* Image Stage: Showing FULL PHOTO of Tablet + Keyboard without awkward crop */}
              <div 
                onClick={onExploreGallery}
                className="relative mt-3 rounded-2xl overflow-hidden bg-black cursor-pointer group shadow-inner"
              >
                <img
                  src="assets/images/wps-cover.jpg"
                  alt="Full Setup WPS Office PC Level di Android Tablet"
                  className="w-full h-auto object-contain max-h-[440px] mx-auto group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Glass Overlaid Trigger Badge */}
                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between bg-surface-950/85 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-xl text-white text-xs shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold">Bisa Keyboard & Mouse Bluetooth</span>
                  </div>
                  <span className="text-brand-300 font-bold group-hover:underline flex items-center gap-1">
                    Buka Galeri ↗
                  </span>
                </div>
              </div>

              {/* Floating Proof Specs under stage */}
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                  <span className="block text-[10px] text-surface-400 uppercase font-bold">OS Dukungan</span>
                  <span className="text-xs font-bold text-white">Android 8 - 14+</span>
                </div>
                <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                  <span className="block text-[10px] text-surface-400 uppercase font-bold">Tampilan</span>
                  <span className="text-xs font-bold text-emerald-400">Ribbon PC</span>
                </div>
                <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                  <span className="block text-[10px] text-surface-400 uppercase font-bold">Waktu Setup</span>
                  <span className="text-xs font-bold text-white">15-30 Mnt</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
