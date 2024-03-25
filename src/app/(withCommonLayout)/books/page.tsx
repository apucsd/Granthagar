import FilterOptions from "@/components/layouts/FilterOptions";
import Breadcrumbs from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import React from "react";

const AllBooks = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <Container>
      <Breadcrumbs />
      <div className="flex gap-5">
        <FilterOptions />
        <div className="w-full px-5">all data hsow hre</div>
      </div>
    </Container>
  );
};

export default AllBooks;
