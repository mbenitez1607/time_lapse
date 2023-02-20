import React, { useState, useEffect } from 'react';
import '../../styles/main.css'
import UserProject from './swiper/userProject-swiper'
import Recommend from './swiper/recommend-swiper'

const Homepage = () =>{
    return(
        <div className='container mb-4'>

            <div className="d-flex align-item-center container mb-0">
                <h2 className="title">Your Timelapse:</h2>
            </div>

            <UserProject />
            
            <div className="d-flex align-item-center container mt-3">
                <h2 className="title">Time lapse You Might Like:</h2>
            </div>

            <Recommend />

        </div>
    )
}

export default Homepage