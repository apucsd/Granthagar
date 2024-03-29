import { Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { NavigationMenuItem } from "./navigation-menu";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";
import debounce from "lodash/debounce";
import { useEffect, useState } from "react";
import { TBook } from "@/types/index.type";
import SearchBookCard from "./card/SearchBookCard";
import Link from "next/link";

const SearchBook = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const handleOnSearchInput = debounce(async (search: string) => {
    if (search.length > 0) {
      const { data } = await getBooksByQuery({ searchTerm: search });
      setSearchBooks(data);
    } else {
      setSearchBooks([]);
    }
  }, 200);
  useEffect(() => {
    handleOnSearchInput(searchValue);
  }, [searchValue, handleOnSearchInput]);
  const handleBookClick = () => {
    setSearchValue(""); // Reset search text to empty when a book is clicked
    setSearchBooks([]); // Clear search results
  };
  return (
    <NavigationMenuItem className="hidden md:flex  relative">
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="lg:w-[500px] md:w-[300px] w-full"
        placeholder="Search your favorites books..."
      />

      <Button
        onClick={handleBookClick}
        className="absolute rounded-none rounded-r text-sm end-0 px-3 py-0"
      >
        <Link href={`/books?searchTerm=${searchValue}`}>
          <Search />
        </Link>
      </Button>

      {searchBooks.length > 0 && (
        <div className=" absolute min-h-12 max-h-[80vh] p-2 top-0 mt-12 overflow-y-auto bg-white shadow-primary rounded-sm shadow-2xl w-full md:flex flex-col z-50">
          {searchBooks.map((searchBook: TBook) => (
            <div key={searchBook._id}>
              <SearchBookCard
                handleBookClick={handleBookClick}
                {...searchBook}
              />
            </div>
          ))}
        </div>
      )}
    </NavigationMenuItem>
  );
};

export default SearchBook;
