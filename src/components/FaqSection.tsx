import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-surface-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
            <HelpCircle className="w-3 h-3 text-brand-500" /> Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-950 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xs sm:text-sm text-surface-600 mt-2">
            Temukan jawaban cepat seputar keaslian berkas, panduan instalasi, dan teknis pengerjaan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-surface-200 overflow-hidden bg-surface-50/60 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-surface-950 text-sm sm:text-base hover:bg-surface-100/60 transition-colors"
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-surface-400"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-surface-600 leading-relaxed border-t border-surface-200/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
