import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google"; // <-- Swap Geist out for Noto Sans JP
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure Noto Sans JP with subsets and display rules
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp", // Exports a clean CSS variable
});

export const metadata: Metadata = {
  title: "ボドゲステーション | フリースクール",
  description: "ボードゲーム、プログラミング、3Dプリンターを通じた新しい学びの居場所",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* Apply the variable and class cleanly to the DOM root wrapper */}
      <body className={`${notoSansJp.className} antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <Navbar />
        
        <div className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}