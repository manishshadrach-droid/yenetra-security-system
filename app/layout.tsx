import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "The Inside Home Furnishing | Luxury Blinds & Curtains",
  description:
    "Premium blinds, curtains, wallpapers and sofas crafted for refined interiors.",
  openGraph: {
    title: "The Inside Home Furnishing",
    description:
      "Luxury home furnishing solutions for modern interiors.",
    url: "https://your-demo-site.com",
    siteName: "The Inside",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}