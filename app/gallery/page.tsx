'use client'

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";

const characterArt = ["/images/art1.jpg"];
const backgroundArt = ["/images/art2.jpg"];
const fanart = ["/images/art3.jpg"];
const sampleCommissions = ["/images/art1.jpg", "/images/art2.jpg"];
const model3D = ["/images/art3.jpg"];
const asset3D = ["/images/art2.jpg"];
const timelapseVideos = ["/videos/video1.mp4", "/videos/video2.mp4"];

export default function GalleryPage() {
  const [fading, setFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScrollToHash = () => {
      const hash = window.location.hash;

      if (sessionStorage.getItem("skipFade") === "true") {
        sessionStorage.removeItem("skipFade");
        setFading(false);
      }

      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    checkScrollToHash();
    window.addEventListener("hashchange", checkScrollToHash);
    return () => window.removeEventListener("hashchange", checkScrollToHash);
  }, []);

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  const Section = ({
    id,
    title,
    color,
    items,
    type = "image",
  }: {
    id: string;
    title: string;
    color: string;
    items: string[];
    type?: "image" | "video";
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.section
        ref={ref}
        id={id}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="scroll-mt-32 space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wider uppercase ${color}`}>
            {title}
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 ${
            type === "image" ? "sm:grid-cols-2 md:grid-cols-3" : "md:grid-cols-2"
          } gap-6`}
        >
          {items.map((src, index) =>
            type === "image" ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-lg border border-cyan-600 bg-black/20 backdrop-blur"
              >
                <img
                  loading="lazy"
                  src={src}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
            )
          )}
        </div>
      </motion.section>
    );
  };

  return (
    <section
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white space-y-20 transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <button
        onClick={handleBack}
        className="px-5 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition shadow font-mono uppercase tracking-wide text-sm sm:text-base"
      >
        ← Back to Home
      </button>

      <Section id="character" title="2D – Character" color="text-cyan-400" items={characterArt} />
      <Section id="background" title="2D – Background" color="text-cyan-400" items={backgroundArt} />
      <Section id="fanart" title="2D – Fanart" color="text-cyan-400" items={fanart} />
      <Section id="sample-commission" title="2D – Sample Commission" color="text-cyan-400" items={sampleCommissions} />
      <Section id="model" title="3D – Model" color="text-indigo-400" items={model3D} />
      <Section id="asset" title="3D – Asset" color="text-indigo-400" items={asset3D} />
      <Section id="timelapse" title="Timelapse Videos" color="text-pink-400" items={timelapseVideos} type="video" />
    </section>
  );
}
