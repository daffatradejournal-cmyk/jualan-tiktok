import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-12 px-4 max-w-2xl mx-auto border-t border-surface-200/80">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-surface-500 mb-1">
          <HelpCircle className="w-3.5 h-3.5 text-brand-500" /> Tanya Jawab Umum
        </span>
        <h3 className="text-lg sm:text-2xl font-extrabold text-surface-950">
          Pertanyaan yang Sering Diajukan
        </h3>
      </div>

      <div className="space-y-2.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="rounded-2xl border border-surface-200 bg-white overflow-hidden transition-colors shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-3 font-bold text-surface-950 text-xs sm:text-sm hover:bg-surface-50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-4 h-4 text-surface-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-600' : ''}`} />
              </button>

              {isOpen && (
                <div className="p-4 pt-0 text-xs text-surface-600 leading-relaxed border-t border-surface-100 mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
