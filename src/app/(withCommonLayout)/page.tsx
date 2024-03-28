import Banner from "@/components/home/Banner";
import BooksCategory from "@/components/home/BooksCategory";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import NewBooks from "@/components/home/NewBooks";
import ScrollToTop from "@/components/home/ScrollToTop";
import Slider from "@/components/home/Slider";
import TopRatedBooks from "@/components/home/TopRated";
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
      <Banner />
      <ScrollToTop />
    </div>
  );
}
