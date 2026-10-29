import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_PROOF_TOASTS } from '../data/products';
import { CheckCircle2, X } from 'lucide-react';

export const LiveToast: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closedManually, setClosedManually] = useState(false);

  useEffect(() => {
    if (closedManually) return;

    // Show initial toast after 3 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Cycle through toasts every 10 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % SOCIAL_PROOF_TOASTS.length);
        setVisible(true);
      }, 800);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [closedManually]);

  if (closedManually) return null;

  const current = SOCIAL_PROOF_TOASTS[index];

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-4 z-40 max-w-xs pointer-events-none">
      <AnimatePresence>
        {visible && current && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto bg-surface-950/95 backdrop-blur-md text-white border border-white/15 p-3 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
              {current.avatar}
            </div>

            <div className="flex-grow min-w-0 pr-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold truncate text-white">
                  {current.name}
                </span>
                <span className="text-[10px] text-surface-400">({current.location})</span>
              </div>
              <p className="text-[11px] text-emerald-400 font-semibold truncate flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                <span>{current.service}</span>
              </p>
              <span className="text-[10px] text-surface-400">{current.timeAgo}</span>
            </div>

            <button
              onClick={() => setClosedManually(true)}
              className="text-surface-400 hover:text-white p-1"
              aria-label="Tutup Notifikasi"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
