"use client";
import { useAppSelector } from "@/redux/hooks";
import { NotebookTextIcon, UserCog2Icon } from "lucide-react";
import Link from "next/link";

const GuestPage = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div>
      <div className="container px-5  mx-auto">
        <p className="my-3 text-lg  md:text-4xl text-primary">
          Hello, <span className="font-bold">{user?.userEmail}</span>
        </p>
        <p className="my-3 text-slate-600">
          From your account dashboard you can view your all information edit
          your account details
        </p>
        <div className="hidden mt-10 md:grid grid-cols-1 gap-2 text-center  md:grid-cols-3">
          <Link href={`/dashboard/${user!.role}/orders`}>
            <div className="bg-slate-100 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105">
              <NotebookTextIcon className="text-primary size-12 m-auto my-1" />
              <h2 className=" font-medium text-md my-1 uppercase ">Orders</h2>
            </div>
          </Link>

          <Link href={`/dashboard/${user!.role}/account-details`}>
            <div className="bg-slate-100 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105">
              <UserCog2Icon className="text-primary size-12 m-auto my-1" />
              <h2 className=" font-medium text-md my-1 uppercase ">
                Account Details
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
