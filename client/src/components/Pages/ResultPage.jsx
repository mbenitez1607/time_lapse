import React, { useState } from 'react';
// import axios from "axios";
import '../../styles/main.css';
import '../../styles/upload.css';
import {
  useParams,
  useNavigate
} from "react-router-dom";


function ResultPage() {

  const allValues = useParams();
  const key = Object.keys(allValues)[0]
  const finalImg = allValues[key]
  const navigate = useNavigate();

  function returnHome() {
    navigate('/home')
  }

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
      <button className="myBtn" onClick={returnHome}>Return</button>
    </div>

  );
}

export default ResultPage