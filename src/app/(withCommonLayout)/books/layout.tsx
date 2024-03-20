import CategorySidebar from "@/components/layouts/CategorySidebar";
import Breadcrumbs from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";

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
    <Container>
      <Breadcrumbs />
      <div className="flex">
        <CategorySidebar />
        <div className="w-full">{children}</div>
      </div>
    </Container>
  );
}
