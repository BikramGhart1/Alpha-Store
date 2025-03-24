import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import Blogs from '../../components/Blogs';

const BlogLandingPage = () => {
  return (
    <div className="h-[90vh] w-[90%] mx-auto p-[5px]">
      <div className="w-full h-full overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full max-w-full max-h-full [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-70 [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination]:bottom-4"
        >
          <SwiperSlide>
            <img
              src="/homepagecarousel/banner1.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/homepagecarousel/banner2.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/homepagecarousel/banner.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/homepagecarousel/banner3.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    
    </div>
  );
};

export default BlogLandingPage;