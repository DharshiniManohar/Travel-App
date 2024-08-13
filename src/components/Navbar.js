
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="nav-items">
        
        <li onClick={() => onNavigate('home')} className="hometextup"><b>Home</b></li>
        

        <li className="dropdown">
          <a href="#company" onClick={() => onNavigate('company')}><b>Company</b></a>
        </li>




        <li className="dropdown">
          <a href="#packages" onClick={() => onNavigate('packages')}><b>Packages</b></a>
        </li>


        




        <li className="dropdown">
          <a href="#grouptour" onClick={() => onNavigate('ultimategroupguide')}><b>Group Tour</b></a>
        </li>








        <li className="dropdown">
          <a href="#honeymoon" onClick={(e) => e.preventDefault()}><b>Honeymoon</b></a>
          <ul className="dropdown-content">
            <div className="dropdown-column">
              <h3>India</h3>
              <li onClick={() => onNavigate('kerala')}>Kerala</li>
              <li onClick={() => onNavigate('goa')}>Goa</li>
              <li onClick={() => onNavigate('shimla')}>Shimla</li>
              <li onClick={() => onNavigate('manali')}>Manali</li>
              <li onClick={() => onNavigate('darjeeling')}>Darjeeling</li>
            </div>




            
            <div className="dropdown-column">
              <h3>International</h3>
              <li onClick={() => onNavigate('maldives')}>Maldives</li>
              <li onClick={() => onNavigate('bali')}>Bali</li>
              <li onClick={() => onNavigate('greece')}>Greece</li>
              <li onClick={() => onNavigate('dubai')}>Dubai</li>
              <li onClick={() => onNavigate('paris')}>Paris</li>
            </div>
          </ul>
        </li>






        <li className="dropdown">
          <a href="#contactt" onClick={() => onNavigate('contact')}><b>Contact</b></a>
        </li>


        {/* <li className="dropdown">
          <a href="#contact" onClick={(e) => e.preventDefault()}><b>Contact</b></a>
        </li> */}
        <li className="dropdown">
          <a href="#cruises" onClick={() => onNavigate('chatbot')}><b>Helpbot</b></a>
        </li>
        <li className="dropdown">
          <a href="#login" onClick={() => onNavigate('login')}><b>Login</b></a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
