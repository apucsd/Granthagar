"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import CustomForm from "../form/CustomForm";
import { FieldValues } from "react-hook-form";
import CustomInput from "../form/CustomInput";
import { useAddBookMutation } from "@/redux/api/booksApi";
import { toast } from "sonner";
const defaultValue = {
  title: "Basantika",
  authors: "Kazi Nazrul Islam",
  isbn: "978-3-16-148416-2",
  publisher: "Shomoy Prokashoni",
  publicationYear: 1931,
  ratings: 4,
  category: "Mystery",
  image: "https://www.amarbooks.org/thumbs/1489973333.jpg",
  language: "Bengali",
  description:
    "Basantika is a timeless collection of poetry by Kazi Nazrul Islam, celebrating the beauty and vibrancy of spring. With his powerful and evocative verses, Nazrul captures the essence of the season, from the blooming flowers to the rejuvenation of life. Through themes of love, nature, and spirituality, Basantika transports readers to a world of renewal and hope, leaving a lasting impression on the heart and soul.",
  price: 270,
  quantity: 15,
  weight: "220 grams",
};

const AddBookModal = () => {
  const [createBook] = useAddBookMutation();
  const [open, setOpen] = useState(false);
  const handleSubmit = async (values: FieldValues) => {
    const bookData = {
      ...values,
      authors: [values.authors],
      category: [values.category],
    };

    try {
      const res = await createBook(bookData).unwrap();
      if (res?.success) {
        toast.success("A Book is added successfully!!!");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="-mt-4 mb-2">Add Book</Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-2xl overflow-y-auto max-h-[90vh] scroll-smooth hide-scrollbar">
        <DialogHeader>
          <DialogTitle>Add A Book</DialogTitle>
        </DialogHeader>
        <div className="md:p-2">
          <CustomForm onSubmit={handleSubmit} defaultValues={defaultValue}>
            <div className="md:flex justify-center gap-4 items-center my-2">
              <CustomInput name="title" label="Title" type="text" />
              <CustomInput name="authors" label="Authors" type="text" />
            </div>
            <div className="md:flex justify-center gap-4 items-center my-2">
              <CustomInput
                name="publicationYear"
                label="Publication Year"
                type="number"
              />
              <CustomInput name="ratings" label="Ratings" type="number" />
            </div>
            <div className="md:flex justify-center gap-4 items-center my-2">
              <CustomInput name="category" label="Category" type="text" />
              <CustomInput name="image" label="Image URL" type="text" />
            </div>
            <div className="md:flex justify-center gap-4 items-center my-2">
              <CustomInput name="language" label="Language" type="text" />
              <CustomInput name="weight" label="Weight" type="text" />
            </div>
            <div className="md:flex justify-center gap-4 items-center my-2">
              <CustomInput name="price" label="Price" type="number" />
              <CustomInput name="quantity" label="Quantity" type="number" />
            </div>
            <div className="md:flex justify-between gap-5 items-center">
              <CustomInput name="description" label="Description" type="text" />
            </div>

            <div className="flex justify-end  mt-4">
              <Button type="submit">Submit</Button>
            </div>
          </CustomForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookModal;
