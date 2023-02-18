import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import '../../../styles/swiper.css'


export default function UserProject() {
  return (
      <Swiper
        slidesPerView={2}
        spaceBetween={5}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        }}

        className="mySwiper"
      >
        <SwiperSlide >
        <a className='myCard text-decoration-none' href="#">
            <div className="img" id="p1">
              <img src="" alt="" />
            </div>
            <div className="text">Project 1: Traffic</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a className='myCard text-decoration-none' href="#">
            <div className="img" id="new"></div>
            <div className="text">Create New Project</div>
        </a>
        </SwiperSlide>



      </Swiper>
  );
}
