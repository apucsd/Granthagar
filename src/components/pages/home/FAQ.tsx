"use client";

import { useState } from "react";

const faqData = [
  {
    title: "What is Granthagar?",
    subtitle:
      "Granthagar is an online bookstore with a vast collection of books from various genres, ensuring you find the perfect read for every mood.",
    colorBg: "bg-green-500",
    colorBorder: "border-green-500",
  },
  {
    title: "How can I place an order?",
    subtitle:
      "You can easily place an order by browsing our collection, adding books to your cart, and proceeding to checkout.",
    colorBg: "bg-orange-500",
    colorBorder: "border-orange-500",
  },
  {
    title: "What are the delivery options?",
    subtitle:
      "We offer standard and express delivery options. You can choose your preferred option at checkout.",
    colorBg: "bg-red-500",
    colorBorder: "border-red-500",
  },
  {
    title: "Do you ship internationally?",
    subtitle:
      "Currently, we ship only within Bangladesh. We are working on expanding our services to other countries.",
    colorBg: "bg-sky-500",
    colorBorder: "border-sky-500",
  },
  {
    title: "What is the return policy?",
    subtitle:
      "We have a 7-day return policy for damaged or incorrect items. Please contact our support team for assistance.",
    colorBg: "bg-purple-500",
    colorBorder: "border-purple-500",
  },
];

export default function FAQ() {
  const [isActive, setIsActive] = useState<number | null>(0);
  const handleToggle = (idx: number) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="hidden md:block">
      <div className="max-w-2xl mx-auto my-12 text-center">
        <h2 className="text-2xl md:text-4xl text-primary font-extrabold lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
          Answers to Your Most Common Queries
        </p>
      </div>

      <div className="mx-auto flex min-h-[300px] w-fit gap-1 rotate-90 md:rotate-0">
        {faqData?.map((data, idx) => (
          <div key={idx} className="flex ">
            {/* toggle item */}
            <button
              onClick={() => handleToggle(idx)}
              className={`flex h-full w-28 flex-col items-center justify-around ${data?.colorBg} relative rounded-lg text-white`}
            >
              {isActive === idx && (
                <span
                  className={`h-0 w-0 ${data?.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent`}
                ></span>
              )}
              <p className="-rotate-90 md:rotate-0">{idx + 1}</p>
              <p className="rotate-[270deg]">FAQ</p>
            </button>
            {/* container */}
            <div
              className={`grid place-content-center rounded-lg bg-gray-200 dark:bg-[#18181B] shadow-md ${
                isActive === idx
                  ? "opacity-1 scale-1 h-[200px] md:h-auto w-[400px] md:w-64 px-5"
                  : "w-0 scale-0 opacity-0"
              } md:ml-2 mt-12 md:mt-0 text-black duration-300 ease-in-out -rotate-90 md:rotate-0`}
            >
              <h2 className="font-black lg:text-2xl dark:text-white">
                {data?.title}
              </h2>
              <p className="text-black/60 dark:text-white/60">
                {data?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
