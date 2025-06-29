"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  const sectionIds = [
    "2D", "character", "background", "fanart",
    "3D", "model", "asset", "timelapse"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-50% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1]
      }
    );

    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleLinkClick = () => {
    if (pathname === "/gallery") {
      sessionStorage.setItem("skipFade", "true");
    }
    setIsOpen(false);
  };

  const linkStyle = (hash: string, extra = "") =>
    `block px-3 py-2 rounded transition text-sm sm:text-base ${
      activeHash === hash
        ? "bg-cyan-600 text-white font-bold"
        : "hover:bg-cyan-800/30"
    } ${extra}`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.aside
        ref={ref}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-[64px] left-0 h-[calc(100%-64px)] w-64 sm:w-72 bg-slate-900 text-white z-[50] p-4 sm:p-6 shadow-lg overflow-y-auto text-sm sm:text-base"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-5 border-b border-cyan-400 pb-2">Browse</h2>

        {/* 2D Section */}
        <div className="mb-6">
          <Link
            href="/gallery#section-2D"
            onClick={handleLinkClick}
            className={linkStyle("#2D", "text-cyan-400 text-base font-semibold")}
          >
            2D
          </Link>
          <ul className="space-y-1 pl-3 mt-2">
            <li>
              <Link href="/gallery#character" onClick={handleLinkClick} className={linkStyle("#character")}>Character</Link>
            </li>
            <li>
              <Link href="/gallery#background" onClick={handleLinkClick} className={linkStyle("#background")}>Background</Link>
            </li>
            <li>
              <Link href="/gallery#fanart" onClick={handleLinkClick} className={linkStyle("#fanart")}>Fanart</Link>
            </li>
          </ul>
        </div>

        {/* 3D Section */}
        <div className="mb-6">
          <Link
            href="/gallery#section-3D"
            onClick={handleLinkClick}
            className={linkStyle("#3D", "text-cyan-400 text-base font-semibold")}
          >
            3D
          </Link>
          <ul className="space-y-1 pl-3 mt-2">
            <li>
              <Link href="/gallery#model" onClick={handleLinkClick} className={linkStyle("#model")}>Model</Link>
            </li>
            <li>
              <Link href="/gallery#asset" onClick={handleLinkClick} className={linkStyle("#asset")}>Asset</Link>
            </li>
          </ul>
        </div>

        {/* Timelapse Section */}
        <div>
          <Link
            href="/gallery#timelapse"
            onClick={handleLinkClick}
            className={linkStyle("#timelapse", "text-cyan-400 text-base font-semibold")}
          >
            Timelapse
          </Link>
        </div>
      </motion.aside>
    </>
  );
}
