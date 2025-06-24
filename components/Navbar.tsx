"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ImageIcon,
  BriefcaseIcon,
  UserIcon,
  MailIcon,
  BrushIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  const links = [
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/services", label: "Services", icon: BriefcaseIcon },
    { href: "/about", label: "About", icon: UserIcon },
    { href: "/contact", label: "Contact", icon: MailIcon },
  ];

  // Check if nav is overflowing on smaller screens
  useEffect(() => {
    const checkOverflow = () => {
      if (!scrollRef.current) return;
      const isOverflowing =
        scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
      const isMobile = window.innerWidth < 768; // Only check on mobile
      setShowArrows(isOverflowing && isMobile);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 120;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-cyan-600 shadow-md z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-widest uppercase text-cyan-400 font-mono whitespace-nowrap hover:text-white transition"
        >
          <span className="inline-flex items-center gap-1">
            <BrushIcon className="w-5 h-5" />
            Eirah Art
          </span>
        </Link>

        {/* Nav Links + Optional Arrows */}
        <div className="flex items-center gap-1 sm:gap-2 ml-2 min-w-0">
          {/* Left Arrow */}
          {showArrows && (
            <button
              onClick={() => scroll("left")}
              className="p-1 text-cyan-300 hover:text-white transition shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable Links */}
          <div
            ref={scrollRef}
            className="flex gap-2 sm:gap-4 overflow-x-auto scroll-smooth scrollbar-hide whitespace-nowrap shrink min-w-0"
            style={{
              maxWidth: "calc(100vw - 120px)", // Leaves room for arrows on tiny screens
            }}
          >
            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-md transition ${
                    isActive
                      ? "text-white bg-cyan-600/80"
                      : "text-cyan-300 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right Arrow */}
          {showArrows && (
            <button
              onClick={() => scroll("right")}
              className="p-1 text-cyan-300 hover:text-white transition shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
