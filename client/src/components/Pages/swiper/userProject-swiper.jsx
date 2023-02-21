import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getAllProjects } from "../../../utils/API";

import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation} from 'swiper';
import { useNavigate } from 'react-router-dom';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import '../../../styles/swiper.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrashCan} from '@fortawesome/free-regular-svg-icons';

import ProjectImg from '../../../img/userProject/project.jpg'


export default function UserProject() {
  const [projects, setProject] = useState([])
  const navigate = useNavigate();
  
  const loadAllProjects = async () => {
    try {
      const userProjects = await getAllProjects()
      const { status } = userProjects
      if (status == 401){ 
        localStorage.removeItem("@token")
        navigate('/login') 
        return 
      }
      if (status == 200) setProject(userProjects.data.data)
      else {
        alert("Ooops something went wrong!!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadAllProjects()
  }, []);


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

      {projects.map((project, index) => (
        <SwiperSlide >
          <Link to ={`/project/${project._id}`} className='myCard text-decoration-none'>

              <div className="img">
                <img src={ProjectImg} alt="project" />
              </div>
              <div className="text">{project.name}</div>
              <div className='function'>
                  <div><FontAwesomeIcon icon={faPenToSquare} color='#01cb88' size='2x'/></div>
                  <div><FontAwesomeIcon icon={faTrashCan} color='#01cb88' size='2x'/></div>
              </div>

          </Link>
        </SwiperSlide>
      ))}


      <SwiperSlide>
        <Link to='/wizard' className='myCard text-decoration-none' >
          <div className="img" id="new"></div>
          <div className="text">Create New Project</div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
