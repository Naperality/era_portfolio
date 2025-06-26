"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Particle = {
  x: string;
  y: string;
  duration: number;
  delay: number;
};

export default function Home() {
  const [fading, setFading] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Generate particle data only on client side
    const generatedParticles = Array.from({ length: 50 }, () => ({
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  const handleFadeOut = (path: string) => {
    setFading(true);
    setTimeout(() => {
      router.push(path);
    }, 600);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      {/* Floating Particles */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-full h-full overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full"
              initial={{ x: p.x, y: p.y, opacity: 0 }}
              animate={{ y: "-10%", opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: p.duration,
                delay: p.delay,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Parallax Background Splash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 0 : 0.1 }}
        transition={{ duration: 0.6 }}
        className="absolute z-0 w-72 h-72 sm:w-[28rem] sm:h-[28rem] md:w-[36rem] md:h-[36rem] lg:w-[48rem] lg:h-[48rem] bg-[url('/splash1.png')] bg-no-repeat bg-contain bg-center blur-sm"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-3xl text-center space-y-6 sm:space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 uppercase tracking-wide leading-tight">
          Eirah’s Dreamscape
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-cyan-400 tracking-widest font-mono uppercase">
          Aspiring Technical Artist & Background Illustrator for Game Worlds
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-sans font-medium tracking-wide drop-shadow">
          Journey through <span className="italic text-cyan-300">surreal backgrounds</span>,
          <span className="italic text-indigo-300"> vivid characters</span>, and artistic
          <span className="italic text-blue-300"> timelapse stories</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 sm:mt-6">
          <button
            onClick={() => handleFadeOut("/gallery")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full text-sm sm:text-base md:text-lg shadow-xl hover:from-cyan-600 hover:to-indigo-700 transition duration-300 tracking-wide uppercase"
          >
            🎨 View Portfolio
          </button>

          <button
            onClick={() => handleFadeOut("/contact")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 text-cyan-400 border-2 border-cyan-500 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-cyan-300 font-semibold rounded-full text-sm sm:text-base md:text-lg shadow transition duration-300 uppercase tracking-wide"
          >
            📬 Contact / Hire
          </button>
        </div>

        {/* Resume & Social Links */}
        <div className="mt-6 sm:mt-8 space-y-2">
          <a
            href="/Era-Demeterio_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 border border-cyan-400 text-cyan-300 text-xs sm:text-sm rounded-full tracking-widest hover:bg-white/10 transition"
          >
            📄 View Resume
          </a>
          <div className="flex justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-cyan-300 mt-3">
            <a href="https://artstation.com/yourusername" target="_blank" className="hover:underline">🎨 ArtStation</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:underline">🔗 LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
