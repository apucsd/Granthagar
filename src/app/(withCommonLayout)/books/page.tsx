import FilterOptions from "@/components/layouts/FilterOptions";
import Breadcrumbs from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import BookLargeCard from "@/components/ui/card/BookLargeCard";
import React from "react";

const AllBooks = ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  console.log(searchParams, params);
  return (
    <Container>
      <Breadcrumbs />
      <div className="flex gap-5">
        <FilterOptions />
        <div className="w-full px-5 space-y-3">
          <div></div>
          <BookLargeCard />
          <BookLargeCard />
          <BookLargeCard />
          <BookLargeCard />
          <BookLargeCard />
        </div>
      </div>
    </Container>
  );
};

export default AllBooks;
