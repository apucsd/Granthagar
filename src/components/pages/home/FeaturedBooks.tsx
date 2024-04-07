import Container from "../../ui/Container";

import BookCard from "../../ui/card/BookCard";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";
import { TBook } from "@/types/index.type";
import BookLargeCard from "../../ui/card/BookLargeCard";
const FeaturedBooks = async () => {
  const { data: featuredBooks } = await getBooksByQuery({});
  // console.log(data);
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-5 justify-center items-center">
        <div className=" my-3">
          <h1 className="text-2xl md:text-4xl font-semibold text-primary  text-nowrap">
            Featured Books
          </h1>

          <p className=" mt-3 ">
            Discover Your Next Literary Adventure: Curated Gems for Every
            Reading Mood!
          </p>
          <br />
          <div className="mt-5">
            <BookLargeCard {...featuredBooks[1]} />
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 place-items-center  gap-3">
          {featuredBooks.slice(2, 5).map((book: TBook) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedBooks;
