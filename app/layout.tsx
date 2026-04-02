import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext"; // ✅ correct import

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yenetra.in"),
  title: {
    default: "Yenetra Security Systems",
    template: "%s | Yenetra",
  },
  description:
    "Yenetra provides advanced CCTV cameras, intelligent surveillance systems, biometric access control, alarm systems, and integrated security infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable}`}
    >
      <body className="bg-[#020617] text-white antialiased overflow-x-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-20 bg-[#020617]" />
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="fixed inset-0 tech-grid opacity-[0.05] pointer-events-none -z-10" />
        <div className="fixed inset-0 noise-overlay -z-10" />

        {/* ✅ CART PROVIDER (correct) */}
        <CartProvider>
          <div className="relative min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </CartProvider>

      </body>
    </html>
  );
}