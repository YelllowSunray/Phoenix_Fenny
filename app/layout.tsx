import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const trajanPro = localFont({
  src: "./fonts/TrajanPro-Regular.ttf",
  variable: "--font-trajan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phoenix Health & Wellness",
  description: "Professional massage therapy and wellness services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${trajanPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
