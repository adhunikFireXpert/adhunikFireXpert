import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WatsapButton from "@/components/watsap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fire Fighting Equipment & Safety Solutions India | Adhunik Firexpert",
  description: "Zedex Fire offers a comprehensive range of high-quality fire fighting equipment, safety solutions, and suppression systems. Protect your assets with our reliable and innovative fire protection technology for commercial, industrial, and residential needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <WatsapButton phoneNumber="+919599050534" />

      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
