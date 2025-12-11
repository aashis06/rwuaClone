import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rwua.com.np'),
  title: "RWUA - Rural Water Users Association Nepal",
  description: "Empowering rural communities through sustainable water and sanitation solutions. RWUA provides comprehensive water supply systems, community development, and technical consultation services across Nepal.",
  keywords: "rural water, water supply, sanitation, Nepal, RWUA, community development, water projects",
  authors: [{ name: "RWUA Team" }],
  openGraph: {
    title: "RWUA - Rural Water Users Association Nepal",
    description: "Empowering rural communities through sustainable water and sanitation solutions.",
    url: "https://rwua.com.np",
    siteName: "RWUA",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RWUA - Rural Water Users Association",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RWUA - Rural Water Users Association Nepal",
    description: "Empowering rural communities through sustainable water and sanitation solutions.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}