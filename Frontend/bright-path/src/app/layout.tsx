import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import { Navbar, Footer } from "@/components/Global";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'BrightPath - Empowering Schools and Students',
  description:
    'BrightPath is a platform dedicated to promoting schools, showcasing talents, and creating positive, educative content for the community.',
  keywords: ['Education', 'Social Media', 'Talent Exposure', 'School Promotion'],
  authors: [{ name: 'BrightPath' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/Assets/Ellipse 23 (2).png',
    apple: '/apple-icon.ico',
  },
  openGraph: {
    title: 'BrightPath - Empowering Schools and Students',
    description:
      'Promoting schools, showcasing talents, and creating positive, educative content for the community.',
    url: 'Frontend/bright-path/public/Assets/Ellipse 23 (2).png',
    siteName: 'BrightPath',
    images: [
      {
        url: 'https://www.BrightPath.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightPath - Empowering Schools and Students',
    description:
      'Promoting schools, showcasing talents, and creating positive, educative content for the community.',
    images: ['https://www.BrightPath.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}antialiased min-h-screen bg-background`}
      >
        {/* navbar  */}
        <Navbar />
        {children}
        {/* toast for rendering */}
        <Toaster position="top-left" reverseOrder={false} />
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
