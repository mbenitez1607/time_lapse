import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation} from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import '../../../styles/swiper.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrashCan} from '@fortawesome/free-regular-svg-icons';


import { Link } from "react-router-dom";


export default function UploadPicture(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}

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

      navigation
      pagination={{ clickable: true }}

      className="mySwiper"
    >

      {props.imageData.map((image, index) => (
        <SwiperSlide >

          <div className='myCard text-decoration-none' >

            <div className="img">
              <img src={`data:image/png;base64, ${image.base64String}`} alt="" />
            </div>

            <div className="text">img {(index == 1 ? 1 : index)+1}</div>

            <div className='function'>
                  <div><FontAwesomeIcon icon={faPenToSquare} color='#01cb88' size='2x'/></div>
                  <div><FontAwesomeIcon icon={faTrashCan} color='#01cb88' size='2x'/></div>
            </div>

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
