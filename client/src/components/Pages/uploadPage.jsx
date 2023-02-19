import React, { useState } from 'react';
import axios from "axios";
import '../../styles/main.css';
import '../../styles/upload.css';
import {
  useParams
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import placeholderImage from '../../img/upload/sample.png';

function UploadImage() {
  const [image, setImage] = useState(null);
  const [finalImg, setfinalImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const  { id } = useParams();
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    setfinalImage(selectedImage)
    reader.onload = () => {
      if (reader.readyState === 2) {

        setImage(reader.result);
        setFileName(selectedImage.name);
      }
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleSubmitFile = () => {
  
    if (finalImg !== null) {

      const formData = new FormData();
      formData.append('file', finalImg);
      // the image field name should be similar to your api endpoint field name
      // in my case here the field name is customFile

      axios.post(
        `http://localhost:3001/api/files/singleFile/${id}`,
        formData,
        {
          headers: {
            "Authorization": "",
            "Content-type": "multipart/form-data",
          },
        }
      )
        .then(res => {
          console.log(`Success` + res.data);
          navigate(`/project/${id}`);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }


  return (
    <div className='uploadBox'>
      <div className="d-flex align-item-center mt-3">
        <h2 className="title">Upload You Pictures:</h2>
      </div>
      {image ? (
        <div className='imageBox'>
          <img src={image} alt="uploaded image" />
        </div>
      ) : (
        <div className='imageBox'>
          <img src={placeholderImage} alt="placeholder" />
        </div>
      )
      }
      <button className="myBtn" onClick={()=> handleSubmitFile()}>Save File</button> 
      <label htmlFor="file-upload" className="myBtn">
        Choose File
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleImageChange}
        className="custom-file-input"
      />
      <span className="custom-file-label">{fileName || 'No file chosen'}</span>
    </div>
  );
}

export default UploadImage;