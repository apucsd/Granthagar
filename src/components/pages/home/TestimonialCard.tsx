import React from "react";

type TestimonialCardProps = {
  testimonial: {
    name: string;
    title: string;
    profession: string;
    feedbackHeader: string;
    feedback: string;
  };
};

const TestimonialCard = ({
  testimonial: { name, title, profession, feedbackHeader, feedback },
}: TestimonialCardProps) => {
  return (
    <div className="h-full ">
      <div className="flex flex-col  border-dotted border-2 border-blue-600 text-center shadow-xl shadow-blue-200 flex-1">
        <div className="relative flex flex-col flex-1 justify-between p-6 lg:py-7 lg:px-5">
          <span className="absolute -left-5 -top-6 rounded-full border border-blue-600 bg-white p-3 text-5xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.16 3.5C4.73 5.06 3.55 6.67 3.55 9.36c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.9 0-2.99-1.52-2.99-4.25c0-3.8 1.75-6.53 5.02-8.42L7.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86c.16-.05.3-.05.44-.05c1.27 0 2.5.86 2.5 2.41c0 1.61-1.03 2.61-2.5 2.61c-1.89 0-2.98-1.52-2.98-4.25c0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className="flex-1 flex flex-col justify-between">
            <p className="border-blue-500 px-10 text-xl font-black">
              {feedbackHeader}
            </p>
            <blockquote className="mt-8 flex-1">
              <p className="leading-relaxed text-blue-900">{feedback}</p>
            </blockquote>
          </div>
          <div className="mt-8 px-8">
            <div>
              <p className="text-base font-bold">{name}</p>
              <p className="text-blue-900 mt-0.5 text-sm">{profession}</p>
            </div>
            <p className="text-blue-900 mt-0.5 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
