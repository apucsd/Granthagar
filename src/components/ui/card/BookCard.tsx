import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
type TBook = {
  id: number;
  title: string;
  author: string;
  category: string;
  authorName: string;
  publicationDate: string;
  bookLanguage: string;
  image_url: string;
  price: number;
  original_price: number;
};

const BookCard = ({ id, image_url, title, price, original_price }: TBook) => {
  return (
    <div className="group border-gray-100/30 flex h-full w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <Image
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={image_url}
          alt="product image"
          fill
        />
        <div className="peer peer-hover:right-0 bg-primary/10 flex justify-center items-center absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-300 hover:right-0">
          <Button>
            <Link href={`/books/${id}`}>Quick View</Link>
          </Button>
        </div>

        <span className="absolute top-0 left-0 m-2 rounded-full bg-primary text-white px-4 py-1 text-center text-sm font-medium ">
          Sale
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <div>
          <h5 className="text-xl tracking-tight ">{title}</h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold">৳{price}</span>
            <span className="text-sm line-through text-red-600">
              ৳{original_price}
            </span>
          </p>
        </div>
        <Button className="gap-2 w-full">
          <ShoppingCart />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
