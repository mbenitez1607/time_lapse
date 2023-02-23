import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import '../../styles/main.css';
import '../../styles/upload.css';
import {
  useParams
} from "react-router-dom";


function ResultPage (){

  const  allValues = useParams();
  const key = Object.keys(allValues)[0]
  const finalImg = allValues[key]
  const navigate = useNavigate();

  // Function to download the final image
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = `data:image/png;base64, ${finalImg}`;
    link.download = 'finalImage.gif';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='uploadBox mb-4'>
      <div className="d-flex align-item-center mt-3">
        {/* project name fetch from db */}
        <h2 className="title p-3">Your timelapse: Project name</h2>
      </div>
        
      <div className='imageBox'>
        {/* final result gif fetch from db */}
        <img src={`data:image/png;base64, ${finalImg}`} alt="" />
      </div>

      <div className='btnBox'>
        {/* button to download the final image */}
        <button className="myBtn mr-3" onClick={downloadImage}>Download Image</button>
        {/* onclick save the result to db */}
        <button className="myBtn" onClick={()=>navigate(`/home`)}>Return</button>   
      </div>
      

    </div>
  );
} 

export default ResultPage