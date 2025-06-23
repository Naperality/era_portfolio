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
    <section className={`relative min-h-screen px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white ${
      fading ? "animate-fade-out" : "animate-fade-in"
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10 space-y-12"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition font-mono uppercase tracking-wide shadow-lg"
        >
          ← Back to Home
        </button>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-mono uppercase tracking-wider">
          About the Artist
        </h1>

        {/* Bio */}
        <div className="text-base md:text-lg text-gray-300 space-y-6 leading-relaxed font-light">
          <p>
            Hello! I’m <strong className="text-white font-semibold">Era</strong>, a digital artist passionate about crafting tranquil landscapes,
            whimsical characters, and immersive storytelling through visuals. Inspired by animated films, cozy games, and everyday beauty,
            I blend softness and imagination into each piece.
          </p>

          <p>
            My go-to tools are <strong className="text-cyan-300">Photoshop</strong> and <strong className="text-cyan-300">Clip Studio Paint</strong>.
            From serene backgrounds to expressive characters, my workflow involves subtle textures, soft light, and storytelling layers.
          </p>

          <p>
            I hope my art resonates with you, sparks a feeling, or inspires your own worldbuilding journey. Thanks for stopping by and supporting my passion!
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4 mt-10">
          <h2 className="text-2xl font-bold text-cyan-400 border-b border-cyan-700 pb-2 font-mono uppercase">
            Highlights & Journey
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="font-semibold text-cyan-400 font-mono">2025</span>
              <span>
                Graduated <em>“Cum Laude”</em> — BS in Computer Engineering,
                <strong> University of Cebu Main Campus</strong>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-cyan-400 font-mono">2024</span>
              <span>Launched personal portfolio showcasing original art & timelapses</span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-cyan-400 font-mono">2018</span>
              <span>Started digital illustration using <strong>Adobe Photoshop</strong></span>
            </li>
            <li className="flex gap-4">
              <span className="font-semibold text-cyan-400 font-mono">2017</span>
              <span>Explored <strong>Clip Studio Paint</strong> and developed a unique art style</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <p className="text-lg text-gray-300 mb-4">
            Curious about collaborating or requesting a piece?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full text-lg shadow-lg hover:from-cyan-600 hover:to-indigo-700 transition font-mono uppercase tracking-wide"
          >
            Let’s Chat →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
