"use client";

import { MailIcon, ArrowUpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black/50 backdrop-blur-md border-t border-cyan-600 mt-16 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 text-center md:text-left text-cyan-300 text-sm font-mono tracking-widest md:flex-row md:items-center md:justify-between">
        
        {/* Left: Contact + Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <MailIcon className="w-4 h-4" />
            <a href="mailto:eraedevi@gmail.com" className="hover:underline">
              eraedevi@gmail.com
            </a>
          </div>
          <span className="hidden md:inline text-cyan-500">|</span>
          <span className="text-xs sm:text-sm text-cyan-500">
            © {new Date().getFullYear()} Era — All Rights Reserved
          </span>
        </div>

        {/* Right: Back to Top with icon animation */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 justify-center hover:text-white transition"
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowUpCircle className="w-4 h-4" />
          </motion.span>
          Back to Top
        </button>
      </div>
    </footer>
  );
}
