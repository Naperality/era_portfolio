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
    <section
      className={`relative min-h-screen px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 ${
        fading ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: fading ? 0 : 1, y: fading ? -20 : 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto space-y-10"
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-md uppercase tracking-wide font-mono"
        >
          ← Back to Home
        </button>

        {/* Title & Description */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-mono uppercase">
            Contact the Artist
          </h1>
          <p className="text-md md:text-lg text-gray-400 mt-3">
            Got a project, collaboration idea, or job opportunity? Drop a message!
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xgvynwjv"
          method="POST"
          onSubmit={(e) => {
            setTimeout(() => {
              (e.target as HTMLFormElement).reset();
            }, 100);
          }}
          className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-xl border border-indigo-600 shadow-md"
        >
          <div>
            <label className="block mb-1 text-cyan-300 font-mono text-sm uppercase tracking-wide">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 bg-black/40 border border-cyan-600 text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-cyan-300 font-mono text-sm uppercase tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              required
              className="w-full px-4 py-2 bg-black/40 border border-cyan-600 text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-cyan-300 font-mono text-sm uppercase tracking-wide">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows={5}
              required
              className="w-full px-4 py-2 bg-black/40 border border-cyan-600 text-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full hover:from-cyan-600 hover:to-indigo-700 shadow-lg uppercase tracking-wider transition"
          >
            Send Message
          </button>
        </form>

        {/* Direct Email + Socials */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-lg text-gray-300">
            Or email directly:{" "}
            <a href="mailto:eraedevi@gmail.com" className="text-cyan-400 hover:underline">
              eraedevi@gmail.com
            </a>
          </p>

          <div className="flex justify-center gap-6 text-sm font-mono uppercase tracking-wide">
            <a
              href="https://www.artstation.com/"
              target="_blank"
              className="text-indigo-400 hover:text-white transition"
            >
              🎨 ArtStation
            </a>
            <a
              href="https://www.fiverr.com/"
              target="_blank"
              className="text-green-400 hover:text-white transition"
            >
              💼 Fiverr
            </a>
            <a
              href="https://www.upwork.com/freelancers/~010e0438cc66ead4fb?mp_source=share"
              target="_blank"
              className="text-teal-400 hover:text-white transition"
            >
              🌐 Upwork
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
