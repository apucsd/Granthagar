import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Provider from "@/lib/Providers";
import NextTopLoader from "nextjs-toploader";
const playfair_Display = Playfair_Display({
  subsets: ["cyrillic"],
  weight: "400",
});

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
      <body className={playfair_Display.className}>
        <NextTopLoader
          color="#4F46E5"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Provider>{children}</Provider>

        <Toaster position="top-right" expand={true} richColors />
      </body>

      <script async src="https://cdn.lordicon.com/lordicon.js"></script>
    </html>
  );
}
