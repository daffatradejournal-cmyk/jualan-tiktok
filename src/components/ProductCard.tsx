import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { Check, Star, MessageCircle, Info, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductCardProps {
  product: Product;
  onOpenModal: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenModal }) => {
  const isWps = product.id === 'wps';

  const handleWaClick = () => {
    // Fire celebratory confetti on order intent
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#25D366', '#38bdf8', '#f59e0b', '#10b981']
    });
  };

  const waLink = `https://wa.me/${product.waNumber.replace(/^0/, '62')}?text=${encodeURIComponent(product.waMessage)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-soft-card hover:shadow-soft-hover ${
        isWps ? 'border-brand-500/30 ring-1 ring-brand-500/10' : 'border-surface-200'
      }`}
    >
      {/* Top Banner Tag */}
      <div className="p-4 sm:p-6 pb-0">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
            isWps 
              ? 'bg-brand-50 text-brand-700 border border-brand-200' 
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
          }`}>
            {isWps ? <Sparkles className="w-3.5 h-3.5 text-brand-500" /> : <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />}
            {product.category}
          </span>

          <span className="bg-red-500 text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow-sm">
            {product.discountBadge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-surface-950 tracking-tight leading-snug">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-surface-600 mt-2 leading-relaxed">
          {product.desc}
        </p>
      </div>

      {/* Visual Showcase: FULL PHOTO VISIBILITY (NO WEIRD CROPPING) */}
      <div className="px-4 sm:px-6 my-4">
        <div 
          onClick={() => onOpenModal(product.id)}
          className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
            isWps ? 'bg-gradient-to-b from-surface-900 to-surface-950 p-2 sm:p-3 border border-surface-800' : 'bg-surface-100 border border-surface-200'
          }`}
        >
          {isWps ? (
            /* WPS Tablet: Display FULL setup image with tablet + keyboard without cropping */
            <div className="relative w-full flex items-center justify-center bg-black/60 rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={product.coverImage}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlaid Badges */}
              <div className="absolute top-2 left-2 bg-surface-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/10">
                Setup Tablet + Keyboard
              </div>
              <div className="absolute bottom-2 right-2 bg-brand-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1 group-hover:bg-brand-400 transition-colors">
                <span>Klik Detail & Galeri</span>
                <Info className="w-3 h-3" />
              </div>
            </div>
          ) : (
            /* NPWP Visual */
            <div className="relative w-full h-44 sm:h-52 overflow-hidden rounded-xl">
              <img
                src={product.coverImage}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-bold bg-emerald-500 px-2 py-0.5 rounded text-white inline-block mb-1">
                  100% DJP e-Registration
                </span>
                <div className="text-xs font-semibold text-surface-200">
                  Kartu Digital + Surat Keterangan Terdaftar (SKT) PDF
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pricing & Features Section */}
      <div className="p-4 sm:p-6 pt-0 flex flex-col flex-grow justify-between">
        {/* Price Display */}
        <div className="flex items-baseline gap-2.5 pb-4 border-b border-surface-100">
          <span className="text-2xl sm:text-3xl font-extrabold text-surface-950 font-display">
            {product.price}
          </span>
          <span className="text-xs sm:text-sm text-surface-400 line-through font-semibold">
            {product.oldPrice}
          </span>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full ml-auto">
            Hemat {product.saveAmount}
          </span>
        </div>

        {/* Feature Checklist */}
        <ul className="py-4 space-y-2.5">
          {product.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-surface-700">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Social Proof Star Rating */}
        <div className="flex items-center justify-between text-xs text-surface-500 py-2 mb-2">
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating} / 5.0</span>
          </div>
          <span className="font-semibold text-surface-600">
            {product.ordersCount}+ pelanggan puas
          </span>
        </div>

        {/* Dual CTA Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-sm py-3.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{product.btnText}</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenModal(product.id)}
            className="w-full inline-flex items-center justify-center gap-1.5 bg-surface-100 hover:bg-surface-200 active:scale-98 text-surface-700 font-bold text-xs py-2.5 px-3 rounded-xl transition-colors"
          >
            <Info className="w-3.5 h-3.5 text-surface-500" />
            <span>Lihat Spesifikasi & Detail</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};
