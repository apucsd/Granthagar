import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { TBook } from "@/types/index.type";
import AddToCartButton from "../AddToCartButton";

const BookCard = ({ _id, title, image, price, authors }: Partial<TBook>) => {
  const cartData = { _id, title, image, price, authors };
  return (
    <div
      data-aos="zoom-in"
      // style={{ minHeight: "100%" }}
      className="group border-gray-100/30 relative h-full flex  w-full  flex-col flex-grow justify-center self-center overflow-hidden rounded-lg border bg-white shadow-md"
    >
      <div className="relative mx-3 mt-3 flex  h-60 overflow-hidden rounded-md">
        <Image
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={image as string}
          alt="product image"
          height={300}
          width={300}
        />
        <div
          className="peer peer-hover:right-0 bg-primary/10 flex justify-center items-center
        
        absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-300 group-hover:right-0"
        >
          <Button>
            <Link href={`/books/${_id}`}>Quick View </Link>
          </Button>
        </div>

        <span className="absolute top-0 left-0 m-2 rounded-full bg-primary text-white px-4 py-1 text-center text-sm font-medium ">
          Sale
        </span>
      </div>
      <div className="mt-4 flex flex-col flex-grow px-5 pb-5">
        <div>
          <h5 className="text-xl tracking-tight ">{title}</h5>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold">৳{price}</span>
            <span className="text-sm line-through text-red-600">
              ৳{(price! * 0.1).toFixed(2)}
            </span>
          </p>
        </div>
        <AddToCartButton {...cartData} />
      </div>
    </div>
  );
};

export default BookCard;
