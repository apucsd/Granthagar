import Link from "next/link";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import BookCard from "../ui/card/BookCard";
import { TBook } from "@/types/index.type";
import { getBooksByFilter } from "@/services/bookActions/getBookByQuery";

const TopRatedBooks = async () => {
  const { data: topRatedBooks } = await getBooksByFilter("ratings=5");
  return (
    <Container>
      <div className="flex  justify-between gap-1 items-center my-5">
        <h1 className="text-4xl font-semibold text-primary my-3 text-nowrap">
          Top Rated Books
        </h1>
        <hr className="h-0.5 bg-primary w-full" />
        <Link href="/books">
          <Button className="gap-1 text-primary" variant="outline">
            View All <ChevronRight />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-5 place-items-center  gap-3">
        {topRatedBooks.slice(0, 5).map((book: TBook) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </Container>
  );
};

export default TopRatedBooks;
