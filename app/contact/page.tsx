"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  return (
    <section className={`relative min-h-screen px-6 py-16 ${fading ? "animate-fade-out" : "animate-fade-in"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto space-y-10"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow"
        >
          ← Back to Home
        </button>

        {/* Title & Description */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 font-serif">
            Let’s Connect
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            For commissions, collaborations, or just to say hi — send a message below.
          </p>
        </div>

        

        {/* Direct Email + Socials */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-lg text-gray-800">
            Or email directly:{" "}
            <a href="mailto:eraedevi@gmail.com" className="text-blue-600 hover:underline">
              eraedevi@gmail.com
            </a>
          </p>

          <div className="flex justify-center gap-6 text-lg">
            <a href="https://www.artstation.com/" target="_blank" className="text-blue-700 hover:underline">
              🎨 ArtStation
            </a>
            <a href="https://www.fiverr.com/" target="_blank" className="text-green-600 hover:underline">
              💼 Fiverr
            </a>
            <a href="https://www.upwork.com/" target="_blank" className="text-emerald-600 hover:underline">
              🌐 Upwork
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
