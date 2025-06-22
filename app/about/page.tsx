"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AboutPage() {
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
        className="max-w-4xl mx-auto relative z-10 space-y-12"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow"
        >
          ← Back to Home
        </button>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-purple-600 font-serif">
          About the Artist
        </h1>

        {/* Bio */}
        <div className="text-lg text-gray-800 space-y-6 leading-relaxed font-light">
          <p>
            Hello! I’m <strong className="font-semibold text-gray-900">Era</strong>, a digital artist who finds joy in painting tranquil landscapes,
            whimsical characters, and the stories they tell. I’m deeply inspired by animated films, cozy games, and the subtle beauty of everyday life.
          </p>

          <p>
            My favorite tools are <strong className="font-medium">Photoshop</strong> and <strong className="font-medium">Clip Studio Paint</strong>.
            I enjoy crafting both dreamy backgrounds and expressive character designs — often blending soft colors, gentle lighting, and layered textures.
          </p>

          <p>
            I hope that my art resonates with you, sparks a feeling, or even inspires a story of your own. Thank you for visiting and supporting my creative journey!
          </p>
        </div>

        {/* Timeline / Highlights */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">
            Highlights & Journey
          </h2>
          <ul className="space-y-3 text-gray-800">
            <li className="flex gap-3">
              <span className="font-semibold text-pink-600">2025</span>
              <span>Graduated "Cum Laude" – BS in Computer Engineering, <strong>University of University of Cebu Main Campus</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-pink-600">2024</span>
              <span>Created a personal portfolio to showcase original art and timelapses</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-pink-600">2018</span>
              <span>Began creating digital illustrations using <strong>Adobe Photoshop</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-pink-600">2017</span>
              <span>Explored <strong>Clip Studio Paint</strong> and started developing a consistent art style</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-10">
          <p className="text-lg text-gray-800 mb-4">
            Interested in working together or commissioning a piece?
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-white text-lg bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 shadow-md transition"
          >
            Let’s Chat →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
