import { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Slide+1",
    "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Slide+2",
    "https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Slide+3"
  ];

  const moveSlide = (direction) => {
    if (direction === -1) {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        {/* Carousel Slides */}
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => moveSlide(-1)}
      >
        &#60;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => moveSlide(1)}
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
