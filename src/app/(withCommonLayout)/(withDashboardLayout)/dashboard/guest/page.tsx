"use client";
import { useAppSelector } from "@/redux/hooks";
import { NotebookPenIcon } from "lucide-react";

const GuestPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div>
      <div className="container px-5  mx-auto">
        <p>Hello, {user?.userEmail}</p>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <NotebookPenIcon className="text-primary size-16 m-auto my-1" />
              <h2 className=" font-medium text-2xl ">Orders</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
