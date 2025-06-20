import "@/styles/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Eirah Art",
  description: "A collection of background illustrations and character designs by Era.",
  keywords: ["Era", "portfolio", "background artist", "character design", "digital art", "Eirah Art", "Eirah Art Portofolio"],
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
    title: "Era Art Portfolio",
    description: "Explore beautiful background illustrations and original character designs.",
    url: "https://era-portfolio-sigma.vercel.app/",
    siteName: "Era Portfolio",
    images: [
      {
        url: "/og-image.png",
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
    title: "Era Art Portfolio",
    description: "Explore beautiful background illustrations and original character designs.",
    images: ["/og-image.png"],
    creator: "@yourTwitter",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 pt-24 pb-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
