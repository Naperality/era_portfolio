const artworks = ["/images/art1.jpg", "/images/art2.jpg", "/images/art3.jpg"];

export default function GalleryPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {artworks.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
          <img
            src={src}
            alt={`Artwork ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
