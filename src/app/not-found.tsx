"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

/* eslint-disable react/no-unescaped-entities */

const ErrorPage = () => {
  const router = useRouter();
  return (
    <section className=" ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-primary rounded-full bg-blue-50 dark:bg-gray-800">
            <lord-icon
              src="https://cdn.lordicon.com/qwjfapmb.json"
              trigger="hover"
              colors="primary:#ebe6ef,secondary:#E02A70,tertiary:#3a3347,quaternary:#f24c00,quinary:#faf9d1"
              style={{ width: 150, height: 150 }}
            ></lord-icon>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The page you are looking for doesn't exist. Here are some helpful
            links:
          </p>
          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>
            <Link
              href="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-lg shrink-0 sm:w-auto hover:bg-primary dark:hover:bg-primary/90 dark:bg-primary/90"
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
