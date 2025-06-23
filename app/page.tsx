"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleFadeOut = (path: string) => {
    setFading(true);
    setTimeout(() => {
      router.push(path);
    }, 600);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Top Brush */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 0 : 0.2 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[url('/brush.png')] bg-no-repeat bg-contain filter brightness-125 contrast-150 rotate-12"
      />

      {/* Bottom Brush */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 0 : 0.2 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[url('/brush.png')] bg-no-repeat bg-contain filter brightness-125 contrast-150 -rotate-180"
      />

      {/* Splash Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 0 : 0.1 }}
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
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 uppercase tracking-wider">
          Eirah’s Dreamscape
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-sans font-medium tracking-wide drop-shadow">
          Journey through <span className="italic text-cyan-300">surreal backgrounds</span>, 
          <span className="italic text-indigo-300"> vivid characters</span>, and artistic{" "}
          <span className="italic text-blue-300">timelapse stories</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button
            onClick={() => handleFadeOut("/gallery")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full text-lg shadow-xl hover:from-cyan-600 hover:to-indigo-700 transition duration-300 tracking-wide uppercase"
          >
            🎨 View Portfolio
          </button>

          <button
            onClick={() => handleFadeOut("/contact")}
            className="px-8 py-3 text-cyan-400 border-2 border-cyan-500 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-cyan-300 font-semibold rounded-full text-lg shadow transition duration-300 uppercase tracking-wide"
          >
            💌 Contact / Hire
          </button>
        </div>
      </motion.div>
    </section>
  );
}
