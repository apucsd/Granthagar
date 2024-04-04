"use client";
/* eslint-disable react/no-unescaped-entities */
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import CustomForm from "../form/CustomForm";
import { FieldValues } from "react-hook-form";
import CustomInput from "../form/CustomInput";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/api/booksApi";
import { toast } from "sonner";

const UpdateBookModal = ({ id, open, setOpen }: any) => {
  //   console.log(id);
  const { data: singleBook, isFetching } = useGetSingleBookQuery(id);
  const [updateBook] = useUpdateBookMutation();
  if (isFetching) {
    return;
  }
  const handleSubmit = async (values: FieldValues) => {
    const bookData = {
      ...values,
      authors: Array.isArray(values.authors)
        ? values.authors
        : [values.authors],
      category: Array.isArray(values.category)
        ? values.category
        : [values.category],
    };

    const bookBackendData = {
      data: bookData,
      id: id,
    };
    try {
      const res = await updateBook(bookBackendData).unwrap();
      if (res?.success) {
        toast.success("A Book is updated successfully!!!");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl overflow-y-auto max-h-[90vh] scroll-smooth hide-scrollbar">
        <DialogHeader>
          <DialogTitle>Add A Book</DialogTitle>
        </DialogHeader>
        <div className="md:p-2">
          <CustomForm onSubmit={handleSubmit} defaultValues={singleBook.data}>
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

export default UpdateBookModal;
