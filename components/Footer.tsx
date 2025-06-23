export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-cyan-600 py-6 mt-12">
      <div className="text-center text-xs sm:text-sm text-cyan-400 font-mono tracking-widest uppercase">
        © {new Date().getFullYear()} Era — All Rights Reserved
      </div>
    </footer>
  );
}
