import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { X, MessageCircle, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  useEffect(() => {
    setActiveTabIdx(0);
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
  const currentImage = isWps && gallery.length > 0 ? gallery[activeTabIdx]?.image : product.coverImage;
  const currentTitle = isWps && gallery.length > 0 ? gallery[activeTabIdx]?.title : product.title;
  const currentDesc = isWps && gallery.length > 0 ? gallery[activeTabIdx]?.desc : product.desc;

  const handleWaOrder = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#25D366', '#38bdf8', '#10b981']
    });
  };

  const waLink = `https://wa.me/${product.waNumber.replace(/^0/, '62')}?text=${encodeURIComponent(product.waMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-surface-950/75 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-surface-200 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-surface-900/80 hover:bg-surface-900 text-white flex items-center justify-center transition-colors shadow-md"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Gallery Image Viewport (100% UNCLIPPED FULL VISIBILITY) */}
        <div className="bg-surface-950 text-white flex-shrink-0">
          <div className="relative w-full aspect-[4/3] bg-black flex items-center justify-center p-3">
            <img
              src={currentImage}
              alt={currentTitle}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          </div>

          {/* Gallery Sub-Tabs for WPS */}
          {isWps && gallery.length > 0 && (
            <div className="flex items-center gap-1.5 p-2 px-3 bg-surface-900 border-t border-white/10 overflow-x-auto no-scrollbar">
              {gallery.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    activeTabIdx === idx
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'bg-white/5 text-surface-400 hover:text-white'
                  }`}
                >
                  {tab.tabName}
                </button>
              ))}
            </div>
          )}

          {/* Image Caption */}
          <div className="p-3 px-4 bg-surface-950 border-t border-white/5 text-xs">
            <span className="font-bold text-white block text-sm mb-0.5">
              {currentTitle}
            </span>
            <span className="text-surface-300">{currentDesc}</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* Price Header */}
          <div className="flex items-center justify-between bg-surface-50 p-3 rounded-2xl border border-surface-200">
            <div>
              <span className="text-[11px] text-surface-500 font-semibold block">Harga Layanan:</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-surface-950 font-display">
                  {product.price}
                </span>
                <span className="text-xs text-surface-400 line-through">
                  {product.oldPrice}
                </span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              {product.discountBadge}
            </span>
          </div>

          {/* Specs List */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-surface-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Yang Anda Dapatkan:
            </h3>
            <div className="space-y-1.5">
              {product.specs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs p-2 rounded-xl bg-surface-50 border border-surface-100">
                  <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-surface-900">{item.label}:</strong>{' '}
                    <span className="text-surface-600">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order WhatsApp CTA */}
          <div className="pt-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWaOrder}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{product.btnText}</span>
            </a>
            <p className="text-center text-[11px] text-surface-500 mt-2">
              🔒 Chat langsung dengan admin via WhatsApp. Respon cepat tanpa ribet.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
