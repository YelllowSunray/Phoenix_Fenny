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

const SITE_URL = "https://phoenixhilversum.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Phoenix Health & Wellness | Massage Hilversum",
    template: "%s | Phoenix Health & Wellness",
  },
  description:
    "Professionele massage en wellness in Hilversum. Ontspan, herstel en herleef. Bel 06 8734 9250 voor een afspraak. Open ma-vr 11:00–22:00.",
  keywords: [
    "massage Hilversum",
    "wellness Hilversum",
    "Phoenix Health & Wellness",
    "massage therapie",
    "ontspanningsmassage",
    "acupunctuur Hilversum",
    "cupping",
  ],
  authors: [{ name: "Phoenix Health & Wellness" }],
  creator: "Phoenix Health & Wellness",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Phoenix Health & Wellness",
    title: "Phoenix Health & Wellness | Massage Hilversum",
    description:
      "Professionele massage en wellness in Hilversum. Ontspan, herstel en herleef. Bel voor een afspraak.",
    images: [
      {
        url: "/images/pictures/massagephoto.jpg",
        width: 420,
        height: 560,
        alt: "Phoenix Health & Wellness massage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Health & Wellness | Massage Hilversum",
    description: "Professionele massage en wellness in Hilversum. Bel voor een afspraak.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
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
