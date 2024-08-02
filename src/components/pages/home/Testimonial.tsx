"use client";
import Container from "@/components/ui/Container";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperButton from "@/components/ui/SwiperButton";

type Testimonial = {
  name: string;
  title: string;
  profession: string;
  feedbackHeader: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Shafiqul Islam",
    title: "Dhaka, Bangladesh",
    profession: "Software Engineer",
    feedbackHeader: "Amazing Collection of Books!",
    feedback:
      "Granthagar has an amazing collection of books! Their service is top-notch and delivery is always on time. I found rare books that I couldn't find anywhere else. Highly recommended!",
  },
  {
    name: "Sumaiya Akter",
    title: "Chittagong, Bangladesh",
    profession: "Lecturer",
    feedbackHeader: "Impressive Variety and Customer Support",
    feedback:
      "I am impressed with the variety of books available at Granthagar. The customer support is very helpful and the website is easy to navigate. I will definitely keep ordering from here.",
  },
  {
    name: "Tanvir Rahman",
    title: "Khulna, Bangladesh",
    profession: "Student",
    feedbackHeader: "Affordable Prices and Reliable Delivery",
    feedback:
      "As a student, I appreciate the affordable prices and wide range of academic books available at Granthagar. Their delivery is fast and reliable. I always find what I need.",
  },
  {
    name: "Shafiqul Islam",
    title: "Dhaka, Bangladesh",
    profession: "Software Engineer",
    feedbackHeader: "Top-notch Service!",
    feedback:
      "Granthagar has an amazing collection of books! Their service is top-notch and delivery is always on time. I found rare books that I couldn't find anywhere else. Highly recommended!",
  },
  {
    name: "Sumaiya Akter",
    title: "Chittagong, Bangladesh",
    profession: "Lecturer",
    feedbackHeader: "Helpful Customer Support",
    feedback:
      "I am impressed with the variety of books available at Granthagar. The customer support is very helpful and the website is easy to navigate. I will definitely keep ordering from here.",
  },
  {
    name: "Tanvir Rahman",
    title: "Khulna, Bangladesh",
    profession: "Student",
    feedbackHeader: "Wide Range of Academic Books",
    feedback:
      "As a student, I appreciate the affordable prices and wide range of academic books available at Granthagar. Their delivery is fast and reliable. I always find what I need.",
  },
];

export default function Testimonial() {
  return (
    <Container>
      <div>
        <div className="max-w-2xl mx-auto my-12 text-center ">
          <h2 className="text-2xl md:text-4xl text-primary font-extrabold mx-auto lg:text-5xl">
            What our happy client say
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
            Curated Gems for Every Reading Mood!
          </p>
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
              slidesPerView: 2,
            },
          }}
          autoplay={true}
          loop={true}
          autoHeight={true}
          modules={[Autoplay]}
          className="mySwiper rounded-t md:mt-1 mt-8  h-full flex flex-col flex-grow"
        >
          {testimonials
            ?.slice(0, 6)
            .map((testimonial: Testimonial, id: number) => (
              <SwiperSlide className="mx-2 h-full" key={id}>
                <TestimonialCard key={id} testimonial={testimonial} />
              </SwiperSlide>
            ))}
          <div className="mt-5">
            <SwiperButton />
          </div>
        </Swiper>
      </div>
    </Container>
  );
}
