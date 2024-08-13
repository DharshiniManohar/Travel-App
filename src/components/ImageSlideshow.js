import React, { useState, useEffect } from 'react';
import '../styles/ImageSlideshow.css';

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    
    '/images/image2.gif',
    '/images/image3.gif',
    '/images/image4.gif',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getAnimatedText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="welcome-text-letter"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Slideshow" />
      <div className="welcome-text">
        {getAnimatedText("Welcome to Vista")}

        
      </div>
      <br></br>
   
    </div>
  );
};

export default ImageSlideshow;

