"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
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
  { id: 1, publishYear: "2025" },
  { id: 2, publishYear: "2024" },
  { id: 3, publishYear: "2023" },
  { id: 4, publishYear: "2022" },
  { id: 5, publishYear: "2021" },
];
const categories = [
  { id: 1, category: "Fiction" },
  { id: 2, category: "Mystery" },
  { id: 3, category: "Science-Fiction" },
  { id: 4, category: "Fantasy" },
  { id: 5, category: "Historical-Fiction" },
  { id: 6, category: "Romance" },
  { id: 7, category: "Thriller" },
  { id: 8, category: "Non-fiction" },
  { id: 9, category: "Biography" },
  { id: 10, category: "Self-Help" },
];

const FilterOptions = () => {
  const handleFilter = (filterQuery: string) => {
    // Split author name by spaces
    const filterQueryParts = filterQuery.split(/[-\s]+/);
    console.log(filterQueryParts);

    const query = filterQueryParts
      .map((part: string) => `searchTerm=${part}`)
      .join("&");

    // Navigate to the books page with the constructed author query parameter

    window.location.href = `/books?${query}`;
  };
  return (
    <div className="w-[30%] hidden md:block h-screen">
      <h2 className="text-2xl my-2 font-semibold">Filter Options</h2>
      <Accordion
        defaultValue="item-1"
        type="single"
        collapsible
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
                    onClick={() => handleFilter(category.category)}
                    id={category.category}
                  />
                  <Label className="truncate" htmlFor={category.category}>
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
                  onClick={() => handleFilter(writer.authorName)}
                  id={writer.authorName}
                />
                <Label className="truncate" htmlFor={writer.authorName}>
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
          {years.map((publishYear) => (
            <AccordionContent key={publishYear.id}>
              <div className="flex items-center space-x-3">
                <Checkbox
                  onClick={() => handleFilter(publishYear.publishYear)}
                  id={publishYear.publishYear}
                />
                <Label className="truncate" htmlFor={publishYear.publishYear}>
                  {publishYear.publishYear}
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
