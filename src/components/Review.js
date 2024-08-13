// src/components/Review.js
import React from 'react';
import '../styles/Review.css'; // Ensure the path is correct based on your file structure
import reviewImage1 from '../assets/rev22.jpg'; // Replace with actual image paths
import reviewImage2 from '../assets/rev11.jpg';
import reviewImage3 from '../assets/rev33.jpg';
import reviewImage4 from '../assets/rev44.jpg';


import reviewImage5 from '../assets/rev88.jpg'; // Replace with actual image paths
import reviewImage6 from '../assets/rev55.jpg';
import reviewImage7 from '../assets/rev66.jpg';
import reviewImage8 from '../assets/rev77.jpg';

const Review = () => {
  return (
        <div className="rev-section"><h2 className="rev-heading">Best Clients</h2>
    <div className="rev-container">
      <div className="rev-image-container">
       
        <img src={reviewImage1} alt="Review 1" />
      </div>
      <div className="rev-image-container">
        
        <img src={reviewImage2} alt="Review 2" />
      </div>
      <div className="rev-image-container">
        
        <img src={reviewImage3} alt="Review 3" />
      </div>
      <div className="rev-image-container">
        
        <img src={reviewImage4} alt="Review 4" />
      </div>
    </div>





<div className="rev-container">
        <div className="rev-image-container">
          
          <img src={reviewImage5} alt="Review 1" />
        </div>
        <div className="rev-image-container">
          
          <img src={reviewImage6} alt="Review 2" />
        </div>
        <div className="rev-image-container">
          
          <img src={reviewImage7} alt="Review 3" />
        </div>
        <div className="rev-image-container">
          
          <img src={reviewImage8} alt="Review 4" />
        </div>




        </div> </div>
  );
};

export default Review;
