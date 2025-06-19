"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleFadeOut = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/gallery");
    }, 600); // match fade-out duration
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-pink-100 via-white to-white">
      <div
        className={`max-w-4xl w-full px-4 sm:px-8 space-y-6 mx-auto ${
          fading ? "animate-fade-out" : "animate-fade-in"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Welcome to <span className="text-pink-600">Era's Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Dive into a dreamy world of background illustrations, character designs, and
          creative timelapse videos crafted with heart and imagination.
        </p>
        <button
          onClick={handleFadeOut}
          className="inline-block px-6 py-3 mt-4 text-white bg-pink-600 hover:bg-pink-700 rounded-full text-lg transition"
        >
          View Portfolio
        </button>
      </div>
    </section>
  );
}
