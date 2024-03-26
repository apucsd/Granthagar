import Image from "next/image";
import { Button } from "../button";
import { ShoppingCart } from "lucide-react";

const BookLargeCard = () => {
  return (
    <div className="grid gap-5 grid-cols-12 place-items-center  bg-white shadow-xl border p-4 rounded-md">
      <div className="col-span-12 md:col-span-3">
        <Image
          height={180}
          width={180}
          src="https://images.unsplash.com/photo-1508528075895-be7a6cabd37a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWluJTIwd2F0ZXJmYWxsfGVufDB8fDB8fHww"
          alt="books"
          className="rounded-xl w-full object-contain h-full"
        />
      </div>
      <div className="col-span-12 md:col-span-9 w-full  space-y-3 bg-white flex flex-col p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-black truncate text-gray-800 md:text-3xl text-xl">
            The Majestic and Wonderful
          </h3>
          <h3>⭐⭐⭐⭐⭐</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className=" truncate text-sm uppercase text-primary">
            Movies, Features, and Movies
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className=" truncate   text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            expedita earum optio recusandae repellendus sunt tempore!
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-3xl font-bold">৳2000</span>
            <span className="text-sm line-through text-red-600">৳2000</span>
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-4 items-center">
          <div className="space-y-2">
            <p className="text-slate-700">Written By</p>
            <p className="font-semibold">Rabindranath tagor</p>
          </div>
          <div className="space-y-2">
            <p className="text-slate-700">Publisher</p>
            <p className="font-semibold">Rabindranath tagor</p>
          </div>
          <div className="space-y-2">
            <p className="text-slate-700">Year</p>
            <p className="font-semibold">2024</p>
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
