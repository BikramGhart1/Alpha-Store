import React from "react";

const categories = [
  { name: "Smartphones", image: "/images/smartphones.png" },
  { name: "Smartwatch", image: "/images/smartwatch.png" },
  { name: "Earbuds", image: "/images/earbuds.png" },
  { name: "Speakers", image: "/images/speakers.png" },
  { name: "Drones", image: "/images/drones.png" },
  { name: "Laptops", image: "/images/laptops.png" },
];

export default function ShopByCategories() {
  return (
    <section className="section px-5">
      <p className="text-3xl font-semibold text-black mb-6">Shop By Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#004080] flex justify-between items-center p-5 rounded-lg text-white"
          >
            <div>
              <p className="text-2xl font-medium">{category.name}</p>
              <p className="text-sm cursor-pointer opacity-75 hover:opacity-100">VIEW ALL</p>
            </div>
            <div className="pl-5">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
