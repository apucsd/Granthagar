import BooksCategory from "@/components/pages/home/BooksCategory";
import FAQ from "@/components/pages/home/FAQ";
import FBMessenger from "@/components/pages/home/FBMessenger";
import FeaturedBooks from "@/components/pages/home/FeaturedBooks";
import HowItWork from "@/components/pages/home/HowItWork";
import NewBooks from "@/components/pages/home/NewBooks";
import ScrollToTop from "@/components/pages/home/ScrollToTop";
import Slider from "@/components/pages/home/Slider";
import Subscribe from "@/components/pages/home/Subscribe";
import Testimonial from "@/components/pages/home/Testimonial";
import TopAuthorBooks from "@/components/pages/home/TopAuthorBooks";
import TopRatedBooks from "@/components/pages/home/TopRated";
import { getBooksByQuery } from "@/services/bookActions/getBookByQuery";

export default async function Home() {
  const { data: newBooks } = await getBooksByQuery({});
  return (
    <div className="overflow-x-hidden">
      <Slider />
      <BooksCategory />
      <FeaturedBooks />
      <NewBooks newBooks={newBooks} />
      <TopAuthorBooks />
      <TopRatedBooks />
      <HowItWork />
      <Testimonial />
      <FAQ />
      <Subscribe />

      <ScrollToTop />
      <FBMessenger />
    </div>
  );
}
