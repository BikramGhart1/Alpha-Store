import React from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Samsung", logo: "/images/samsung.png" },
  { name: "Dell", logo: "/images/dell.png" },
  { name: "Acer", logo: "/images/acer.png" },
  { name: "Apple", logo: "/images/apple.png" },
  { name: "Gigabyte", logo: "/images/gigabyte.png" },
  { name: "ASUS", logo: "/images/asus.png" },
  { name: "MSI", logo: "/images/msi.png" },
  { name: "Lenovo", logo: "/images/lenovo.png" },
];

export default function ShopByBrands() {
  const sliderRef = useRef(null);

  return (
    <section className='section flex flex-col borderBottom'>
      <div className='flex flex-row justify-between pb-4 items-center'>
        <h2 className='sectionHeader'>Shop By Brands</h2>
        <p className='flex-1 h-1 w-full bg-cardBorderShadow rounded-md mx-2'></p>
        <button className='border-4 border-solid border-cardBorderShadow px-4 py-1 rounded-3xl cursor-pointer'>View All Brands</button>
      </div>
      <div className="overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex space-x-4"
          animate={{ x: [0, -500] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="bg-[#003366] p-4 rounded-xl w-40 h-40 flex justify-center items-center shrink-0">
              <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
