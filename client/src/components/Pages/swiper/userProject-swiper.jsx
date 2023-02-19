import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import '../../../styles/swiper.css'
import { getAllProjects } from "../../../utils/API";


export default function UserProject() {
  const [projects, setProject] = useState([])

  const loadAllProjects = async () => {
    try {
      const userProjects = await getAllProjects()
      const { status } = userProjects
      if (status == 200) setProject(userProjects.data)
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

      {projects.map((project, index) => (
        <SwiperSlide >
          <Link to ={`/project/${project._id}`} className='myCard text-decoration-none'>
            <a className='myCard text-decoration-none' href="#">
              <div className="img" id="p1"></div>
              <div className="text">{project.name}</div>
            </a>
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
