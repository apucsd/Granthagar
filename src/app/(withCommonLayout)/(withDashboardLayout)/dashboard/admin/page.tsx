"use client";
import { useGetAllBooksQuery } from "@/redux/api/booksApi";
import { getUserInfo } from "@/services/auth.services";
import { BookAIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const [user, setUser] = useState<null | Record<string, any>>(null);
  useEffect(() => {
    const user = getUserInfo();
    setUser(user);
  }, []);

  const { data } = useGetAllBooksQuery([]);
  console.log(data);
  return (
    <div>
      <div className="">
        <div className=" mx-auto">
          <div className="flex justify-between mb-3">
            <h2 className="text-4xl text-primary font-bold ">Welcome</h2>
            <p>{user?.userEmail}</p>
          </div>

          {/* <h2 className="text-4xl font-bold  mb-8">Statistics</h2> */}
          <div className="flex flex-wrap gap-x-4 gap-y-12 bg-gray-100 px-4 py-20 lg:px-20">
            <div className="flex w-72">
              <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                <div className="p-3">
                  <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-primary to-primary/70 text-center text-white shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-4 h-7 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="pt-1 text-right">
                    <p className="text-sm font-light capitalize">Pageviews</p>
                    <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                      14,000
                    </h4>
                  </div>
                </div>
                <hr className="opacity-50" />
                <div className="p-4">
                  <p className="font-light">
                    <span className="text-sm font-bold text-green-600">
                      +22%{" "}
                    </span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-72">
              <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                <div className="p-3">
                  <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-primary to-primary/70 text-center text-white shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-4 h-7 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="pt-1 text-right">
                    <p className="text-sm font-light capitalize">Users</p>
                    <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                      5
                    </h4>
                  </div>
                </div>
                <hr className="opacity-50" />
                <div className="p-4">
                  <p className="font-light">
                    <span className="text-sm font-bold text-green-600">
                      +3%{" "}
                    </span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-72">
              <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                <div className="p-3">
                  <div className="absolute -mt-10 h-16 w-16 flex flex-col justify-center items-center rounded-xl bg-gradient-to-tr from-primary to-primary/70 text-center text-white shadow-lg">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-4 h-7 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg> */}
                    <BookAIcon className="text-center" />
                  </div>
                  <div className="pt-1 text-right">
                    <p className="text-sm font-light capitalize">Products</p>
                    <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                      {data?.data.length}
                    </h4>
                  </div>
                </div>
                <hr className="opacity-50" />
                <div className="p-4">
                  <p className="font-light">
                    <span className="text-sm font-bold text-red-600">-3% </span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-72">
              <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                <div className="p-3">
                  <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-primary to-primary/70 text-center text-white shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-4 h-7 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="pt-1 text-right">
                    <p className="text-sm font-light capitalize">Orders</p>
                    <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                      $5,360
                    </h4>
                  </div>
                </div>
                <hr className="opacity-50" />
                <div className="p-4">
                  <p className="font-light">
                    <span className="text-sm font-bold text-red-600">-3% </span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
