import React, { useState } from 'react';
import axios from "axios";
import '../../styles/main.css';
import '../../styles/upload.css';

import finalGif from '../../img/recommend/r1.gif'


function ResultPage (){
    return (
        <div className='uploadBox'>
          <div className="d-flex align-item-center mt-3">
            {/* project name fetch from db */}
            <h2 className="title">Your timelapse: Project name</h2>
          </div>
            
            <div className='imageBox'>
            {/* final result gif fetch from db */}
              <img src={finalGif} alt="result gif" />
            </div>

            {/* onclick save the result to db */}
            <button className="myBtn">Save and Publish</button>   

        </div>
      );
}

export default ResultPage