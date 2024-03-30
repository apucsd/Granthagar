"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { removeFromCart, updateQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

const CartPage = () => {
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (type: string, id: string) => {
    const payload = { type, _id: id };
    dispatch(updateQuantity(payload));
  };
  const handleRemoveProduct = (id: string) => {
    const payload = { _id: id };
    dispatch(removeFromCart(payload));
  };
  return (
    <Container>
      <section className=" bg-gray-100 p-5">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl mt-4 font-semibold text-gray-900">
              My Cart
            </h1>
          </div>
          <div className="mx-auto mt-8 max-w-2xl md:my-12">
            <div className="bg-white my-4 shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <div className="-my-8">
                    {products.map((product) => (
                      <div
                        key={product._id}
                        className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                      >
                        <div className="shrink-0 size-20">
                          <Image
                            height={100}
                            width={100}
                            className="w-full h-full rounded-lg object-cover"
                            src={product.image as string}
                            alt=""
                          />
                        </div>
                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                                {product.title}
                              </p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                {product.authors[0]}
                              </p>
                            </div>
                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                {product.price}
                              </p>
                              <div className="sm:order-1">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <Button
                                    onClick={() =>
                                      handleUpdateQuantity(
                                        "decrease",
                                        product._id
                                      )
                                    }
                                    className="p-0 px-3 rounded-none rounded-s h-8"
                                  >
                                    <Minus className="size-3" />
                                  </Button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-lg uppercase transition">
                                    {product.selectedQuantity}
                                  </div>
                                  <Button
                                    onClick={() =>
                                      handleUpdateQuantity(
                                        "increase",
                                        product._id
                                      )
                                    }
                                    className="p-0 px-3 rounded-none rounded-r h-8"
                                  >
                                    <Plus className="size-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button
                              onClick={() => handleRemoveProduct(product._id)}
                              type="button"
                              className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-red-500"
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">399৳</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Delivary Charge</p>
                    <p className="text-lg font-semibold text-gray-900">100৳</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">৳</span>
                    408.00
                  </p>
                </div>
                <br />
                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CartPage;
