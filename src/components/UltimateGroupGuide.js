import React from 'react';
import '../styles/UltimateGroupGuide.css'; 
import one from '../assets/logo.png';

function UltimateGroupGuide() {
  const handleNavigate = (path) => {
    window.location.href = path;
  };

  return (
    <div>
      <nav className="d-navbar">
        <div className="d-brand">
          <img src={one} alt="Vista Logo" className="d-logo" />
          <span className="d-brand-name">Vista</span>
        </div>
        <ul className="d-nav-links">
          <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('/'); }}>Home</a></li>
          <li><a href="/company" onClick={(e) => { e.preventDefault(); handleNavigate('/company'); }}>Company</a></li>
          <li><a href="/group-tours" onClick={(e) => { e.preventDefault(); handleNavigate('/group-tours'); }}>Group Tours</a></li>
          <li><a href="/packages" onClick={(e) => { e.preventDefault(); handleNavigate('/packages'); }}>Packages</a></li>
          <li><a href="/couplespot" onClick={(e) => { e.preventDefault(); handleNavigate('/couplespot'); }}>Couple Package</a></li>
          <li><a href="/cruises" onClick={(e) => { e.preventDefault(); handleNavigate('/cruises'); }}>Cruises</a></li>
          <li><a href="/wedding" onClick={(e) => { e.preventDefault(); handleNavigate('/wedding'); }}>Wedding</a></li>
          <li><a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigate('/contact'); }}>Contact</a></li>
        </ul>
        <button className="d-enquiry-button">Enquiry</button>
      </nav>

      <div className="d-content">
        <img src="https://cdn.tourradar.com/s3/tour/1500x800/226407_64186c4bcef33.jpg" alt="Group Tour Banner" className="d-banner-image" />
        <h1>Ultimate Group Tour Adventures</h1>
        <div className="d-tour-grid">
          <div className="d-row">
            <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails1')}>
              <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Mahabalipuram-1.jpg" alt="Tour 1" className="d-tour-image" />
              <div className="d-tour-text">
                <h2>Southern Splender Tours</h2>
                <p>Mahabalipuram|Alleppey|Ooty|Mysore</p>
                <div className="d-tour-time">
                  <span className="d-clock-icon">🕒</span>
                  <span>3 Days, 2 Nights</span>
                </div>
              </div>
            </div>
            <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails2')}>
              <img src="https://rest.techbehemoths.com/storage/images/countries/united-arab-emirates/abu-dhabi/603f735674796.jpg" alt="Tour 2" className="d-tour-image" />
              <div className="d-tour-text">
                <h2>Global Wanderlust Adventures</h2>
                <p>Sharjah|Abu Dhabi|Dubai</p>
                <div className="d-tour-time">
                  <span className="d-clock-icon">🕒</span>
                  <span>4 Days, 3 Nights</span>
                </div>
              </div>
            </div>
            <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails3')}>
              <img src="https://handluggageonly.co.uk/wp-content/uploads/2023/10/Best-Things-To-Do-In-Paris-France-7.jpg" alt="Tour 3" className="d-tour-image" />
              <div className="d-tour-text">
                <h2>Voyages Beyond Borders</h2>
                <p>Paris| Venice |Rome |Lucerne</p>
                <div className="d-tour-time">
                  <span className="d-clock-icon">🕒</span>
                  <span>5 Days, 4 Nights</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-tour-grid">
            <div className="d-row">
              <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails2')}>
                <img src="https://worldtravelfamily.com/wp-content/uploads/2021/07/best-places-to-visit-in-europe-.jpg" alt="Tour 4" className="d-tour-image" />
                <div className="d-tour-text">
                  <h2>Wander Beyond Horizons</h2>
                  <p>Paris| Venice |Rome |Lucerne</p>
                  <div className="d-tour-time">
                    <span className="d-clock-icon">🕒</span>
                    <span>2 Days, 1 Night</span>
                  </div>
                </div>
              </div>
              <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails3')}>
                <img src="https://static.wanderon.in/wp-content/uploads/2024/06/places-to-visit-in-baku.jpg" alt="Tour 5" className="d-tour-image" />
                <div className="d-tour-text">
                  <h2>Transcontinental Trekkers</h2>
                  <p>Baku</p>
                  <div className="d-tour-time">
                    <span className="d-clock-icon">🕒</span>
                    <span>6 Days, 5 Nights</span>
                  </div>
                </div>
              </div>
              <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails1')}>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-30f442c40382d4bb00873e1edb096688" alt="Tour 6" className="d-tour-image" />
                <div className="d-tour-text">
                  <h2>Worldwide Wonders</h2>
                  <p>Malaysia |Singapore |Kuala Lumpur</p>
                  <div className="d-tour-time">
                    <span className="d-clock-icon">🕒</span>
                    <span>7 Days, 6 Nights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-tour-grid">
          <div className="d-row">
            <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails3')}>
              <img src="https://www.travelive.com/public/img/travel2egypt/great-sphinx-and-pyramids-of-giza-in-cairo.jpg" alt="Tour 4" className="d-tour-image" />
              <div className="d-tour-text">
                <h2>Egypt Treasure Group Tour</h2>
                <p>Cairo|Giza|Alexandria</p>
                <div className="d-tour-time">
                  <span className="d-clock-icon">🕒</span>
                  <span>2 Days, 1 Night</span>
                </div>
              </div>
            </div>
            <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails2')}>
              <img src="https://www.jodogoairportassist.com/main/assets/images/blog/thailand/top-10-tourist-places-to-visit-in-thailand-1.webp" alt="Tour 5" className="d-tour-image" />
              <div className="d-tour-text">
                <h2>Thailand Group Departure</h2>
                <p>Thailand</p>
                <div className="d-tour-time">
                  <span className="d-clock-icon">🕒</span>
                  <span>6 Days, 5 Nights</span>
                </div>
              </div>
            </div>
            <div className="d-tour-box" onClick={() => handleNavigate('/tourDetails1')}>
              <img src="https://media.tacdn.com/media/attractions-splice-spp-400x400/0b/2d/07/d2.jpg" alt="Tour 6" className="d-tour-image" />
              <div className="d-tour-text">
                <h2>Mauritius Island</h2>
                <p>Mauritius</p>
                <div className="d-tour-time">
                  <span className="d-clock-icon">🕒</span>
                  <span>4 Days, 3 Nights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      

        <div className="d-login-section">
        <div className="d-login-background">

          <div className="d-login-form">
            
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="travel-date">Date of Travel:</label>
              <input type="date" id="travel-date" name="travel-date" required />

              <label htmlFor="city">City of Residence:</label>
              <input type="text" id="city" name="city" required />

              <label htmlFor="vacation-type">Vacation Type:</label>
              <input type="text" id="vacation-type" name="vacation-type" required />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
        <div className="d-info-section">
          <h2>Book Your Tour</h2>
      
          <form className="d-booking-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="travel-date">Travel Date:</label>
            <input type="date" id="travel-date" name="travel-date" required />

            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UltimateGroupGuide;
