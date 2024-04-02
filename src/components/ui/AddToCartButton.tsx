"use client";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "./button";
import { addToCart } from "@/redux/features/cartSlice";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
const AddToCartButton = ({ _id, title, image, price, authors }: any) => {
  const handleAddToCart = () => {
    dispatch(addToCart({ _id, title, image, price, authors }));
    toast.success("This book added to your cart!!!", { duration: 1000 });
  };
  const dispatch = useAppDispatch();
  return (
    <Button onClick={handleAddToCart} className="gap-2 mt-auto w-full">
      <ShoppingCart />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
