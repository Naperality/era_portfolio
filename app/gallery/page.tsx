'use client'

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { fetchGalleryItems } from "@/lib/fetchGalleryItems";
import {
  Paintbrush,
  Box,
  User,
  Image as ImageIcon,
  Heart,
  Package,
  Shapes,
  Video
} from "lucide-react";


type GalleryItem = {
  id: string;
  title: string;
  category: string;
  mediaType: "image" | "video";
  url: string;
  description?: string;
  publishedAt?: string;
};

const IconTitle = ({
  icon: Icon,
  text,
  color,
}: {
  icon: React.ElementType;
  text: string;
  color: string;
}) => (
  <div className="flex items-center justify-center gap-2">
    <Icon size={28} strokeWidth={2.2} className={color} />
    <span>{text}</span>
  </div>
);

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [fading, setFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchGalleryItems().then(setGallery);
  }, []);

  const groupByCategory = (category: string) =>
    gallery.filter((item) => item.category === category);

  const handleBack = () => {
    setFading(true);
    setTimeout(() => {
      router.push("/");
    }, 600);
  };

  const Section = ({
    id,
    title,
    icon,
    color,
    items,
    type = "image",
  }: {
    id: string;
    title: string;
    icon: React.ElementType;
    color: string;
    items: GalleryItem[];
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
          <h2
            className={`flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wider uppercase ${color}`}
          >
            <IconTitle icon={icon} text={title} color={color} />
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 ${
            type === "image" ? "sm:grid-cols-2 md:grid-cols-3" : "md:grid-cols-2"
          } gap-6`}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`overflow-hidden rounded-xl shadow-lg border ${
                item.mediaType === "image"
                  ? "border-cyan-600"
                  : "border-indigo-600"
              } bg-black/20 backdrop-blur`}
            >
              {item.mediaType === "image" ? (
                <img
                  loading="lazy"
                  src={item.url}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <video
                  controls
                  className="w-full h-full object-contain max-h-[400px] sm:max-h-[500px]"
                >
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="p-4 space-y-1 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-gray-300">{item.description}</p>
                )}
                {item.publishedAt && (
                  <p className="text-xs text-gray-400">
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
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

      {/* 2D Section Divider */}
      <div
        id="2D"
        className="scroll-mt-32 flex items-center justify-center gap-3 text-cyan-400 text-2xl sm:text-3xl md:text-4xl font-bold font-mono uppercase tracking-wider py-6 border-b border-cyan-600 border-opacity-30"
      >
        <Paintbrush
          strokeWidth={2.5}
          className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400"
        />
        2D Digital Art Section
      </div>


      <Section
        id="character"
        title="2D – Character"
        icon={User}
        color="text-cyan-400"
        items={groupByCategory("characterArt")}
      />
      <Section
        id="background"
        title="2D – Background"
        icon={ImageIcon}
        color="text-cyan-400"
        items={groupByCategory("backgroundArt")}
      />
      <Section
        id="fanart"
        title="2D – Fanart"
        icon={Heart}
        color="text-cyan-400"
        items={groupByCategory("fanart")}
      />

      
      {/* 3D Section Divider */}
      <div
        id="3D"
        className="scroll-mt-32 flex items-center justify-center gap-3 text-indigo-400 text-2xl sm:text-3xl md:text-4xl font-bold font-mono uppercase tracking-wider py-6 border-b border-indigo-600 border-opacity-30"
      >
        <Box
          strokeWidth={2.5}
          className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400"
        />
        3D Digital Art Section
      </div>


      <Section
        id="model"
        title="3D – Model"
        icon={Package}
        color="text-indigo-400"
        items={groupByCategory("model3D")}
      />
      <Section
        id="asset"
        title="3D – Asset"
        icon={Shapes}
        color="text-indigo-400"
        items={groupByCategory("asset3D")}
      />
      <Section
        id="timelapse"
        title="Timelapse Videos"
        icon={Video}
        color="text-pink-400"
        type="video"
        items={groupByCategory("timelapseVideos")}
      />
    </section>
  );
}