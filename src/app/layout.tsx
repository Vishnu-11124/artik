import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Artik | Stories Worth Sharing",
    template: "%s | Artik",
  },
  description:
    "Artik is a modern blogging platform where creativity meets storytelling. Discover interesting articles, share your thoughts, and explore ideas from different perspectives.",
  applicationName: "Artik",
  keywords: [
    "Artik",
    "Blogging Platform",
    "Articles",
    "Storytelling",
    "Creative Writing",
    "Community",
    "Ideas and Perspectives",
  ],
  authors: [{ name: "Artik" }],
  openGraph: {
    title: "Artik | Stories Worth Sharing",
    description:
      "Discover interesting articles, share your thoughts, and explore ideas from different perspectives.",
    siteName: "Artik",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artik | Stories Worth Sharing",
    description: "A space where every voice has a story to tell.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
