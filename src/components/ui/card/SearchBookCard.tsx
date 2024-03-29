import { TBook } from "@/types/index.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface SearchBookCardProps extends Partial<TBook> {
  handleBookClick: () => void;
}
const SearchBookCard = ({
  _id,
  image,
  title,
  price,
  description,
  authors,
  handleBookClick,
}: SearchBookCardProps) => {
  return (
    <Link href={`/books/${_id}`}>
      <div
        onClick={handleBookClick}
        className="gap-2 flex  my-1 p-1 rounded shadow"
      >
        <div className=" items-center justify-center bg-gray-300 rounded ">
          <Image src={image as string} width={60} height={50} alt="" />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p>
              <span className="text-xl font-bold">৳{price}</span>
              <span className="text-sm line-through text-red-600">
                ৳{(price! * 0.1).toFixed(2)}
              </span>
            </p>
          </div>
          <div className="">
            <p className="text-sm">{authors![0]}</p>
          </div>
          <div className="">
            <p className="text-sm text-green-500 truncate max-w-[50ch]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchBookCard;
