/* eslint-disable jsx-a11y/alt-text */

import { Star } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
const BookDetailsPage = () => {
  return (
    <section className="grid place-items-center justify-center min-h-screen py-8 md:py-5">
      <div className="flex flex-col md:flex-row gap-4 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-5xl">
        <div className="flex-1 text-primary flex flex-col justify-between">
          <img
            src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/281/0728157_PE736124_S4.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 text-primary">
          <h3 className="uppercase text-black my-2 text-2xl font-medium">
            JANINGE
          </h3>
          <small>
            <span className="font-semibold">By </span>আমি আবু বকর{" "}
          </small>
          <h1 className="text-2xl font-bold">
            <span className="text-3xl font-bold">৳100</span>
            <span className="text-sm line-through text-red-600">৳200</span>{" "}
          </h1>
          <p>
            <small className="text-gray-400 my-2 flex gap-1 font-light">
              <Star className="size-4 text-yellow-600" />
              <Star className="size-4 text-yellow-600" />
              <Star className="size-4 text-yellow-600" />
              <Star className="size-4 text-yellow-600" />
            </small>
          </p>
          <p className="text-sm text-gray-600 text-justify mr-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            adipisci natus libero. Ullam doloremque dicta reiciendis.
          </p>

          <div className="flex items-center py-2 justify-between"></div>
          <div className="flex mt-2 text-center">
            <button className="bg-primary text-gray-100   rounded-sm font-bold py-2 px-4 mr-2 flex items-center hover:bg-teal-500 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="w-full text-center bg-primary text-gray-100 hover:bg-primary hover:text-white rounded-sm font-bold px-4 items-center">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
