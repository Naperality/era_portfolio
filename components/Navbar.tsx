import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-pink-600">Era Art</Link>
        <div className="space-x-4">
          <Link href="/gallery" className="hover:text-pink-600">Gallery</Link>
          <Link href="/videos" className="hover:text-pink-600">Videos</Link>
        </div>
      </div>
    </nav>
  );
}
