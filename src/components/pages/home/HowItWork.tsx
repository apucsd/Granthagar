/* eslint-disable @next/next/no-img-element */
import {
  BookOpenIcon, // Assuming you add this for browsing
  ShoppingCartIcon,
  CreditCardIcon, // Assuming you add this for the payment step
} from "lucide-react";
import React from "react";

const HowItWork = () => {
  return (
    <section id="works" className="container relative py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl text-primary font-extrabold mx-auto  lg:text-5xl">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
            Your journey to endless reading starts here.
          </p>
        </div>
        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              alt=""
              loading="lazy"
              width="1000"
              height="500"
              className="w-full"
              style={{ color: "transparent" }}
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>
          <div className="grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">
                  <BookOpenIcon className="size-8 text-primary" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                Browse & Select
              </h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">
                Explore our vast selection of books and find your next read.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">
                  <ShoppingCartIcon className="size-8 text-primary" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                Add to Cart
              </h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">
                Choose your favorites and add them to your cart.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">
                  <CreditCardIcon className="size-8 text-primary" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                Checkout
              </h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">
                Securely complete your purchase and get ready to dive in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
