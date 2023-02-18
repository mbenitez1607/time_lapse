import React, { useState } from 'react';
import '../../styles/main.css';
import '../../styles/upload.css';

import placeholderImage from '../../img/upload/sample.png';

function UploadImage() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setFileName(selectedImage.name);
      }
    };

    reader.readAsDataURL(selectedImage);
  };

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
      <label htmlFor="file-upload" className="myBtn">
        Choose File
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleImageChange}
        className="custom-file-input"
      />
      <span className="custom-file-label">{fileName||'No file chosen'}</span>
    </div>
  );
}

export default UploadImage;