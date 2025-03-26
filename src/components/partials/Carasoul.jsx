import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="section flex flex-col w-full relative aspect-[4000/1500] md:aspect-[3125/1083]" // Adjust height for responsiveness
    >
      <SwiperSlide>
        <div className="w-full h-full relative">
          <img src="/images/banner1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full relative">
          <img src="/images/banner2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full relative">
          <img src="/images/banner.jpg" alt="Slide 3" className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full relative">
          <img src="/images/banner3.jpg" alt="Slide 4" className="w-full h-full object-cover" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;