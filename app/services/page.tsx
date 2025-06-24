"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  const services = [
    {
      title: "Custom Character Illustration",
      icon: "🧙‍♀️",
    },
    {
      title: "Twitch / VTuber Assets",
      icon: "🎥",
    },
    {
      title: "Web Banners / Book Covers",
      icon: "📘",
    },
    {
      title: "Background Art for Games",
      icon: "🌆",
    },
  ];

  return (
    <section
      className={`relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white ${
        fading ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      {/* Optional: Floating Particles */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-full h-full overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                y: "-10%",
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 6 + 4,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto space-y-12"
      >
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition font-mono uppercase tracking-wide shadow-lg text-sm sm:text-base"
        >
          ← Back to Home
        </button>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-mono uppercase tracking-wider">
          Services Offered
        </h2>

        {/* Description */}
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto">
          Whether you're building a brand, crafting a game world, or publishing your passion — Eirah delivers custom illustrations that blend storytelling, atmosphere, and visual charm.
        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: fading ? 0 : 1, y: fading ? 10 : 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 rounded-xl border border-cyan-600 bg-white/5 backdrop-blur-md shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 font-mono flex items-center gap-2">
                <span className="text-2xl">{service.icon}</span> {service.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {/* Add short description per service here if needed */}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8 sm:pt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full text-sm sm:text-base md:text-lg shadow-lg hover:from-cyan-600 hover:to-indigo-700 transition font-mono uppercase tracking-wide"
          >
            💌 Request a Commission
          </a>
        </div>
      </motion.div>
    </section>
  );
}
