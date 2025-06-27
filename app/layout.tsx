import "@/styles/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata = {
  title: "Eirah Art",
  description: "A collection of background illustrations and character designs by Era.",
  keywords: ["Era", "portfolio", "background artist", "character design", "digital art", "Eirah Art", "Eirah Art Portfolio"],
  authors: [{ name: "Era" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", rel: "apple-touch-icon" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Eirah Art",
    description: "Explore beautiful background illustrations and original character designs.",
    url: "https://eirah-gallery.vercel.app/",
    siteName: "Era Portfolio",
    images: [
      {
        url: "https://eirah-gallery.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Era's Artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eirah Art",
    description: "Explore beautiful background illustrations and original character designs.",
    images: ["https://eirah-gallery.vercel.app/og-image.png"],
    creator: "@yourTwitter",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 font-sans flex flex-col min-h-screen selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <main className="flex-grow w-full pt-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            {children}
          </div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
