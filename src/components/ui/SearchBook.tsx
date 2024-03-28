import { Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { NavigationMenuItem } from "./navigation-menu";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";
import debounce from "lodash/debounce";
const SearchBook = () => {
  const handleSearch = debounce(async (search: string) => {
    console.log(search);
    if (search) {
      const { data } = await getBooksByQuery({ searchTerm: search });
      console.log(data);
    }
  }, 2000);
  return (
    <NavigationMenuItem className="hidden md:flex  relative">
      <Input
        onChange={(e) => handleSearch(e.target.value)}
        className="lg:w-[500px] md:w-[300px] w-full"
        placeholder="Search your favorites books..."
      />

      <Button className="absolute text-sm end-0 px-3 py-0" type="submit">
        <Search />
      </Button>
    </NavigationMenuItem>
  );
};

export default SearchBook;
