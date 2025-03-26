import React from "react";
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
  return (
    <section className="section flex flex-col borderBottom">
      <div className="flex flex-row justify-between pb-4 items-center">
        <h2 className="sectionHeader text-xl sm:text-2xl">Shop By Brands</h2>
        <p className="flex-1 h-1 w-full bg-cardBorderShadow rounded-md mx-2"></p>
        <button 
          className="border-2 border-solid border-cardBorderShadow px-3 py-1 rounded-3xl cursor-pointer text-sm sm:text-base"
          aria-label="View All Brands"
        >
          View All
        </button>
      </div>

      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex space-x-4 md:space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{ display: "flex", whiteSpace: "nowrap" }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="bg-[#003366] p-2 md:p-4 rounded-xl w-24 h-24 md:w-32 md:h-32 flex justify-center items-center shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}