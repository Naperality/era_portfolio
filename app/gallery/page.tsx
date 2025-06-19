"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const artworks = ["/images/art1.jpg", "/images/art2.jpg", "/images/art3.jpg"];

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
    </div>
  );
}