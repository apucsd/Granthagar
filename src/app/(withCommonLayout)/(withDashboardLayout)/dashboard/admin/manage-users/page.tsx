"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDeleteUserMutation, useGetAllUserQuery } from "@/redux/api/userApi";
import TableLoader from "@/components/ui/loader/TableLoader";
import { IUser } from "@/types/index.type";
import { Edit2Icon, TrashIcon } from "lucide-react";
import { ConfirmModal } from "@/components/modal/ConfirmModal";
import { toast } from "sonner";
import EditUserRoleModal from "@/components/modal/EditUserRoleModal";
const ManageUsers = () => {
  const { data, isFetching } = useGetAllUserQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const [id, setId] = useState<undefined | string>();
  const [email, setEmail] = useState<undefined | string>();
  const [openModal, setOpenModal] = useState(false);
  const [openEditRoleModal, setOpenEditRoleModal] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await deleteUser(id).unwrap();
      if (res?.success) {
        toast.success("A User is deleted successfully!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-x-auto relative hide-scrollbar">
      <Table className=" overflow-auto">
        <TableCaption>A list of all recent books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">SL</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Role</TableHead>
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
            </>
          ) : (
            data?.data.map((user: IUser, index: number) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.role}</TableCell>
                <TableCell className="flex items-center gap-6 justify-center text-right">
                  <TrashIcon
                    onClick={() => {
                      setId(user._id);
                      setOpenModal(true);
                    }}
                    className="text-red-500 size-5 cursor-pointer"
                  />
                  <ConfirmModal
                    handleConfirm={handleDelete}
                    open={openModal}
                    setOpen={setOpenModal}
                  />

                  <Edit2Icon
                    onClick={() => {
                      setEmail(user.email);
                      setOpenEditRoleModal(true);
                    }}
                    className="text-green-500 size-5 cursor-pointer"
                  />
                  <EditUserRoleModal
                    open={openEditRoleModal}
                    setOpen={setOpenEditRoleModal}
                    email={email}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
