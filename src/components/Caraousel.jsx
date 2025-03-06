import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const images = [
  "https://source.unsplash.com/800x400/?nature,water",
  "https://source.unsplash.com/800x400/?city,night",
  "https://source.unsplash.com/800x400/?mountains",
  "https://source.unsplash.com/800x400/?forest",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="carousel"
          className="w-full h-64 object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <Button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </Button>
      <Button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </Button>
    </div>
  );
}

