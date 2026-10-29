import React from 'react';
import { Product } from '../types';
import { Check, Star, MessageCircle, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductCardProps {
  product: Product;
  onOpenModal: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const isWps = product.id === 'wps';

  const handleWaClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#25D366', '#38bdf8', '#10b981']
    });
  };

  const waLink = `https://wa.me/${product.waNumber.replace(/^0/, '62')}?text=${encodeURIComponent(product.waMessage)}`;

  return (
    <article className="rounded-3xl bg-white border border-surface-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
      
      {/* Top Details & Visual Header */}
      <div>
        {/* Photo Container - FULL VISIBILITY (NO CUTOFFS) */}
        <div 
          onClick={() => onOpenModal(product.id)}
          className="relative bg-surface-100 cursor-pointer group overflow-hidden border-b border-surface-200/60"
        >
          {isWps ? (
            /* WPS Tablet Photo: Show whole tablet + keyboard clearly */
            <div className="w-full aspect-[4/3] bg-surface-950 flex items-center justify-center p-2 sm:p-4">
              <img
                src={product.coverImage}
                alt={product.title}
                className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <span>Bisa di Tablet & HP Android</span>
              </div>
            </div>
          ) : (
            /* NPWP Photo: Show authentic hand holding blue NPWP card clearly */
            <div className="w-full aspect-[4/3] bg-surface-900 flex items-center justify-center p-2 sm:p-4">
              <img
                src={product.coverImage}
                alt={product.title}
                className="max-h-full max-w-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <span>NPWP Elektronik (Digital PDF)</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-surface-950/80 backdrop-blur-md text-surface-200 text-[10px] font-medium px-2 py-0.5 rounded border border-white/10 hidden sm:inline-block">
                Output: File PDF Digital Resmi Sah DJP
              </div>
            </div>
          )}

          {/* Discount Badge */}
          <div className="absolute top-3 right-3 bg-red-500 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
            {product.discountBadge}
          </div>

          {/* Quick Preview Hover Trigger */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-surface-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm border border-surface-200/60 flex items-center gap-1 group-hover:bg-white transition-colors">
            <span>Buka Detail</span>
            <Info className="w-3.5 h-3.5 text-surface-600" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6">
          {/* Badge & Category */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-surface-500">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              <span>{product.rating} ({product.ordersCount}+ order)</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-extrabold text-surface-950 tracking-tight leading-snug">
            {product.title}
          </h2>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-surface-600 mt-1.5 leading-relaxed">
            {product.desc}
          </p>

          {/* Price Box */}
          <div className="mt-4 p-3 bg-surface-50 rounded-2xl border border-surface-200/70 flex items-baseline justify-between">
            <div>
              <span className="text-[11px] text-surface-500 font-semibold block leading-none mb-1">
                Biaya Layanan:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-surface-950 font-display">
                  {product.price}
                </span>
                <span className="text-xs text-surface-400 line-through font-semibold">
                  {product.oldPrice}
                </span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
              Hemat {product.saveAmount}
            </span>
          </div>

          {/* Features List */}
          <ul className="mt-4 space-y-2">
            {product.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-surface-700">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 sm:p-6 pt-0 space-y-2">
        {/* Main WhatsApp CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-sm py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>{product.btnText}</span>
        </a>

        {/* View Details Button */}
        <button
          type="button"
          onClick={() => onOpenModal(product.id)}
          className="w-full py-2.5 text-center text-xs font-bold text-surface-600 hover:text-surface-900 transition-colors"
        >
          Lihat Contoh Gambar & Spesifikasi Lengkap ↗
        </button>
      </div>

    </article>
  );
};
