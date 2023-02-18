import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import '../../../styles/swiper.css'

export default function Categories() {
  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={10}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }}

        className="mySwiper"
      >
        <SwiperSlide >
        <a className='myCard text-decoration-none' href="#">
            <div className="img" id="c1"></div>
            <div className="text">Plant</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a className='myCard text-decoration-none' href="#">
            <div className="img" id="c2"></div>
            <div className="text">Environment</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a className='myCard text-decoration-none' href="#">
            <div className="img" id="c3"></div>
            <div className="text">City</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a className='myCard text-decoration-none' href="#">
            <div className="img" id="c4"></div>
            <div className="text">Pet</div>
        </a>
        </SwiperSlide>


      </Swiper>
  );
}
