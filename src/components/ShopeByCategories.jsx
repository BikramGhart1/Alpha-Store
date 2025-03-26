import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Smartphones", image: "/categoryimg/smartphones.png" },
  { name: "Smartwatch", image: "/categoryimg/smartwatch.png" },
  { name: "Earbuds", image: "/categoryimg/earbuds.png" },
  { name: "Speakers", image: "/categoryimg/speakers.png" },
  { name: "Drones", image: "/categoryimg/drones.png" },
  { name: "Laptops", image: "/categoryimg/laptops.png" },
];

export default function ShopByCategories() {
  const navigate = useNavigate();
  return (
    <section className="section px-5">
      <p className="text-3xl font-semibold text-black mb-6">Shop By Categories</p>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-[#004080] flex justify-between items-center p-5 rounded-lg text-white">
          <div>
            <p className="text-2xl font-medium">Smartphones</p>
            <button className="text-sm cursor-pointer opacity-75 hover:opacity-100">VIEW ALL</button>
          </div>
          <div className="pl-5">
            <img
              src="/categoryimg/smartphones.png"
              alt="Smartphones"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="bg-[#004080] flex justify-between items-center p-5 rounded-lg text-white">
          <div>
            <p className="text-2xl font-medium">Smartwatch</p>
            <button className="text-sm cursor-pointer opacity-75 hover:opacity-100" 
            onClick={()=>navigate('/watch')}>VIEW ALL</button>
          </div>
          <div className="pl-5">
            <img
              src="/categoryimg/smartwatch.png"
              alt="Smartwatch"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="bg-[#004080] flex justify-between items-center p-5 rounded-lg text-white">
          <div>
            <p className="text-2xl font-medium">Earbuds</p>
            <button className="text-sm cursor-pointer opacity-75 hover:opacity-100">VIEW ALL</button>
          </div>
          <div className="pl-5">
            <img
              src="/categoryimg/earbuds.png"
              alt="Earbuds"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="bg-[#004080] flex justify-between items-center p-5 rounded-lg text-white">
          <div>
            <p className="text-2xl font-medium">Speakers</p>
            <button className="text-sm cursor-pointer opacity-75 hover:opacity-100">VIEW ALL</button>
          </div>
          <div className="pl-5">
            <img
              src="/categoryimg/speakers.png"
              alt="Speakers"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="bg-[#004080] flex justify-between items-center p-5 rounded-lg text-white">
          <div>
            <p className="text-2xl font-medium">Drones</p>
            <button className="text-sm cursor-pointer opacity-75 hover:opacity-100">VIEW ALL</button>
          </div>
          <div className="pl-5">
            <img
              src="/categoryimg/drones.png"
              alt="Drones"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="bg-[#004080] flex justify-between items-center p-5 rounded-lg text-white">
          <div>
            <p className="text-2xl font-medium">Laptops</p>
            <button className="text-sm cursor-pointer opacity-75 hover:opacity-100">VIEW ALL</button>
          </div>
          <div className="pl-5">
            <img
              src="/categoryimg/laptops.png"
              alt="Laptops"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
