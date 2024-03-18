"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
const CategorySidebar = () => {
  const booksCategories = [
    {
      id: 1,
      title: "Literature",
      link: "/literature",
      children: [
        { id: 101, title: "Bangla Literature", link: "/literature/bangla" },
        { id: 102, title: "English Literature", link: "/literature/english" },
      ],
    },
    {
      id: 2,
      title: "Children's Books",
      link: "/children",
      children: [
        { id: 201, title: "Picture Books", link: "/children/picture-books" },
        { id: 202, title: "Story Books", link: "/children/story-books" },
        {
          id: 203,
          title: "Educational Books for Kids",
          link: "/children/educational",
        },
      ],
    },
    {
      id: 3,
      title: "Science Fiction",
      link: "/science-fiction",
      children: [],
    },
    {
      id: 4,
      title: "Fantasy",
      link: "/fantasy",
      children: [],
    },
    {
      id: 5,
      title: "History",
      link: "/history",
      children: [
        { id: 501, title: "Bangladeshi History", link: "/history/bangladesh" },
        { id: 502, title: "World History", link: "/history/world" },
      ],
    },
    {
      id: 6,
      title: "Religion",
      link: "/religion",
      children: [
        { id: 601, title: "Islam", link: "/religion/islam" },
        { id: 602, title: "Hinduism", link: "/religion/hinduism" },
        { id: 603, title: "Buddhism", link: "/religion/buddhism" },
        { id: 604, title: "Christianity", link: "/religion/christianity" },
      ],
    },
    {
      id: 7,
      title: "Academic",
      link: "/academic",
      children: [
        { id: 701, title: "Mathematics", link: "/academic/mathematics" },
        { id: 702, title: "Physics", link: "/academic/physics" },
        { id: 703, title: "Chemistry", link: "/academic/chemistry" },
        { id: 704, title: "Biology", link: "/academic/biology" },
      ],
    },
    {
      id: 8,
      title: "Self-Help",
      link: "/self-help",
      children: [],
    },
    {
      id: 9,
      title: "Biography",
      link: "/biography",
      children: [],
    },
    {
      id: 10,
      title: "Cookbooks",
      link: "/cookbooks",
      children: [],
    },
    {
      id: 11,
      title: "Travel",
      link: "/travel",
      children: [],
    },
    {
      id: 12,
      title: "Art & Photography",
      link: "/art-photography",
      children: [],
    },
    {
      id: 13,
      title: "Health & Fitness",
      link: "/health-fitness",
      children: [],
    },
    {
      id: 14,
      title: "Business & Finance",
      link: "/business-finance",
      children: [],
    },
    {
      id: 15,
      title: "Technology",
      link: "/technology",
      children: [],
    },
    {
      id: 16,
      title: "Environment & Ecology",
      link: "/environment-ecology",
      children: [],
    },
    {
      id: 17,
      title: "Philosophy",
      link: "/philosophy",
      children: [],
    },
    {
      id: 18,
      title: "Psychology",
      link: "/psychology",
      children: [],
    },
    {
      id: 19,
      title: "Sociology",
      link: "/sociology",
      children: [],
    },
    {
      id: 20,
      title: "Language Learning",
      link: "/language-learning",
      children: [],
    },
  ];
  const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(
    null
  );

  const toggleCategory = (categoryId: number | null) => {
    setExpandedCategoryId((prevId: number | null) =>
      prevId === categoryId ? null : categoryId
    );
  };
  return (
    <div className="w-[30%] hidden md:block min-h-screen  text-slate-700 border-r pr-2">
      <h2 className="text-2xl font-semibold">MAIN CATEGORIES</h2>
      {booksCategories.map((category) => (
        <div key={category.id} className="my-4">
          <div
            className={`flex items-center gap-2  p-1 ${
              category.children.length > 0 ? "has-children" : ""
            }`}
          >
            <Link className="w-full" href={`/books/category/${category.link}`}>
              {category.title}
            </Link>
            {category.children.length > 0 && (
              <ChevronRight
                onClick={() => toggleCategory(category.id)}
                className={` bg-slate-100 rounded-full text-gray-400 text-sm h-5 w-6 transform duration-300 transition-transform ${
                  expandedCategoryId === category.id ? "rotate-90" : ""
                }`}
              />
            )}
          </div>
          {category.children.length > 0 && (
            <div
              className={`my-3 ${
                expandedCategoryId === category.id
                  ? "block transition-all duration-300"
                  : "hidden"
              }`}
            >
              <ul className="pl-5">
                {category.children.map((childCategory) => (
                  <li key={childCategory.id} className="py-1 my-2">
                    <Link
                      className="w-full"
                      href={`/books/category/${childCategory.link}`}
                    >
                      {childCategory.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategorySidebar;
