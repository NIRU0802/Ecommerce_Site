"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from "@/data/products";
import { useGender } from "@/context/GenderContext"; // ✅ Import the gender context

const Carousel = () => {
  const { gender } = useGender(); // 🔥 Current selected gender: 'men' or 'women'
  const currentSlides = slides[gender]; // 👈 Pick slides dynamically

  return (
    <div className="flex justify-center items-center mt-0">
      <div className="w-full max-w-[90rem] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-lg shadow-lg"
        >
          {currentSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link href={slide.href}>
                <Image
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  width={1200}
                  height={400}
                  className="w-full h-[500px] object-cover rounded-lg cursor-pointer"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Below */}
        <div className="custom-pagination mt-4 text-center"></div>
      </div>
    </div>
  );
};

export default Carousel;
