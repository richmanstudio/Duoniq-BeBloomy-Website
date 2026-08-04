import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  themeColor: "#f3eee5",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
