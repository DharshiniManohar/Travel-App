// src/components/Prize.js
import React from 'react';
import '../styles/Prize.css'; // Ensure the path is correct based on your file structure
import prizeImage from '../assets/prize.png'; // Replace with your actual image path

const Prize = () => {
  return (
    <div className="prize-container">
      <img src={prizeImage} alt="Prize" className="prize-image" />
    </div>
  );
};

export default Prize;
