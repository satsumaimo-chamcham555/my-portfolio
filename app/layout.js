import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeartBackdrop } from "@/components/HeartBackdrop";
import { CollagePhotoD } from "@/components/collage/CollageStickers";

export const metadata = {
  title: "Satsuki Dohi | Portfolio",
  description: "津田塾大学 学芸学部 情報科学科 — Satsuki Dohi のポートフォリオ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="site-shell relative min-h-screen overflow-x-hidden bg-floral text-neutral-900 antialiased">
        <HeartBackdrop />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <div className="relative">
            <CollagePhotoD />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
