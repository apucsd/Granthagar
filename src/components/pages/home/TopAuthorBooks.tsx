"use client";
import Container from "../../ui/Container";
import BookCard from "../../ui/card/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Button } from "../../ui/button";
import { ChevronRight } from "lucide-react";
import SwiperButton from "../../ui/SwiperButton";
import { useGetAllBooksQuery } from "@/redux/api/booksApi";
import Loading from "@/app/loading";
import { TBook } from "@/types/index.type";
const TopAuthorBooks = () => {
  const { data, isFetching } = useGetAllBooksQuery([
    { name: "searchTerm", value: "Humayun" },
  ]);
  // console.log(data);
  if (isFetching) {
    return <Loading />;
  }
  return (
    <Container>
      <div className="my-10">
        <div className="flex  justify-between gap-1 items-center my-5">
          <h1 className="text-4xl font-semibold text-primary my-3 text-nowrap">
            Humayun Ahmed
          </h1>
          <hr className="h-0.5 bg-primary w-full" />
          <Link href="/books">
            <Button className="gap-1 text-primary" variant="outline">
              View All <ChevronRight />
            </Button>
          </Link>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
          }}
          autoplay={true}
          loop={true}
          autoHeight={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper rounded-t md:mt-1 mt-8  h-full flex flex-col flex-grow"
        >
          {data?.data?.slice(0, 12).map((item: TBook) => (
            <SwiperSlide className="" key={item._id}>
              <BookCard {...item} />
            </SwiperSlide>
          ))}
          <div className="mt-5">
            <SwiperButton />
          </div>
        </Swiper>
      </div>
    </Container>
  );
};

export default TopAuthorBooks;
