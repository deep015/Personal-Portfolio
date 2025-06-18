// src/components/SuccessPopup.jsx
import { motion, AnimatePresence } from 'framer-motion';

export default function SuccessPopup({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0, y: -20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
              className="text-2xl font-bold"
            >
              ✓
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
