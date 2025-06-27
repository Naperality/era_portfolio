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
import Sidebar from "./Sidebar";
import AnimatedBurger from "./AnimatedBurger";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  const links = [
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/services", label: "Services", icon: BriefcaseIcon },
    { href: "/about", label: "About", icon: UserIcon },
    { href: "/contact", label: "Contact", icon: MailIcon },
  ];

  // Detect overflow to show scroll arrows
  useEffect(() => {
    const checkOverflow = () => {
      if (!scrollRef.current) return;
      const isOverflowing =
        scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
      const isMobile = window.innerWidth < 768;
      setShowArrows(isOverflowing && isMobile);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Center the active link on mount and route change
  useEffect(() => {
    const activeLink = scrollRef.current?.querySelector('[data-active="true"]');
    if (activeLink && scrollRef.current) {
      const container = scrollRef.current;
      const linkRect = (activeLink as HTMLElement).getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const offset =
        linkRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        linkRect.width / 2;

      container.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 100;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleToggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-cyan-600 shadow-md z-[60] py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-3">
            <AnimatedBurger
              key={isOpen.toString()}
              isOpen={isOpen}
              toggle={handleToggleSidebar}
            />
            <Link
              href="/"
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide uppercase text-cyan-400 font-mono whitespace-nowrap hover:text-white transition inline-flex items-center gap-1"
            >
              <BrushIcon className="w-5 h-5" />
              Eirah Art
            </Link>
          </div>

          {/* Right: Scrollable Links + Arrows */}
          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            {showArrows && (
              <button
                onClick={() => scroll("left")}
                className="p-1 text-cyan-300 hover:text-white transition shrink-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex gap-2 sm:gap-4 overflow-x-auto scroll-smooth scrollbar-hide whitespace-nowrap shrink min-w-0"
              style={{ maxWidth: "calc(100vw - 200px)" }}
            >
              {links.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    data-active={isActive}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-md transition ${
                      isActive
                        ? "text-white bg-cyan-600/80"
                        : "text-cyan-300 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{label}</span>
                  </Link>
                );
              })}
            </div>

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

      {/* Sidebar (controlled by isOpen) */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
