"use client";

import { motion } from "framer-motion";

interface AnimatedBurgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function AnimatedBurger({ isOpen, toggle }: AnimatedBurgerProps) {
  const lineProps = "h-[2px] w-6 bg-cyan-400 rounded origin-center transition-all";

  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center gap-[6px] w-10 h-10 group"
      aria-label="Toggle menu"
    >
      <motion.span
        className={lineProps}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={lineProps}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className={lineProps}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}
