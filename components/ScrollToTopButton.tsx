// components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-cyan-600 text-white p-2 rounded-full shadow-md hover:bg-cyan-700 transition"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
