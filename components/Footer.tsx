export default function Footer() {
  return (
    <footer className="bg-white mt-12 py-6 shadow-inner">
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Era. All rights reserved.
      </div>
    </footer>
  );
}
