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
import img1 from "@/assets/slider/img1.png";
import img2 from "@/assets/slider/img2.png";
import img3 from "@/assets/slider/img3.png";
import img4 from "@/assets/slider/img4.png";
import img5 from "@/assets/slider/img5.png";
const Slider = () => {
  const data = [
    {
      id: "1",
      url: img1,
    },
    {
      id: "2",
      url: img2,
    },
    {
      id: "3",
      url: img3,
    },
    {
      id: "4",
      url: img4,
    },
    {
      id: "5",
      url: img5,
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
