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
    }, 600); // Match fade duration
  };
return (
    <div className={`space-y-6 ${fading ? "animate-fade-out" : "animate-fade-in"}`}>
      <button
        onClick={handleBack}
        className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
      >
        ← Back to Home
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Artwork ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: fading ? 0 : 1, scale: fading ? 0.95 : 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-white/70 backdrop-blur-sm"
            >
              <video controls className="w-full h-full">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>
    </div>
  );
}