"use client";

import { useGender } from "@/context/GenderContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { newarrivals } from "@/data/products";

const NewArrivals = () => {
  const { gender } = useGender();
  const items = newarrivals[gender];

  return (
    <section className="my-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center uppercase">New Arrivals</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/product/${item.id}`}>
              <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="h-px bg-gray-300 my-2" />
                  <p className="text-sm text-gray-500">{item.type}</p>
                  <p className="text-base font-bold mt-1 text-black">
                    {item.price}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
