import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ClientBody from "../components/ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blobtoken.com'),
  title: "$BLOB Token - Blob Has Awakened",
  description: "Born from memes. Built for traders. Advanced trading tools and meme coin innovation.",
  keywords: "BLOB, token, meme coin, trading tools, cryptocurrency, DeFi",
  authors: [{ name: "$BLOB Token" }],
  openGraph: {
    title: "$BLOB Token - Blob Has Awakened",
    description: "Born from memes. Built for traders. Advanced trading tools and meme coin innovation.",
    type: "website",
    url: "https://blobtoken.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "$BLOB Token",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "$BLOB Token - Blob Has Awakened",
    description: "Born from memes. Built for traders.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
} 