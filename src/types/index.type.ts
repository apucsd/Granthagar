import { USER_ROLE } from "@/constants/constant";
import { ReactNode } from "react";

export interface TBook {
  _id: string;
  title: string;
  authors: string[];
  isbn: string;
  publisher: string;
  publicationYear: number;
  category: string[] | null;
  image: string | undefined;
  language: string;
  ratings: number;
  description: string;
  price: number;
  quantity: number;
  weight: string;
  createdAt: string;
  updatedAt: string;
  selectedQuantity?: number;
  __v: number;
}
export type TUserRole = keyof typeof USER_ROLE;
export interface TSidebarItem {
  id: number;
  title: string;
  href: string;
  icon: ReactNode; // Lucid icon names
}
