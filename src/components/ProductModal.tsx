import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { X, MessageCircle, ShieldCheck, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
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

  const handleWaOrder = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#25D366', '#38bdf8', '#10b981']
    });
  };

  const isWps = product?.id === 'wps';
  const gallery = product?.gallery || [];
  const waLink = product
    ? `https://wa.me/${product.waNumber.replace(/^0/, '62')}?text=${encodeURIComponent(product.waMessage)}`
    : '#';

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
          {/* Backdrop Blur with Smooth Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-surface-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Sheet with Tactile Spring Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, y: '100%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: '100%', scale: 0.95 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-white rounded-t-[32px] sm:rounded-3xl shadow-2xl border border-surface-200 z-10 max-h-[92vh] flex flex-col overflow-hidden"
          >
            {/* Sticky Header Bar with Close Button */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-white/95 backdrop-blur-md border-b border-surface-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-surface-900 uppercase tracking-wider">
                  Detail Layanan & Galeri Foto
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-surface-100 hover:bg-surface-200 active:scale-90 text-surface-700 flex items-center justify-center transition-all shadow-sm"
                aria-label="Tutup Jendela"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* UNIFIED SCROLL CONTAINER (Everything scrolls together naturally!) */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* Product Info Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {product.category}
                  </span>
                  <span className="bg-red-500 text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                    {product.discountBadge}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-surface-950 tracking-tight leading-snug">
                  {product.title}
                </h2>

                <p className="text-xs sm:text-sm text-surface-600 leading-relaxed">
                  {product.desc}
                </p>

                {/* Price Box */}
                <div className="p-3.5 bg-surface-50 rounded-2xl border border-surface-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-surface-500 font-semibold block leading-none mb-1">
                      Biaya Layanan:
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-surface-950 font-display">
                        {product.price}
                      </span>
                      <span className="text-xs sm:text-sm text-surface-400 line-through font-semibold">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                    Hemat {product.saveAmount}
                  </span>
                </div>

                {/* Top WhatsApp Order Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWaOrder}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-sm py-3.5 px-4 rounded-2xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{product.btnText}</span>
                </a>
              </div>

              {/* FOTO-FOTO SPESIFIKASI BERJEJER KE BAWAH (SATU FOTO SATU JUDUL DIATASNYA) */}
              <div className="space-y-6 pt-2 border-t border-surface-200/80">
                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-base font-extrabold text-surface-950 uppercase tracking-wider flex items-center gap-2 justify-center sm:justify-start">
                    <span>📸</span>
                    <span>Galeri Bukti & Tampilan Layar:</span>
                  </h3>
                  <p className="text-xs text-surface-500 mt-0.5">
                    Geser ke bawah untuk melihat detail seluruh foto spesifikasi.
                  </p>
                </div>

                {/* If WPS: Stack all gallery screenshots vertically one below another */}
                {isWps && gallery.length > 0 ? (
                  <div className="space-y-6">
                    {gallery.map((item, idx) => (
                      <div 
                        key={item.id} 
                        className="rounded-2xl border border-surface-200 bg-surface-50 overflow-hidden shadow-sm"
                      >
                        {/* Judul di atas foto */}
                        <div className="p-3 sm:p-4 bg-white border-b border-surface-200/80 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-surface-950 text-white font-display text-xs font-bold flex items-center justify-center flex-shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-surface-950">
                              {item.title}
                            </h4>
                          </div>
                          <span className="text-[10px] font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-full flex-shrink-0">
                            {item.badge}
                          </span>
                        </div>

                        {/* Foto Jelas & Penuh (Bisa discroll dan tidak terpotong) */}
                        <div className="w-full aspect-[4/3] bg-surface-950 flex items-center justify-center p-2 sm:p-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>

                        {/* Penjelasan Ringkas di bawah foto */}
                        <div className="p-3 sm:p-4 bg-white text-xs text-surface-600 leading-relaxed border-t border-surface-200/60">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* If NPWP: Show NPWP Cover Photo with detailed title and description */
                  <div className="rounded-2xl border border-surface-200 bg-surface-50 overflow-hidden shadow-sm">
                    {/* Judul di atas foto */}
                    <div className="p-3 sm:p-4 bg-white border-b border-surface-200/80 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-display text-xs font-bold flex items-center justify-center flex-shrink-0">
                          1
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-surface-950">
                          Contoh Fisik Kartu NPWP Resmi (Ditjen Pajak RI)
                        </h4>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex-shrink-0">
                        Sah DJP
                      </span>
                    </div>

                    {/* Foto Kartu NPWP */}
                    <div className="w-full aspect-[4/3] bg-surface-900 flex items-center justify-center p-2 sm:p-3">
                      <img
                        src={product.coverImage}
                        alt="Foto Kartu NPWP Resmi"
                        className="max-h-full max-w-full object-contain rounded-xl"
                        loading="lazy"
                      />
                    </div>

                    {/* Penjelasan Ringkas */}
                    <div className="p-3 sm:p-4 bg-white text-xs text-surface-600 leading-relaxed border-t border-surface-200/60 space-y-1">
                      <p>
                        <strong>Catatan Layanan:</strong> Output yang Anda dapatkan adalah <strong>File Kartu NPWP Elektronik Digital & SKT (Surat Keterangan Terdaftar) format PDF asli resmi beresolusi tinggi</strong>.
                      </p>
                      <p className="text-surface-500 text-[11px]">
                        Berkas PDF resmi ini sah 100% dan langsung valid digunakan untuk melamar kerja, buka tabungan bank, KPR, atau dicetak mandiri jika diperlukan.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Rincian Yang Didapatkan & Spesifikasi */}
              <div className="pt-4 border-t border-surface-200/80 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-surface-950 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Yang Anda Dapatkan & Spesifikasi:
                </h4>
                <div className="space-y-2">
                  {product.specs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs p-2.5 rounded-xl bg-surface-50 border border-surface-200/70">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-surface-950">{item.label}:</strong>{' '}
                        <span className="text-surface-600">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom WhatsApp Order Action */}
              <div className="pt-4 pb-2 border-t border-surface-200/80">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWaOrder}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{product.btnText}</span>
                </a>
                <p className="text-center text-[11px] text-surface-500 mt-2">
                  🔒 Chat langsung dengan admin. Respon cepat tanpa bot.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
