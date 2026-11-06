
import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

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
  metadataBase: new URL("https://yenetracctv.com"),
  title: {
    default: "YeNetra CCTV Dealers | Har Pal Pe Nazar",
    template: "%s | YeNetra CCTV Dealers",
  },
  description:
    "Explore CCTV cameras, DVRs, NVRs, networking equipment and surveillance solutions from YeNetra CCTV Dealers, Badangpet, Hyderabad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="bg-[#020617] text-white antialiased overflow-x-hidden">
        <div className="fixed inset-0 -z-20 bg-[#020617]" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.08),transparent_60%)] pointer-events-none -z-20" />
        <div className="fixed inset-0 tech-grid opacity-[0.05] pointer-events-none -z-10" />
        <div className="fixed inset-0 noise-overlay pointer-events-none -z-10" />

        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <WhatsApp />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
