"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600); // Match fade duration
  }
  return (
    <div className={`max-w-3xl mx-auto px-4 py-16 ${fading ? "animate-fade-out" : "animate-fade-in"}`}>
      <button
        onClick={handleBack}
        className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
      >
        ← Back to Home
      </button>
      
      <h1 className="text-4xl font-bold mb-6 text-center">About the Artist</h1>
      <p className="text-lg leading-relaxed mb-4">
        Hi! I'm <strong>Era</strong>, a digital artist passionate about creating atmospheric backgrounds and expressive character designs. 
        My work is heavily inspired by animated films, video games, and the beauty of everyday life.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        I primarily use <strong>Photoshop</strong> and <strong>Clip Studio Paint</strong> to bring my ideas to life. Whether it's tranquil scenery 
        or dynamic storytelling illustrations, I aim to evoke emotion and imagination through my art.
      </p>
      <p className="text-lg leading-relaxed">
        Thank you for visiting my portfolio. I hope you enjoy exploring my work as much as I enjoy creating it!
      </p>
    </div>
  );
}
