"use client";
// app/gallery/page.tsx (server component)
import { fetchGalleryItems, type GalleryItem } from "@/lib/fetchGallery";

// ONLY import what you need — no wildcard exports!
import { motion } from "framer-motion";

function groupByCategory(items: GalleryItem[]) {
  const groups: { [category: string]: GalleryItem[] } = {};
  for (const item of items) {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
  }
  return groups;
}

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
  items: GalleryItem[];
  type?: "image" | "video";
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="scroll-mt-32 space-y-6"
    >
      <div className="text-center space-y-2">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wider uppercase ${color}`}
        >
          {title}
        </h2>
      </div>

      <div className={`grid grid-cols-1 ${type === "image" ? "sm:grid-cols-2 md:grid-cols-3" : "md:grid-cols-2"} gap-6`}>
        {items.map((item, index) =>
          item.isVideo ? (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-xl border border-indigo-600 bg-black/30 backdrop-blur"
            >
              <video controls className="w-full h-full object-contain max-h-[400px] sm:max-h-[500px]">
                <source src={item.media.asset.url} type="video/mp4" />
              </video>
            </motion.div>
          ) : (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-lg border border-cyan-600 bg-black/20 backdrop-blur"
            >
              <img
                loading="lazy"
                src={item.media.asset.url}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          )
        )}
      </div>
    </motion.section>
  );
};

export default async function GalleryPage() {
  const items = await fetchGalleryItems();
  const grouped = groupByCategory(items);

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white space-y-20">
      <Section id="character" title="2D – Character" color="text-cyan-400" items={grouped.character || []} />
      <Section id="background" title="2D – Background" color="text-cyan-400" items={grouped.background || []} />
      <Section id="fanart" title="2D – Fanart" color="text-cyan-400" items={grouped.fanart || []} />
      <Section id="sample-commission" title="2D – Sample Commission" color="text-cyan-400" items={grouped.sampleCommission || []} />
      <Section id="model" title="3D – Model" color="text-indigo-400" items={grouped.model3D || []} />
      <Section id="asset" title="3D – Asset" color="text-indigo-400" items={grouped.asset3D || []} />
      <Section id="timelapse" title="Timelapse Videos" color="text-pink-400" items={grouped.timelapseVideo || []} type="video" />
    </section>
  );
}
