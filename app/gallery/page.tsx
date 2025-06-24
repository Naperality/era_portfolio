"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const artworks = ["/images/art1.jpg", "/images/art2.jpg", "/images/art3.jpg"];
const videos = ["/videos/video1.mp4", "/videos/video2.mp4"];

export default function GalleryPage() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  return (
    <section
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white space-y-16 ${
        fading ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="px-5 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition shadow font-mono uppercase tracking-wide text-sm sm:text-base"
      >
        ← Back to Home
      </button>

      {/* Artwork Section */}
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wider text-cyan-400 uppercase">
          Artworks
        </h2>
        <p className="text-sm sm:text-base text-gray-400">
          Selected digital illustrations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: fading ? 0 : 1, scale: fading ? 0.95 : 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl shadow-lg border border-cyan-600 bg-black/20 backdrop-blur"
          >
            <img
              src={src}
              alt={`Artwork ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* Video Section */}
      <div className="text-center space-y-3 mt-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wider text-indigo-400 uppercase">
          Timelapse Videos
        </h2>
        <p className="text-sm sm:text-base text-gray-400">
          Watch the creative process in action
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: fading ? 0 : 1, y: fading ? 10 : 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl border border-indigo-600 bg-black/30 backdrop-blur"
          >
            <video
              controls
              className="w-full h-full object-contain max-h-[400px] sm:max-h-[500px]"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
