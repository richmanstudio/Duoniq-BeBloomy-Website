import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BeBloomy — Personal flower service in Limassol",
  description: "Fresh and unusual flowers, personal florist guidance, event styling and delivery in Limassol.",
  applicationName: "BeBloomy",
  keywords: ["BeBloomy", "flowers Limassol", "flower delivery Limassol", "event flowers Cyprus", "florist Limassol"],
  openGraph: {
    title: "BeBloomy — Flowers for the moment you actually mean",
    description: "A personal flower service at Limassol Del Mar.",
    type: "website",
    locale: "en_CY",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1e9",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
