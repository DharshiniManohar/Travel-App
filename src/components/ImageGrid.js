import React from 'react';
import '../styles/ImageGrid.css';


import image1 from '../assets/i1.jpg';
import image2 from '../assets/i2.png';
import image3 from '../assets/i3.jpg';
import image4 from '../assets/i4.jpg';
import image5 from '../assets/ii5.png';




const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="row">
        <div className="image-container large">
          <div className="overlay">
            <div className="text">Indian tour packages</div>
            <div className="subtext">29 tours</div>
          </div>
          <img src={image1} alt="Large" />
        </div>
        <div className="image-container small">
          <div className="overlay">
            <div className="text">Honeymoon packages</div>
            <div className="subtext">126 tours</div>
          </div>
          <img src={image2} alt="Small" />
        </div>
      </div>
      <div className="row">
        <div className="image-container">
          <div className="overlay">
            <div className="text">International</div>
            <div className="subtext">87 tours</div>
          </div>
          <img src={image3} alt="Image 1" />
        </div>
        <div className="image-container">
          <div className="overlay">
            <div className="text">Asian packages</div>
            <div className="subtext">56 tours</div>
          </div>
          <img src={image4} alt="Image 2" />
        </div>
        <div className="image-container">
          <div className="overlay">
            <div className="text">Educational</div>
            <div className="subtext">154 tours</div>
          </div>
          <img src={image5} alt="Image 3" />
          
        </div>
        

      </div>
    </div>
  );
};

export default ImageGrid;
