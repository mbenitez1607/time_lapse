import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import '../../../styles/swiper.css'

import { Link } from "react-router-dom";


export default function UploadPicture() {
  return (
      <Swiper
        slidesPerView={2}
        spaceBetween={5}

        breakpoints={{
          640: {
            slidesPerView: 3,
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
        <Link className='myCard text-decoration-none' >
            <div className="img" id="d1"></div>
            <div className="text">Day1</div>
        </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to ='/upload' className='myCard text-decoration-none' >
            <div className="img" id="new"></div>
            <div className="text">Upload Picture</div>
        </Link>
        </SwiperSlide>



      </Swiper>
  );
}
