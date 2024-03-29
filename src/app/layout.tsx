import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Provider from "@/lib/Providers";

const hind_Siliguri = Hind_Siliguri({ subsets: ["bengali"], weight: "400" });

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
        <body className={hind_Siliguri.className}>
          {children}

          <Toaster position="top-right" expand={true} richColors />
        </body>
      </Provider>

      <script async src="https://cdn.lordicon.com/lordicon.js"></script>
    </html>
  );
}
