import React, { useState } from 'react';
import axios from "axios";
import '../../styles/main.css';
import '../../styles/upload.css';
import {
  useParams
} from "react-router-dom";

import finalGif from '../../img/recommend/r1.gif'



function ResultPage (){

  const  allValues = useParams();
  const key = Object.keys(allValues)[0]
  const finalImg = allValues[key]
    return (
        <div className='uploadBox'>
          <div className="d-flex align-item-center mt-3">
            {/* project name fetch from db */}
            <h2 className="title">Your timelapse: Project name</h2>
          </div>
            
            <div className='imageBox'>
            {/* final result gif fetch from db */}
              <img src={`data:image/png;base64, ${finalImg}`} alt="" />
            </div>

            {/* onclick save the result to db */}
            <button className="myBtn">Return</button>   

        </div>
      );
}

export default ResultPage