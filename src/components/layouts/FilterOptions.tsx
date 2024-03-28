"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useRouter } from "next/navigation";
const writers = [
  {
    id: 1,
    authorName: "Humayun Ahmed",
  },
  {
    id: 2,
    authorName: "Tahmima Anam",
  },
  {
    id: 3,
    authorName: "Kazi Nazrul Islam",
  },
  {
    id: 4,
    authorName: "Zahir Raihan",
  },
  {
    id: 5,
    authorName: "Rabindranath Tagore",
  },
];

const years = [
  { id: 1, publicationYear: 2025 },
  { id: 2, publicationYear: 2024 },
  { id: 3, publicationYear: 2023 },
  { id: 4, publicationYear: 2022 },
  { id: 5, publicationYear: 2021 },
];
const categories = [
  { id: 1, category: "Fiction" },
  { id: 2, category: "Mystery" },
  { id: 3, category: "Science" },
  { id: 4, category: "Fantasy" },
  { id: 5, category: "Historical" },
  { id: 6, category: "Romance" },
  { id: 7, category: "Thriller" },
  { id: 8, category: "Non-fiction" },
  { id: 9, category: "Biography" },
  { id: 10, category: "Self-Help" },
];

const FilterOptions = () => {
  const router = useRouter();
  const handleFilter = (filterQuery: string | number) => {
    // console.log(filterQuery);
    if (typeof filterQuery === "number") {
      return router.push(`/books?publicationYear=${filterQuery}`);
    }
    // Split author name by spaces
    // const filterQueryParts = filterQuery.split(/[-\s]+/);

    // const query = filterQueryParts
    //   .map((part: string) => `searchTerm=${part}`)
    //   .join("&");

    return router.push(`/books?searchTerm=${filterQuery}`);
  };
  return (
    <div className="w-[30%] hidden md:block min-h-screen bg-slate-50 p-4">
      <h2 className="text-2xl my-2 font-medium">Filter Options</h2>
      <Accordion
        defaultValue={["item-1", "item-2"]}
        type="multiple"
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold">
            Shop By Category
          </AccordionTrigger>
          <div className="grid grid-cols-2 gap-2 my-2">
            {categories.map((category) => (
              <AccordionContent key={category.id}>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    onCheckedChange={(value) => {
                      {
                        if (value) {
                          handleFilter(category.category);
                        }
                      }
                    }}
                    id={category.category}
                  />
                  <Label
                    className="hover:cursor-pointer truncate"
                    htmlFor={category.category}
                  >
                    {category.category}
                  </Label>
                </div>
              </AccordionContent>
            ))}
          </div>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold">
            Editor Picks
          </AccordionTrigger>
          {writers.map((writer) => (
            <AccordionContent key={writer.id}>
              <div className="flex items-center space-x-3">
                <Checkbox
                  onCheckedChange={(value) => {
                    {
                      if (value) {
                        handleFilter(writer.authorName);
                      } else {
                        handleFilter("");
                      }
                    }
                  }}
                  id={writer.authorName}
                />
                <Label
                  className="hover:cursor-pointer truncate"
                  htmlFor={writer.authorName}
                >
                  {writer.authorName}
                </Label>
              </div>
            </AccordionContent>
          ))}
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold">
            Choose Publish Year
          </AccordionTrigger>
          {years.map((publicationYear) => (
            <AccordionContent key={publicationYear.id}>
              <div className="flex items-center space-x-3">
                <Checkbox
                  onClick={() =>
                    handleFilter(publicationYear.publicationYear as number)
                  }
                  id={publicationYear.publicationYear.toString()}
                />
                <Label
                  className="truncate"
                  htmlFor={publicationYear.publicationYear.toString()}
                >
                  {publicationYear.publicationYear}
                </Label>
              </div>
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterOptions;
