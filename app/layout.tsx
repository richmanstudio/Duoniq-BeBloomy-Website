import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BeBloomy — Flowers & Decor in Limassol",
  description:
    "A premium digital concept for BeBloomy Flowers & Decor, Limassol — signature bouquets, floral styling and thoughtful gifting.",
  applicationName: "BeBloomy",
  keywords: [
    "flowers Limassol",
    "flower delivery Cyprus",
    "wedding flowers Limassol",
    "floral decor Cyprus",
    "BeBloomy",
  ],
  openGraph: {
    title: "BeBloomy — Flowers & Decor in Limassol",
    description: "Beauty and style, arranged for every moment.",
    type: "website",
    locale: "en_CY",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2ede4",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${sansFont.variable}`}>{children}</body>
    </html>
  );
}
