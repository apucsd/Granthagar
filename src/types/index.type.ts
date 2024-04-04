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

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin | guest | seller";
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other";
  address?: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  image?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}
