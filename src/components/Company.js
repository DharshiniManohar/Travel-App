import React from 'react';
import '../styles/Company.css'; 
import bgcomp from '../assets/compbg.png';
import aboutusimg from '../assets/ourstory.png';
import storypara from '../assets/storypara.png';


const Company = () => {
  return (
    <div className='compbg-container'>
        <br></br><br></br><br></br><br></br><br></br>
       <img src={aboutusimg}></img>
      <img src={bgcomp}></img>
      <br></br>
      <br>
      </br>
      <img src={storypara}></img>
     
    
    </div>
  );
};

export default Company;
