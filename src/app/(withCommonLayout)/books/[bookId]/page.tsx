/* eslint-disable jsx-a11y/alt-text */

import { Button } from "@/components/ui/button";
import BookCard from "@/components/ui/card/BookCard";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";
import { getSingleBook } from "@/services/bookActions/getSingleBook";
import { TBook } from "@/types/index.type";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const BookDetailsPage = async ({ params }: { params: { bookId: string } }) => {
  const { data: book } = await getSingleBook(params.bookId);
  const { data: relatedBooks } = await getBooksByQuery({
    searchTerm: book.category[0],
  });

  return (
    <div className="container">
      <div className="md:grid flex flex-col-reverse fle md:grid-cols-12 space-y-3 justify-between gap-4 my-10">
        <div className="col-span-4 flex flex-col justify-between">
          <div className="w-full h-[400px] mx-auto relative">
            <Image
              height={400}
              width={400}
              className="w-auto h-auto object-contain rounded-xl"
              src={book.image}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-8 border space-y-4  p-5">
          <h3 className="uppercase text-black my-2 text-3xl font-semibold">
            {book.title}
          </h3>
          <div className="flex justify-start gap-10 items-center ">
            <h3>⭐⭐⭐⭐⭐</h3>
            <h3 className="font-semibold">{book.ratings}</h3>
          </div>

          <p className="text-sm text-green-600 text-justify mr-4">
            {book.description}
          </p>

          <div className="flex justify-between flex-wrap gap-4 mt-5 py-5 items-center">
            <div className="space-y-3">
              <p className="text-slate-700">Written By</p>
              <p className="font-semibold">
                {book.authors?.map((author: string) => (
                  <>{author}, </>
                ))}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-slate-700">Publisher</p>
              <p className="font-semibold">{book.publisher}</p>
            </div>
            <div className="space-y-3">
              <p className="text-slate-700">Year</p>
              <p className="font-semibold">{book.publicationYear}</p>
            </div>
            <div className="space-y-3 space-x-3">
              <Button variant="outline" className=" text-primary">
                Free Shipping
              </Button>
              <Button variant="outline" className=" text-green-500">
                In Stokes
              </Button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-4 items-center">
            <p>
              <span className="text-3xl font-bold">৳{book.price}</span>
              <span className="text-sm line-through text-red-600">
                ৳{(book.price * 0.1).toFixed(2)}
              </span>
              <span className="text-sm ms-3 text-primary">10%</span>
            </p>

            <div className="space-y-3 flex justify-between gap-4">
              <Button className="gap-2 mt-auto w-full">
                <ShoppingCart />
                Add to cart
              </Button>
              <div className="">
                <Heart className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 border p-5 md:col-span-9 flex justify-start md:gap-32">
          <div>
            <h1 className="text-xl font-bold">Details Product</h1>
            <ul className="mt-4 p-5 space-y-4">
              <li className="font-semibold">Book Title</li>
              <li className="font-semibold">Author</li>
              <li className="font-semibold">ISBN</li>
              <li className="font-semibold">Edition Language</li>
              <li className="font-semibold">Publisher</li>
              <li className="font-semibold">Publish Year</li>
              <li className="font-semibold">Category</li>
            </ul>
          </div>
          <div className="">
            <ul className="mt-10 p-5 space-y-4">
              <li> {book.title}</li>
              <li>
                {book.authors?.map((author: string) => (
                  <>{author}, </>
                ))}
              </li>
              <li>{book.isbn}</li>
              <li>{book.language}</li>
              <li>{book.publisher}</li>
              <li>{book.publicationYear}</li>
              <li>
                {book.category?.map((item: string) => (
                  <>{item}, </>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 p-5">
          <h1 className="text-xl font-bold">Related Products</h1>
          <div className="mt-4 md:p-5 space-y-4">
            {/* related prodcut */}

            {relatedBooks?.slice(0, 2).map((product: TBook) => (
              <BookCard key={product._id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
