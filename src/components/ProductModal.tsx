import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { X, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    setActiveGalleryIndex(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const isWps = product.id === 'wps';
  const gallery = product.gallery || [];
  const currentSlide = gallery[activeGalleryIndex];

  const handleWaOrder = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#25D366', '#38bdf8', '#10b981']
    });
  };

  const waLink = `https://wa.me/${product.waNumber.replace(/^0/, '62')}?text=${encodeURIComponent(product.waMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-surface-950/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-surface-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-surface-900/80 hover:bg-red-500 text-white flex items-center justify-center transition-colors shadow-md"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Gallery Header for WPS (or Cover Image for NPWP) - ZERO CROPPING */}
          {isWps && gallery.length > 0 ? (
            <div className="bg-surface-950 text-white flex flex-col flex-shrink-0">
              {/* Image Viewport: Aspect container with object-contain */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center p-2">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide?.image}
                    src={currentSlide?.image}
                    alt={currentSlide?.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-full max-w-full object-contain mx-auto"
                  />
                </AnimatePresence>

                {/* Counter Pill */}
                <div className="absolute top-3 left-3 bg-surface-900/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[11px] font-bold text-white flex items-center gap-1">
                  <span>{activeGalleryIndex + 1}</span> / <span>{gallery.length}</span>
                </div>

                {/* Prev / Next Buttons */}
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex(prev => (prev === 0 ? gallery.length - 1 : prev - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-900/70 hover:bg-surface-900 text-white flex items-center justify-center border border-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex(prev => (prev === gallery.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-900/70 hover:bg-surface-900 text-white flex items-center justify-center border border-white/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Gallery Thumb Tabs */}
              <div className="flex items-center gap-1.5 p-2 px-3 bg-surface-900 border-t border-white/10 overflow-x-auto no-scrollbar">
                {gallery.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                      activeGalleryIndex === idx
                        ? 'bg-brand-500 text-white shadow-sm'
                        : 'bg-white/5 text-surface-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.tabName}
                  </button>
                ))}
              </div>

              {/* Slide Caption Box */}
              <div className="p-3 px-4 bg-surface-950 border-t border-white/5 text-xs text-surface-300">
                <span className="font-bold text-white block text-sm mb-0.5">
                  {currentSlide?.title}
                </span>
                <span>{currentSlide?.desc}</span>
              </div>
            </div>
          ) : (
            /* NPWP Header */
            <div className="relative h-44 sm:h-52 bg-surface-900 overflow-hidden flex-shrink-0">
              <img
                src={product.coverImage}
                alt={product.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block text-[11px] font-bold bg-emerald-500 px-2.5 py-0.5 rounded text-white mb-1.5">
                  Layanan Resmi DJP
                </span>
                <h3 className="text-xl font-bold">{product.title}</h3>
              </div>
            </div>
          )}

          {/* Modal Content Scrollable Area */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
            {/* Price & Save Banner */}
            <div className="flex items-center justify-between bg-surface-50 p-3.5 rounded-2xl border border-surface-200">
              <div>
                <span className="text-xs text-surface-500 font-semibold block">Biaya Layanan:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-surface-950 font-display">
                    {product.price}
                  </span>
                  <span className="text-xs text-surface-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                {product.discountBadge}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-surface-600 leading-relaxed">
              {product.desc}
            </p>

            {/* Detailed Specs List */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-surface-950 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Yang Anda Dapatkan & Spesifikasi:
              </h4>
              <div className="space-y-2">
                {product.specs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm p-2 rounded-xl bg-surface-50/70 border border-surface-100">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-surface-900">{item.label}:</strong>{' '}
                      <span className="text-surface-600">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWaOrder}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{product.btnText}</span>
              </a>
              <p className="text-center text-[11px] text-surface-500 mt-2">
                🔒 Konsultasi langsung dengan admin via WhatsApp. Respon cepat tanpa bot.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
