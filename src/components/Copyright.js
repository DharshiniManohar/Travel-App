// src/components/Copyright.js
import React from 'react';
import '../styles/Copyright.css'; // Ensure the path is correct based on your file structure

const Copyright = () => {
  return (
    <div className="copyright-container">
      <p className="copyright-text">
        Copyright © 2024 by Vista Holidays Pvt Ltd. All Rights Reserved.
      </p>
      <div className="policy-links">
        <a href="#privacy-policy">Privacy Policy</a> | 
        <a href="#terms-conditions">Terms & Conditions</a> | 
        <a href="#cancellation-refund">Cancellation & Refund Policy</a>
      </div>
    </div>
  );
};

export default Copyright;
