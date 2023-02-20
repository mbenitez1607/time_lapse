import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation} from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import '../../../styles/swiper.css'

import r1 from '../../../img/recommend/r1.gif'
import r2 from '../../../img/recommend/r2.gif'
import r3 from '../../../img/recommend/r3.gif'
import r4 from '../../../img/recommend/r4.gif'

export default function recommend() {
  return (
      <Swiper
      modules={[Navigation, Pagination]}

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
  
        pagination={{ clickable: true }}

        className="mySwiper" id="recommend"
      >
        <SwiperSlide >
        <div className='myCard text-decoration-none' >
            <div className="img" >
            <img src={r1} alt="traffic" />
            </div>
            <div className="text">traffic</div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='myCard text-decoration-none'>
            <div className="img" >
            <img src={r2} alt="Environment" />
            </div>
            <div className="text">Environment</div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='myCard text-decoration-none' >
            <div className="img" >
            <img src={r3} alt="sunset" />
            </div>
            <div className="text">Sunset</div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='myCard text-decoration-none' >
            <div className="img" >
              <img src={r4} alt="sunrise" />
            </div>
            <div className="text">sunrise</div>
        </div>
        </SwiperSlide>



      </Swiper>
  );
}
