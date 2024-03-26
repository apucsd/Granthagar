import FilterOptions from "@/components/layouts/FilterOptions";
import Breadcrumbs from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import FilterByDate from "@/components/ui/FilterByDate";
import BookLargeCard from "@/components/ui/card/BookLargeCard";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";
import { TBook } from "@/types/index.type";
import React from "react";

const AllBooks = async ({ searchParams }: { searchParams: any }) => {
  const { data } = await getBooksByQuery(searchParams);

  return (
    <Container>
      <Breadcrumbs />
      <div className="flex gap-5">
        <FilterOptions />
        <div className="w-full px-5 space-y-3">
          <div className="flex justify-end">
            <FilterByDate />
          </div>

          <div>
            {data.map((singleBook: TBook) => (
              <BookLargeCard {...singleBook} key={singleBook._id} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllBooks;
