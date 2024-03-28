import Image from "next/image";
import { Button } from "../button";
import { ShoppingCart } from "lucide-react";
import { TBook } from "@/types/index.type";
import defaultImage from "@/assets/not-found-img.jpeg";
const BookLargeCard = ({
  title,
  authors,
  publisher,
  publicationYear,
  category,
  image,
  ratings,
  description,
  price,
}: Partial<TBook>) => {
  return (
    <div className="grid gap-5 grid-cols-12 place-items-center  bg-white shadow-xl border p-4 rounded-md">
      <div className="col-span-12 md:col-span-4 relative">
        <div className="w-full h-full relative">
          <Image
            height={300}
            width={200}
            src={image ? image : defaultImage}
            alt="books"
            className="rounded-xl  object-cover"
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 w-full  space-y-3 bg-white flex flex-col p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-black truncate text-gray-800 md:text-3xl text-xl">
            {title}
          </h3>
          <h3>{ratings && ratings}⭐⭐⭐⭐⭐</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className=" truncate text-sm uppercase text-primary">
            {category?.map((item) => (
              <>{item}, </>
            ))}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" truncate   text-green-500">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-3xl font-bold">৳{price}</span>
            <span className="text-sm line-through text-red-600">
              ৳{(price! * 0.1).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-4 items-center">
          <div className="space-y-2">
            <p className="text-slate-700">Written By</p>
            <p className="font-semibold truncate">{authors![0]}</p>
          </div>
          <div className="space-y-2">
            <p className="text-slate-700">Publisher</p>
            <p className="font-semibold truncate">{publisher}</p>
          </div>
          <div className="space-y-2">
            <p className="text-slate-700">Year</p>
            <p className="font-semibold">{publicationYear}</p>
          </div>
          <div className="space-y-2">
            <Button className="gap-3">
              Add To Cart <ShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLargeCard;
