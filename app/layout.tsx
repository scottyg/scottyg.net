import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Scott Gordon - Software Engineer";

export const metadata: Metadata = {
  metadataBase: new URL("https://scottyg.net"),
  title,
  description: title,
  openGraph: {
    title,
    description: title,
    type: "website",
    url: "https://scottyg.net",
    images: ["https://scottyg.net/ScottGordon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: title,
    images: ["https://scottyg.net/ScottGordon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} h-screen py-4 px-8 dark:bg-gray-900`}
      >
        <div className="container mx-auto h-full flex flex-col justify-between">
          <Navigation />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
