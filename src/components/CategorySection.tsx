"use client";

import { useGender } from "@/context/GenderContext";
import Image from "next/image";

const categories = {
  men: [
    {
      name: "Oversized T-Shirts",
      image:
        "https://i.pinimg.com/736x/ef/76/a5/ef76a585e40085e1172df394040f0c24.jpg",
    },
    {
      name: "Shirts",
      image:
        "https://i.pinimg.com/736x/9b/ba/80/9bba8030d317d4b46bf2da9822956214.jpg",
    },
    {
      name: "Polos",
      image:
        "https://i.pinimg.com/736x/ed/72/c2/ed72c2de1118fd6e28d991d6c7aebf8e.jpg",
    },
    {
      name: "Jeans",
      image:
        "https://i.pinimg.com/736x/36/ce/43/36ce43344b92305e283cd489b906641a.jpg",
    },
    {
      name: "Shorts",
      image:
        "https://i.pinimg.com/736x/26/c3/ba/26c3bafa235dc89a40f9b50a7bb7a2a5.jpg",
    },
    {
      name: "Sneakers",
      image:
        "https://i.pinimg.com/736x/64/7c/ad/647cad16ede10f3ac32e84c8f14831e9.jpg",
    },
    {
      name: "Jackets",
      image:
        "https://i.pinimg.com/736x/e3/76/ae/e376aef7c23443df26dd9c95e20024a1.jpg",
    },
    {
      name: "Caps",
      image:
        "https://i.pinimg.com/736x/79/f3/c2/79f3c28216213f1b67876e029b601360.jpg",
    },
  ],
  women: [
    {
      name: "Tops",
      image:
        "https://i.pinimg.com/736x/11/92/cc/1192cc157f0f8877702538fd82f87118.jpg",
    },
    {
      name: "Dresses",
      image:
        "https://i.pinimg.com/736x/1c/98/40/1c98404a4006de73e3d822169124468e.jpg",
    },
    {
      name: "Jumpsuits",
      image:
        "https://i.pinimg.com/736x/c4/3a/cb/c43acb2973402787f0bf663915edad86.jpg",
    },
    {
      name: "Bottoms",
      image:
        "https://i.pinimg.com/736x/9a/9e/ff/9a9eff689410bb893ea3531c96eec52e.jpg",
    },
    {
      name: "Heels",
      image:
        "https://i.pinimg.com/736x/3a/4c/e9/3a4ce95c2901c862c0ea7067c99623db.jpg",
    },
    {
      name: "Sneakers",
      image:
        "https://i.pinimg.com/736x/81/95/b9/8195b9668fc84dda707808d5cac5e598.jpg",
    },
    {
      name: "Shrugs",
      image:
        "https://i.pinimg.com/736x/10/86/f9/1086f9d9bbb57d4316b796ea9f1bd998.jpg",
    },
    {
      name: "Accessories",
      image:
        "https://i.pinimg.com/736x/9a/dc/86/9adc86c318e86748d7694d81bf1d885a.jpg",
    },
  ],
};

const CategorySection = () => {
  const { gender } = useGender();
  const items = categories[gender];

  return (
    <section className="px-4 max-w-7xl mx-auto mt-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center uppercase">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 uppercase">
        {items.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-80">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 text-center bg-white">
              <h3 className="text-base font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
