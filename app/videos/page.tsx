"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const videos = ["/videos/video1.mp4", "/videos/video2.mp4"];

export default function VideosPage() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600); // Match fade duration
  }

  return (
    <div className={`space-y-6 ${fading ? "animate-fade-out" : "animate-fade-in"}`}>
      <button
        onClick={handleBack}
        className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
      >
        ← Back to Home
      </button>
      
      {videos.map((src, index) => (
        <video key={index} controls className="w-full rounded-2xl shadow">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}
