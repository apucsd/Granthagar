import Breadcrumbs from "@/components/ui/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Granthagar | Books",
  description: "Online Book Store In Bangladesh",
};

export default function BooksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Breadcrumbs />
      <div className="h-screen bg-red-50">
        sidebar
        {children}
      </div>
    </>
  );
}
