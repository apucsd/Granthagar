/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Container from "../../../components/ui/Container";
import { Button } from "../../../components/ui/button";

const AboutPage = () => {
  return (
    <Container>
      <div className=" bg-white">
        {/* bg-gradient-to-r from-white to-[#259030] */}
        <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
          <h2 className="md:text-5xl text-3xl mt-10 font-extrabold lg:!leading-[64px] md:max-w-4xl">
            <span className="text-primary">BANGLADESH'S</span> BEST BOOK STORE
            WITH ALL LATEST TITLES
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="text-base leading-relaxed">
                The e-commerce platform for buying and selling books.
              </p>

              <div className="mt-12">
                <p className="text-base text-slate-800">
                  In Bangladesh, a trusted online bookstore for buying and
                  selling books could be granthagar.com. Here, you can purchase
                  books at affordable prices from anywhere in Bangladesh. We aim
                  to make quality books easily accessible to everyone at lower
                  prices. You can conveniently purchase books from our website
                  from the comfort of your home. We aspire for every individual
                  to be enlightened through reading, illuminating the entire
                  world with knowledge.
                </p>
              </div>

              <div className="mt-12 space-x-4">
                <Button>Buy Now</Button>
                <Button className="gap-1">
                  Visit Map{" "}
                  <lord-icon
                    src="https://cdn.lordicon.com/vduvxizq.json"
                    trigger="hover"
                    colors="primary:#fff"
                    style={{ width: "20px", height: "20px" }}
                  ></lord-icon>
                </Button>
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

export default AboutPage;
