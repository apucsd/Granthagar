import FilterOptions from "@/components/layouts/FilterOptions";
import Breadcrumbs from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import FilterByDate from "@/components/ui/FilterByDate";
import NotFoundProduct from "@/components/ui/NotFound";
import BookLargeCard from "@/components/ui/card/BookLargeCard";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";
import { TBook } from "@/types/index.type";
import React from "react";

const AllBooks = async ({ searchParams }: { searchParams: any }) => {
  // console.log(searchParams);
  const { data } = await getBooksByQuery(searchParams);

  return (
    <Container>
      <Breadcrumbs />
      <div className="flex gap-2">
        <FilterOptions />
        <div className="w-full px-5 space-y-3">
          <div className="flex justify-between bg-slate-50 items-center p-1 px-2">
            <h1>
              <span className="font-semibold">{data.length}</span> Products
              found
            </h1>
            <FilterByDate />
          </div>

          <div>
            {data.length > 0 ? (
              <div>
                {data.map((singleBook: TBook) => (
                  <BookLargeCard {...singleBook} key={singleBook._id} />
                ))}
              </div>
            ) : (
              <NotFoundProduct />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllBooks;
