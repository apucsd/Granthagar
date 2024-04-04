"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetAllBooksQuery } from "@/redux/api/booksApi";
import { TBook } from "@/types/index.type";
import { Edit2Icon, TrashIcon } from "lucide-react";
import CustomPagination from "@/components/ui/CustomPagination";
import AddBookModal from "@/components/modal/AddBookModal";

const ManageBooks = () => {
  const [page, setPage] = useState(1);
  const { data: booksData, isFetching } = useGetAllBooksQuery([
    { name: "limit", value: 6 },
    { name: "page", value: page },
  ]);

  // console.log(booksData?.meta);
  const totalPages = booksData?.meta?.totalPage || 0;
  return (
    <div className="h-full">
      <div className="flex justify-end  my-3">
        <AddBookModal />
      </div>
      <div></div>
      <Table className="h-full w-full">
        <TableCaption>A list of all recent books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SL</TableHead>
            <TableHead>Book Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isFetching ? (
            // Show loading skeleton while data is loading
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          ) : (
            // Render actual data when loaded
            booksData?.data.map((book: TBook, index: number) => (
              <TableRow key={book._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.authors[0]}</TableCell>
                <TableCell className="text-right">{book.price} ৳</TableCell>
                <TableCell className="flex items-center gap-5 justify-center text-right">
                  <TrashIcon className="text-red-500 size-5 cursor-pointer" />
                  <Edit2Icon className="text-green-500 size-5 cursor-pointer" />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className="text-right">
              <CustomPagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ManageBooks;
const LoadingSkeleton = () => (
  <TableRow>
    <TableCell className="font-medium">
      <div className="bg-gray-200 h-6 w-16 animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="bg-gray-200 h-6 w-24 animate-pulse"></div>
    </TableCell>
    <TableCell>
      <div className="bg-gray-200 h-6 w-20 animate-pulse"></div>
    </TableCell>
    <TableCell className="">
      <div className="bg-gray-200 h-6 w-12 animate-pulse"></div>
    </TableCell>
    <TableCell className="">
      <div className="bg-gray-200 h-6 w-12 animate-pulse"></div>
    </TableCell>
  </TableRow>
);
