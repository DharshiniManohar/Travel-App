
import React from 'react';
import '../styles/Accre.css'; // Ensure the path is correct based on your file structure
import accreImage from '../assets/accred.png'; // Replace with actual image path

const Accre = () => {
  return (
    <div className="accre-container">
      <img src={accreImage} alt="Accre" className="accre-image" />
      
    </div>
  );
};

export default Accre;
