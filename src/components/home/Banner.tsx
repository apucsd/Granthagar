/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <Container>
      <div className=" bg-white py-12 px-10 ">
        {/* bg-gradient-to-r from-white to-[#259030] */}
        <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
          <h2 className="lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl">
            <span className="text-primary">BANGLADESH'S</span> BEST BOOK STORE
            WITH ALL LATEST TITLES
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="text-base leading-relaxed">
                UPTO 70% DISCOUNT ON ALL BOOKS AND COMBOS GRAB YOUR FAVORITE
                BOOK NOW !!!
              </p>
              <div className="mt-12 space-x-4">
                <Button>Buy Now</Button>
                <Button>
                  Visit Map <ArrowRight></ArrowRight>
                </Button>
              </div>
              <div className="mt-12">
                <p className="text-base leading-relaxed">
                  Online Book Shop can be your reliable medium for buying
                  Islamic books, general books, kids books, academic books etc.
                  in Bangladesh.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="shrink-0 w-full h-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
