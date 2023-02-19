import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import '../../../styles/swiper.css'

import { Link } from "react-router-dom";


export default function UploadPicture(props) {
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
      {/* <SwiperSlide >
        <Link className='myCard text-decoration-none' >
            <div className="img" id="d1"></div>
            <div className="text">Day1</div>
        </Link>
        </SwiperSlide> */}

      {props.imageData.map((image, index) => (
        <SwiperSlide >

          <div className='myCard text-decoration-none' >
            <img className="img" height={400} width={215} src={`data:image/png;base64, ${image.base64String}`} alt="" />
            <div className="text">img {index == 1 ? 1 : index}</div>
          </div>
        </SwiperSlide>
      ))}

      <SwiperSlide>
        <Link to={`/upload/${props.projectId}`} className='myCard text-decoration-none' >
          <div className="img" id="new"></div>
          <div className="text">Upload Picture</div>
          
        </Link>
      </SwiperSlide>

    </Swiper>

  );
}
