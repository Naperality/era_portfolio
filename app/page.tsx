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
  const handleFadeOut1 = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/contact");
    }, 600);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-transparent">
      {/* Top Brush */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: fading ? 0 : 0.3 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[url('/brush.png')] bg-no-repeat bg-contain filter brightness-150 contrast-200 rotate-12"
    />
      
      {/* Bottom Brush */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 0 : 0.3 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[url('/brush.png')] bg-no-repeat bg-contain filter brightness-150 contrast-200 -rotate-180"
      />
      
      {/* Splash Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 0 : 0.2 }}
        transition={{ duration: 0.6 }}
        className="absolute z-0 w-[36rem] h-[36rem] sm:w-[48rem] sm:h-[48rem] md:w-[64rem] md:h-[64rem] bg-[url('/splash1.png')] bg-no-repeat bg-contain bg-center blur-sm"
      />

      {/* Main Content */}
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
        <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto font-sans font-medium tracking-wide drop-shadow-sm">
          Explore a canvas of dreamy <span className="italic">backgrounds</span>, enchanting{" "}
          <span className="italic">characters</span>, and soulful{" "}
          <span className="italic">timelapses</span> — all brushed with imagination.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button
            onClick={handleFadeOut}
            className="px-8 py-3 text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full text-lg shadow-lg transition duration-300"
          >
            View My Works
          </button>

          <button
            onClick={handleFadeOut1}
            className="px-8 py-3 text-pink-600 border-2 border-pink-500 bg-white/40 backdrop-blur-md hover:bg-white/60 hover:text-pink-700 font-semibold rounded-full text-lg shadow transition duration-300"
          >
            💌 Hire Me!
          </button>
        </div>
      </motion.div>
    </section>
  );
}
