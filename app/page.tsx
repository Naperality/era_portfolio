"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleFadeOut = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/gallery");
    }, 600);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-transparent">
      {/* Artistic background brush strokes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[url('/brush-stroke1.svg')] bg-no-repeat bg-contain opacity-20 rotate-12" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('/brush-stroke2.svg')] bg-no-repeat bg-contain opacity-20 -rotate-12" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-3xl w-full text-center space-y-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 font-serif">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-red-400 to-purple-600">
            Eirah’s Dreamscape
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light">
          Explore a canvas of dreamy <span className="italic">backgrounds</span>, enchanting{" "}
          <span className="italic">characters</span>, and soulful{" "}
          <span className="italic">timelapses</span> — all brushed with imagination.
        </p>
        <button
          onClick={handleFadeOut}
          className="px-8 py-3 mt-6 text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full text-lg shadow-lg transition duration-300"
        >
          Enter Gallery
        </button>
      </motion.div>
    </section>
  );
}
