import type { Metadata } from "next";
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { GoogleAnalyticsProvider } from "@/lib/analytics/google/GoogleAnalyticsProvider";
import { OpenPanelProvider } from "@/lib/analytics/openpanel/OpenPanelProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Create dkBuilds Next App",
  description: "dkbuilds next app starter-kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased]`}
        suppressHydrationWarning
      >
        <GoogleAnalyticsProvider />
        <OpenPanelProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
