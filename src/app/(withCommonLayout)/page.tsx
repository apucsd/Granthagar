import Banner from "@/components/home/Banner";
import BooksCategory from "@/components/home/BooksCategory";
import NewBooks from "@/components/home/NewBooks";
import Slider from "@/components/home/Slider";
import TopRatedBooks from "@/components/home/TopRated";

export default function Home() {
  return (
    <div>
      <Slider />
      <BooksCategory />
      <NewBooks />
      <TopRatedBooks />
      <Banner />
    </div>
  );
}
