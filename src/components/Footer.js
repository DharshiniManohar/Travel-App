
import React from 'react';
import '../styles/Footer.css';
import conimg from '../assets/conimg.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Corporate Office</h3>
          <p>GT Holidays Pvt LTD,</p>
          <p>Novel Tech Park,</p>
          <p>Opposite to 1 MG Mall,</p>
          <p>MG Road, Bangalore – 560042</p>
          <p>Karnataka, India.</p>
          <p className="contact-info">Call Us: <a href="tel:+919940882200">+9940882200</a></p>
        </div>
        <div className="footer-column">
          <h3>Head Office</h3>
          <p>GT Holidays Pvt LTD,</p>
          <p>No.1, Gemini Parsn,</p>
          <p>Kodambakkam High Road,</p>
          <p>Nungambakkam, Chennai – 600006</p>
          <p>Tamilnadu, India.</p>
          <p className="contact-info">Email Us: <a href="mailto:mail@gtholidays.in">mail@gtholidays.in</a></p>
        </div>
        <div className="footer-column">
          <h3>Our Branches</h3>
          <p>Mumbai</p>
          <p>Cuddalore</p>
          <p>Coimbatore</p>
          <p>Erode</p>
          <p>Madurai</p>
          <p>Nagercoil</p>
          <p>Kanyakumari</p>
        </div>
      </div>
      <div className="conimg">
      <img src={conimg}></img>
      </div>
    </footer>
  );
};

export default Footer;
