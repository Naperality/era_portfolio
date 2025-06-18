export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
      <p className="text-lg mb-8 text-center">
        For commissions, collaborations, or general inquiries, feel free to reach out!
      </p>

      <div className="space-y-4 text-center">
        <p className="text-lg">
          📧 Email: <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>
        </p>
        <p className="text-lg">
          📸 Instagram: <a href="https://instagram.com/" className="text-blue-600 hover:underline" target="_blank">instagram.com/yourprofile</a>
        </p>
        <p className="text-lg">
          🎨 ArtStation: <a href="https://artstation.com/" className="text-blue-600 hover:underline" target="_blank">artstation.com/yourprofile</a>
        </p>
        <p className="text-lg">
          📹 YouTube: <a href="https://youtube.com/" className="text-blue-600 hover:underline" target="_blank">youtube.com/yourchannel</a>
        </p>
      </div>
    </div>
  );
}
