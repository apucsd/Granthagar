import Banner from "@/components/home/Banner";
import BooksCategory from "@/components/home/BooksCategory";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import NewBooks from "@/components/home/NewBooks";
import Slider from "@/components/home/Slider";
import TopRatedBooks from "@/components/home/TopRated";

export default function Home() {
  return (
    <div>
      <Slider />
      <BooksCategory />
      <FeaturedBooks />
      <NewBooks />
      <TopRatedBooks />
      <Banner />
    </div>
  );
}
