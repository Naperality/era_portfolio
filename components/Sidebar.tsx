// components/Sidebar.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar panel */}
      <motion.aside
        ref={ref}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-[64px] left-0 h-[calc(100%-64px)] w-64 bg-slate-900 text-white z-[50] p-6 shadow-lg overflow-y-auto"
      >
        <h2 className="text-xl font-semibold mb-6 border-b border-cyan-400 pb-2">Browse</h2>

        <div className="mb-6">
          <p className="text-cyan-400 font-bold mb-2">2D</p>
          <ul className="space-y-1 pl-3">
            <li>
              <Link
                href="/gallery#character"
                onClick={() => {
                  if (window.location.pathname === "/gallery") {
                    sessionStorage.setItem("skipFade", "true");
                  }
                  setIsOpen(false); // still closes the sidebar
                }}
              >Character</Link>
            </li>
            <li>
              <Link 
                href="/gallery#background"
                onClick={() => {
                  if (window.location.pathname === "/gallery") {
                    sessionStorage.setItem("skipFade", "true");
                  }
                  setIsOpen(false); // still closes the sidebar
                }}
              >Background</Link>
            </li>
            <li>
              <Link 
                href="/gallery#fanart"
                onClick={() => {
                  if (window.location.pathname === "/gallery") {
                    sessionStorage.setItem("skipFade", "true");
                  }
                  setIsOpen(false); // still closes the sidebar
                }}
              >Fanart</Link>
            </li>
            <li>
              <Link 
                href="/gallery#sample-commission"
                onClick={() => {
                  if (window.location.pathname === "/gallery") {
                    sessionStorage.setItem("skipFade", "true");
                  }
                  setIsOpen(false); // still closes the sidebar
                }}
              >Sample Commission</Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-cyan-400 font-bold mb-2">3D</p>
          <ul className="space-y-1 pl-3">
            <li>
              <Link 
                href="/gallery#model"
                onClick={() => {
                  if (window.location.pathname === "/gallery") {
                    sessionStorage.setItem("skipFade", "true");
                  }
                  setIsOpen(false); // still closes the sidebar
                }}
              >Model</Link>
            </li>
            <li>
              <Link 
                href="/gallery#asset"
                onClick={() => {
                  if (window.location.pathname === "/gallery") {
                    sessionStorage.setItem("skipFade", "true");
                  }
                  setIsOpen(false); // still closes the sidebar
                }}
              >Asset</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-cyan-400 font-bold mb-2">Timelapse</p>
          <Link 
            href="/gallery#timelapse"
            onClick={() => {
                  if (window.location.pathname === "/gallery") {
                    sessionStorage.setItem("skipFade", "true");
                  }
                  setIsOpen(false); // still closes the sidebar
                }}
          >Watch Videos</Link>
        </div>
      </motion.aside>
    </>
  );
}
