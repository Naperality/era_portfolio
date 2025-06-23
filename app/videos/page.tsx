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
    "Custom Character Illustration",
    "Twitch / VTuber Assets",
    "Web Banners / Book Covers",
    "Background Art for Games",
  ];

  return (
    <section
      className={`relative min-h-screen px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white ${
        fading ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-10 relative z-10"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition font-mono uppercase tracking-wide shadow-lg"
        >
          ← Back to Home
        </button>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-mono uppercase tracking-wider">
          Services Offered
        </h2>

        {/* Description */}
        <p className="text-center text-base md:text-lg text-gray-300 font-light max-w-3xl mx-auto">
          Whether you're building a brand, crafting a game world, or publishing your passion — Eirah offers tailored illustrations that blend storytelling and design.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: fading ? 0 : 1, y: fading ? 10 : 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 rounded-xl border border-cyan-600 bg-black/30 backdrop-blur-md shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-cyan-300 font-mono">
                {service}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {/* Optional short description here */}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full text-lg shadow-lg hover:from-cyan-600 hover:to-indigo-700 transition font-mono uppercase tracking-wide"
          >
            Request a Commission
          </a>
        </div>
      </motion.div>
    </section>
  );
}
