import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Provider from "@/lib/Provider";

const cairo = Cairo({ subsets: ["latin"], weight: "400" });

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
      <Provider>
        <body className={cairo.className}>
          {children}

          <Toaster position="top-right" expand={true} richColors />
        </body>
      </Provider>

      <script async src="https://cdn.lordicon.com/lordicon.js"></script>
    </html>
  );
}
