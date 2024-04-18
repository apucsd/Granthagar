"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../ui/Container";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import SwiperButton from "../../ui/SwiperButton";
const BooksCategory = () => {
  const booksCategories = [
    {
      id: 1,
      category: "Literature",
      image_url:
        "https://bdbooks.net/uploads/category/2024/03/05/Standardized-tests1709609015.webp",
      link: "/books?searchTerm=literature",
    },
    {
      id: 3,
      category: "Religion",
      image_url:
        "https://bdbooks.net/uploads/category/2022/09/17/Religious_Books1663391856.webp",
      link: "/books?searchTerm=religion",
    },
    {
      id: 5,
      category: "Education and Academic",
      image_url:
        "https://bdbooks.net/uploads/category/2024/03/04/Junior-secondary1709553582.webp",
      link: "/books?searchTerm=education-academic",
    },
    {
      id: 6,
      category: "Science",
      image_url:
        "https://bdbooks.net/uploads/category/2024/01/09/Career-and-Skill-Development1704778490.webp",
      link: "/books?searchTerm=science",
    },
    {
      id: 7,
      category: "Kids' Books",
      image_url:
        "https://bdbooks.net/uploads/category/2023/11/29/Kids_&_Children_s1701255990.webp",
      link: "/books?searchTerm=kids-books",
    },
    {
      id: 8,
      category: "Magazines",
      image_url:
        "https://bdbooks.net/uploads/category/2023/11/29/Magazine1701255758.webp",
      link: "/books?searchTerm=magazines",
    },
    {
      id: 9,
      category: "Medical Books",
      image_url:
        "https://bdbooks.net/uploads/category/2022/09/17/Medical_Academic_Books1663394058.webp",
      link: "/books?searchTerm=medical-books",
    },
    {
      id: 10,
      category: "Diploma",
      image_url:
        "https://bdbooks.net/uploads/category/2024/03/04/Diploma1709554274.webp",
      link: "/books?searchTerm=diploma",
    },
    {
      id: 11,
      category: "Textbooks",
      image_url:
        "https://bdbooks.net/uploads/category/2023/11/29/SSC_Dakhil_Books1701255790.webp",
      link: "/books?searchTerm=textbooks",
    },
  ];

  return (
    <Container>
      <div className="my-10">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 4,
            },
            639: {
              slidesPerView: 4,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 8,
            },
          }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper rounded-t md:mt-1 mt-8"
        >
          {booksCategories.map((item, i) => (
            <SwiperSlide key={i}>
              <Link
                href={`${item.link}`}
                className="hover:text-primary hover:cursor-pointer text-gray-700"
              >
                <div className="w-[60px] md:w-[80px] h-[80px] mx-auto">
                  <Image
                    height={80}
                    width={80}
                    src={item.image_url}
                    alt=""
                    className="object-center rounded-full mx-auto"
                  />
                </div>
                <h2 className="text-center my-2 font-semibold">
                  {item.category}
                </h2>
              </Link>
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

export default BooksCategory;
