import React, { useRef } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Samsung", logo: "/brandimg/samsung.png" },
  { name: "Dell", logo: "/brandimg/dell.png" },
  { name: "Acer", logo: "/brandimg/acer.png" },
  { name: "Apple", logo: "/brandimg/apple.png" },
  { name: "Gigabyte", logo: "/brandimg/gigabyte.png" },
  { name: "ASUS", logo: "/brandimg/asus.png" },
  { name: "MSI", logo: "/brandimg/msi.png" },
  { name: "Lenovo", logo: "/brandimg/lenovo.png" },
];

export default function ShopByBrands() {
  return (
    <section className="section flex flex-col borderBottom">
      <div className="flex flex-row justify-between pb-4 items-center">
        <h2 className="sectionHeader">Shop By Brands</h2>
        <p className="flex-1 h-1 w-full bg-cardBorderShadow rounded-md mx-2"></p>
        <button 
          className="border-4 border-solid border-cardBorderShadow px-4 py-1 rounded-3xl cursor-pointer"
          aria-label="View All Brands"
        >
          View All Brands
        </button>
      </div>
      <div className='flex flex-row justify-between'>
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
       <img src="/images/Rectangle 14.png" alt="" />
      </div>
      <p></p>
      <p></p>
    </section>
  );
}
