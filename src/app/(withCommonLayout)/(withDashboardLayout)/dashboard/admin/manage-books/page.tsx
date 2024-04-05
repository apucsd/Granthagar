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

import {
  useGetAllBooksQuery,
  useRemoveBookMutation,
} from "@/redux/api/booksApi";
import { TBook } from "@/types/index.type";
import { Edit2Icon, TrashIcon } from "lucide-react";
import CustomPagination from "@/components/ui/CustomPagination";
import AddBookModal from "@/components/modal/AddBookModal";
import { toast } from "sonner";
import { ConfirmModal } from "@/components/modal/ConfirmModal";
import UpdateBookModal from "@/components/modal/UpdateBookModal";
import TableLoader from "@/components/ui/loader/TableLoader";

const ManageBooks = () => {
  const [findId, setFindId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [page, setPage] = useState(1);
  const [removeBook] = useRemoveBookMutation();
  const { data: booksData, isFetching } = useGetAllBooksQuery([
    { name: "limit", value: 6 },
    { name: "page", value: page },
  ]);

  // console.log(booksData?.meta);
  const totalPages = booksData?.meta?.totalPage || 0;

  const handleDelete = async () => {
    try {
      const res = await removeBook(findId).unwrap();
      if (res?.success) {
        toast.success("A Book is deleted successfully!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full">
      <div className="flex justify-end">
        <AddBookModal />
      </div>

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
              <TableLoader />
              <TableLoader />
              <TableLoader />
              <TableLoader />
              <TableLoader />
              <TableLoader />
              <TableLoader />
            </>
          ) : (
            // Render actual data when loaded
            booksData?.data.map((book: TBook, index: number) => (
              <TableRow key={book._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.authors[0]}</TableCell>
                <TableCell className="text-right">{book.price} ৳</TableCell>
                <TableCell className="flex items-center gap-6 justify-center text-right">
                  <TrashIcon
                    onClick={() => {
                      setFindId(book._id);
                      setOpenModal(true);
                    }}
                    className="text-red-500 size-5 cursor-pointer"
                  />
                  <ConfirmModal
                    open={openModal}
                    setOpen={setOpenModal}
                    handleConfirm={handleDelete}
                  />
                  <Edit2Icon
                    onClick={() => {
                      setFindId(book._id);
                      setOpenUpdateModal(true);
                    }}
                    className="text-green-500 size-5 cursor-pointer"
                  />
                  <UpdateBookModal
                    open={openUpdateModal}
                    setOpen={setOpenUpdateModal}
                    id={findId}
                  />
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
