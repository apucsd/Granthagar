/* eslint-disable react/no-unescaped-entities */
import { ShoppingCart } from "lucide-react";

const NotFoundCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ShoppingCart className="text-5xl text-primary size-20 my-2" />
      <h2 className="text-3xl font-semibold my-2 ">Your cart is empty</h2>
      <p className="text-gray-600">
        Looks like you haven't added any items to your cart yet.
      </p>
    </div>
  );
};

export default NotFoundCart;
