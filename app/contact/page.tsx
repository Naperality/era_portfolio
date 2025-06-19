"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600); // Match fade duration
  }

  return (
    <div className={`max-w-2xl mx-auto px-4 py-16 ${fading ? "animate-fade-out" : "animate-fade-in"}`}>
      <button
        onClick={handleBack}
        className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
      >
        ← Back to Home
      </button>

      <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
      <p className="text-lg mb-8 text-center">
        For commissions, collaborations, or general inquiries, feel free to reach out!
      </p>

      <div className="space-y-4 text-center">
        <p className="text-lg">
          📧 Email: <a href="mailto:eraedevi@gmail.com" className="text-blue-600 hover:underline">eraedevi@gmail.com</a>
        </p>
        <p className="text-lg">
          📱 Phone:{" "}
          <a href="tel:09618163997" className="text-blue-600 hover:underline">
            0961 816 3997
          </a>
        </p>
        {/* <p className="text-lg">
          📸 Instagram: <a href="https://instagram.com/" className="text-blue-600 hover:underline" target="_blank">instagram.com/yourprofile</a>
        </p>
        <p className="text-lg">
          🎨 ArtStation: <a href="https://artstation.com/" className="text-blue-600 hover:underline" target="_blank">artstation.com/yourprofile</a>
        </p>
        <p className="text-lg">
          📹 YouTube: <a href="https://youtube.com/" className="text-blue-600 hover:underline" target="_blank">youtube.com/yourchannel</a>
        </p> */}
      </div>
    </div>
  );
}
