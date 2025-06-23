import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-cyan-600 shadow-md z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl md:text-2xl font-extrabold tracking-widest uppercase text-cyan-400 font-mono hover:text-white transition"
        >
          Eirah Art
        </Link>
        <div className="space-x-4 text-sm sm:text-base font-mono uppercase tracking-wider text-cyan-300">
          <Link href="/gallery" className="hover:text-white transition">
            Gallery
          </Link>
          <Link href="/videos" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
