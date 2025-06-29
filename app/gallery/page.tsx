/* GalleryPage.tsx*/

'use client';

import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import VideoPlugin from 'yet-another-react-lightbox/plugins/video';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import type { Slide } from 'yet-another-react-lightbox';

import { ReactNode , useEffect, useRef, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import { fetchGalleryItems } from '@/lib/fetchGalleryItems';
import {
  Paintbrush,
  Box,
  User,
  Image as ImageIcon,
  Heart,
  Package,
  Shapes,
  Video
} from 'lucide-react';

import '@/styles/globals.css'; // Ensure this has `.masonry-column` class

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  mediaType: 'image' | 'video';
  url: string;
  description?: string;
  publishedAt?: string;
};

type ExtendedSlide = Slide & {
  alt?: string;
  description?: ReactNode;
  publishedAt?: string;
};

const IconTitle = ({ icon: Icon, text, color }: { icon: React.ElementType; text: string; color: string }) => (
  <div className="flex items-center justify-center gap-2">
    <Icon size={28} strokeWidth={2.2} className={color} />
    <span>{text}</span>
  </div>
);

const GallerySkeleton = () => {
  return (
    <Masonry
      breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
      className="flex gap-6"
      columnClassName="masonry-column"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-black/20 backdrop-blur"
        >
          <div className="w-full h-[250px] bg-gray-800" />
          <div className="p-4 space-y-2">
            <div className="h-4 w-3/4 bg-gray-700 rounded" />
            <div className="h-3 w-5/6 bg-gray-600 rounded" />
            <div className="h-3 w-1/2 bg-gray-500 rounded" />
          </div>
        </div>
      ))}
    </Masonry>
  );
};


export default function GalleryPage() {
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [fading, setFading] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxItems, setLightboxItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchGalleryItems().then((items) => {
      setGallery(items);
      setLoading(false); // <-- set loading to false after data is fetched
    });
  }, []);

  useEffect(() => {
    if (gallery.length > 0) {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [gallery]);

  const handleBack = () => {
    setFading(true);
    setTimeout(() => router.push('/'), 600);
  };

  const openLightbox = (index: number, items: GalleryItem[]) => {
  const formatted = items.map((item) =>
    item.mediaType === 'image'
      ? {
          src: item.url,
          alt: item.title,
          description: item.description,
          publishedAt: item.publishedAt
        }
      : {
          type: 'video',
          width: 1280,
          height: 720,
          poster: '',
          sources: [{ src: item.url, type: 'video/mp4' }],
          description: item.description,
          alt: item.title,
          publishedAt: item.publishedAt
        }
  );
  setLightboxItems(formatted);
  setLightboxIndex(index);
};


  const Section = ({
    id,
    title,
    icon,
    color,
    items
  }: {
    id: string;
    title: string;
    icon: React.ElementType;
    color: string;
    items: GalleryItem[];
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const breakpointColumns = {
      default: 3,
      1024: 2,
      640: 1
    };

    return (
      <motion.section
        ref={ref}
        id={id}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="scroll-mt-32 space-y-6"
      >
        <div className="text-center space-y-2">
          <h2
            className={`flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-wider uppercase ${color}`}
          >
            <IconTitle icon={icon} text={title} color={color} />
          </h2>
        </div>

        {loading ? (
          <GallerySkeleton />
        ) : (
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openLightbox(index, items)}
                className="cursor-zoom-in overflow-hidden rounded-xl shadow-lg border bg-black/20 backdrop-blur border-cyan-600 hover:ring hover:ring-cyan-500/50 transition"
              >
                {item.mediaType === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full object-cover rounded-t-xl"
                  />
                ) : (
                  <video
                    muted
                    playsInline
                    loop
                    src={item.url}
                    className="w-full max-h-[400px] rounded-t-xl object-contain"
                  />
                )}
                <div className="p-3 text-sm text-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  {item.description && <p className="text-gray-400">{item.description}</p>}
                  {item.publishedAt && (
                    <p className="text-xs text-gray-500">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </Masonry>
        )}
      </motion.section>
    );
  };

  const group = (c: string) => gallery.filter((g) => g.category === c);

  return (
    <section
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white space-y-20 transition-opacity duration-500 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <button
        onClick={handleBack}
        className="px-5 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition shadow font-mono uppercase tracking-wide text-sm sm:text-base"
      >
        ← Back to Home
      </button>

      <div id="section-2D" className="scroll-mt-32 flex items-center justify-center gap-3 text-cyan-400 text-3xl md:text-4xl font-bold font-mono uppercase tracking-wider py-6 border-b border-cyan-600/30">
        <Paintbrush strokeWidth={2.5} className="w-10 h-10 text-cyan-400" />
        2D Digital Art Section
      </div>

      <Section id="character" title="2D – Character" icon={User} color="text-cyan-400" items={group('characterArt')} />
      <Section id="background" title="2D – Background" icon={ImageIcon} color="text-cyan-400" items={group('backgroundArt')} />
      <Section id="fanart" title="2D – Fanart" icon={Heart} color="text-cyan-400" items={group('fanart')} />

      <div id="section-3D" className="scroll-mt-32 flex items-center justify-center gap-3 text-indigo-400 text-3xl md:text-4xl font-bold font-mono uppercase tracking-wider py-6 border-b border-indigo-600/30">
        <Box strokeWidth={2.5} className="w-10 h-10 text-indigo-400" />
        3D Digital Art Section
      </div>

      <Section id="model" title="3D – Model" icon={Package} color="text-indigo-400" items={group('model3D')} />
      <Section id="asset" title="3D – Asset" icon={Shapes} color="text-indigo-400" items={group('asset3D')} />
      <Section id="timelapse" title="Timelapse Videos" icon={Video} color="text-pink-400" items={group('timelapseVideos')} />

      <Lightbox
  index={lightboxIndex ?? -1}
  open={lightboxIndex !== null}
  close={() => setLightboxIndex(null)}
  slides={lightboxItems}
  plugins={[VideoPlugin]}
  render={{
  slide: ({ slide, rect }) => {
        const customSlide = slide as ExtendedSlide;
        const isVideo = customSlide.type === 'video';

        return (
          <div className="flex flex-col items-center justify-center p-4 text-white max-w-screen-lg mx-auto">
            <div className="w-full max-w-4xl max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl border border-gray-700 bg-black">
              {isVideo ? (
                <video
                  controls
                  playsInline
                  src={customSlide.sources?.[0]?.src}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={customSlide.src}
                  alt={customSlide.alt}
                  style={{
                    maxHeight: rect.height * 0.8,
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              )}
            </div>

            <div className="mt-6 text-center space-y-2">
              {customSlide.alt && (
                <h3 className="text-2xl font-bold font-mono tracking-wide">{customSlide.alt}</h3>
              )}
              {typeof customSlide.description === 'string' && (
                <p className="text-gray-300 text-sm max-w-xl mx-auto">{customSlide.description}</p>
              )}
              {customSlide.publishedAt && (
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(customSlide.publishedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        );
      }
    }}
/>

    </section>
  );
}
