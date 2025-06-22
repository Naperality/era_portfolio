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

  return (
    <section className="relative min-h-screen px-6 py-12 bg-transparent overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-10 relative z-10"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow-lg"
        >
          ← Back to Home
        </button>

        {/* Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 font-serif">
          Services Offered
        </h2>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-gray-800 font-light max-w-3xl mx-auto">
          Whether you're building a brand, designing a world, or publishing your passion — Eirah offers custom illustration services to help bring your vision to life.
        </p>

        {/* Service List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Custom Character Illustration",
            "Twitch / VTuber Assets",
            "Web Banners / Book Covers",
            "Background Art for Games",
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: fading ? 0 : 1, y: fading ? 10 : 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-md border border-white/40"
            >
              <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
              <p className="text-sm text-gray-700 mt-2">
                {/* Optional brief description for each */}
                {/* Add specific notes per service here if desired */}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-white text-lg bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 shadow-md transition"
          >
            Request a Commission
          </a>
        </div>
      </motion.div>
    </section>
  );
}
