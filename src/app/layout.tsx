import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Kalam({ subsets: ["devanagari"], weight: "400" });

export const metadata: Metadata = {
  title: "Granthagar",
  description: "Online Book Store In Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>

      <script async src="https://cdn.lordicon.com/lordicon.js"></script>
    </html>
  );
}
