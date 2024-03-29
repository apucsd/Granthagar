import BooksCategory from "@/components/pages/home/BooksCategory";
import FeaturedBooks from "@/components/pages/home/FeaturedBooks";
import NewBooks from "@/components/pages/home/NewBooks";
import ScrollToTop from "@/components/pages/home/ScrollToTop";
import Slider from "@/components/pages/home/Slider";
import Subscribe from "@/components/pages/home/Subscribe";
import TopRatedBooks from "@/components/pages/home/TopRated";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";

export default async function Home() {
  const { data: newBooks } = await getBooksByQuery({});
  return (
    <div>
      <Slider />
      <BooksCategory />
      <FeaturedBooks />
      <NewBooks newBooks={newBooks} />
      <TopRatedBooks />
      <Subscribe />
      <ScrollToTop />
    </div>
  );
}
