const videos = ["/videos/video1.mp4", "/videos/video2.mp4"];

export default function VideosPage() {
  return (
    <div className="space-y-6">
      {videos.map((src, index) => (
        <video key={index} controls className="w-full rounded-2xl shadow">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}
