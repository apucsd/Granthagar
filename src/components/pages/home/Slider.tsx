/* eslint-disable @next/next/no-img-element */
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Container from "../../ui/Container";

const Slider = () => {
  const data = [
    {
      name: "something",
      url: "https://www.panjeree.org/DIR/Com/ECO/banner/page_banner/Category1.png?id=20240213",
    },
    {
      name: "something",
      url: "https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner46.png?id=20240213",
    },
    {
      name: "something",
      url: "https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner52.png?id=20240213",
    },
    {
      name: "something",
      url: "https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner45.png?id=20240213",
    },
    {
      name: "something",
      url: "https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner48.png?id=20240213",
    },
    {
      name: "something",
      url: "https://www.panjeree.org/DIR/Com/ECO/banner/main_banner/HomeBanner44.png?id=20240213",
    },
  ];
  return (
    <Container>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-t md:mt-1 mt-8"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="h-[40vh] md:h-[50vh] relative lg:h-[65vh] w-full m-5">
              <Image
                priority={true}
                fill
                src={item.url}
                alt=""
                className="object-center rounded-t w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default Slider;
