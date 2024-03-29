export interface TBook {
  _id: string;
  title: string;
  authors: string[];
  isbn: string;
  publisher: string;
  publicationYear: number;
  category?: string[] | null;
  image: string;
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
