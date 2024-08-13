import React, { useState } from 'react';
import '../styles/Packages.css';
import emailjs from 'emailjs-com';
import one from '../assets/logo.png';

const packageData = {
  couple: {
    title: "Couple Bookings",
    description: "Romantic getaways and honeymoon packages designed for couples looking for a special escape.",
    image: "https://st.depositphotos.com/1010550/5093/i/450/depositphotos_50930169-stock-photo-young-couple-of-tourist-in.jpg",
    details: [
      "Luxurious accommodations",
      "Private candlelight dinners",
      "Exclusive couple's spa sessions",
      "Personalized travel itinerary"
    ]
  },
  group: {
    title: "Group Travel",
    description: "Perfect for friends and family looking to explore new destinations together with tailored group itineraries.",
    image: "https://media.istockphoto.com/id/1166378619/photo/large-group-of-happy-friends-in-mountains-area.jpg?s=612x612&w=0&k=20&c=PRlOrqCmlc7QEpTtQw5Blk5NlTtQzT8osgFDK8059p0=",
    details: [
      "Group discounts available",
      "Customized group activities",
      "Group-friendly accommodations",
      "Professional tour guides"
    ]
  },
  single: {
    title: "Single Travel",
    description: "Solo travel packages for individuals who want to explore new destinations with ease and comfort.",
    image: "https://media.istockphoto.com/id/1392554386/photo/young-asian-woman-solo-travel-on-tropical-island-mountain-in-summer-sunny-day.jpg?s=612x612&w=0&k=20&c=u82dGZHLJgtqQgLK2McQfbP9crtj6gvMVcoeHEfd6RY=",
    details: [
      "Single-friendly accommodations",
      "Solo travel group options",
      "Personalized itineraries",
      "Safety and convenience"
    ]
  }
};

function Packages() {
  const [activeTab, setActiveTab] = useState('inclusions');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg);
    setShowEmailForm(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
  
    const serviceId = 'service_6gbtg9e';
    const templateId = 'template_6vfy4td';
    const userId = 'Nf5r_gBU1S_oEIaoH';
  
    const templateParams = {
      to_email: email,
      package_name: selectedPackage.title,
      message: `You have visited Vista and booked the ${selectedPackage.title} package. Our customer team will contact you soon for your guidance.`
    };
  
    console.log("Sending email to:", email); // Debugging line to verify the correct email is captured

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
        setShowEmailForm(false);
        setEmail('');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="d-packages-container">
      <nav className="d-navbar">
        <div className="d-brand">
          <img src={one} alt="Vista Logo" className="d-logo" />
          <span className="d-brand-name">Vista</span>
        </div>
        <ul className="d-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/company">Company</a></li>
          <li><a href="/group-tours">Group Tours</a></li>
          <li><a href="#" onClick={() => window.location.href = '/packages'}>Packages</a></li>
          <li><a href="/couples">Couple Package</a></li>
          <li><a href="/wedding">Wedding</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <button className="d-enquiry-button">Enquiry</button>
      </nav>

      {showEmailForm ? (
        <div className="d-email-form">
          <h2>Enter your email to confirm booking:</h2>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email Address"
              required
            />
            <button type="submit" className="d-confirm-button">Confirm Booking</button>
          </form>
        </div>
      ) : (
        <div className="d-packages-content">
          {Object.keys(packageData).map(key => (
            <div key={key} className="d-package-card">
              <img src={packageData[key].image} alt={packageData[key].title} className="package-image" />
              <div className="d-package-info">
                <h2>{packageData[key].title}</h2>
                <p>{packageData[key].description}</p>
                <ul>
                  {packageData[key].details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className="d-package-price">
                  <span className="d-price-amount">₹89,999</span><br/>
                  <button
                    className="d-book-now-button"
                    onClick={() => handleBookNow(packageData[key])}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="d-tabs">
        <button
          className={activeTab === 'inclusions' ? 'active' : ''}
          onClick={() => handleTabChange('inclusions')}
        >
          Inclusions
        </button>
        <button
          className={activeTab === 'exclusions' ? 'active' : ''}
          onClick={() => handleTabChange('exclusions')}
        >
          Exclusions
        </button>
        <button
          className={activeTab === 'need-to-know' ? 'active' : ''}
          onClick={() => handleTabChange('need-to-know')}
        >
          Need to Know
        </button>
      </div>

      <div className="d-tab-content">
        {activeTab === 'inclusions' && (
          <div>
            <h3>Inclusions</h3>
            <ul>
              <li>Chennai – Baku – Chennai round way Flight Tickets by Air Arabia.</li>
              <li>4 Nights Hotel accommodation in the above-mentioned hotels.</li>
              <li>Welcome drink upon arrival at hotel</li>
              <li>Accommodation in Hotel including breakfast: 4 nights</li>
              <li>Sightseeing in districts (Baku, Absheron, Gabala)</li>
              <li>5 Lunches</li>
              <li>4 Dinners</li>
              <li>English speaking guide</li>
              <li>Entrance fee: Flame temple, Fire Mountain</li>
              <li>2 Bottles of water per person per day</li>
              <li>All transfers according to program including airport transfers by A/c Coach</li>
              <li>Visa Charges</li>
              <li>Vista tour manager</li>
            </ul>
          </div>
        )}
        {activeTab === 'exclusions' && (
          <div>
            <h3>Exclusions</h3>
            <ul>
              <li>Personal expenses and tips</li>
              <li>Travel Insurance</li>
              <li>Any other services not mentioned in the inclusions</li>
            </ul>
          </div>
        )}
        {activeTab === 'need-to-know' && (
          <div>
            <h3>Need to Know</h3>
            <ul>
              <li>Ensure passport validity for at least 6 months</li>
              <li>Check visa requirements for the destination</li>
              <li>Pack according to the weather of the destination</li>
              <li>Inform us of any special dietary requirements</li>
            </ul>
          </div>
        )}
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
        <div className="d-info-background">
          <div className="d-info-container">
            <h2>Customer Care & Contact Information</h2>
            <p><strong>Customer Care:</strong> 8765432190</p>
            <p><strong>Email:</strong> <a href="mailto:vista@gmail.com">vista@gmail.com</a></p>

            <div className="d-info-rows">
              <div className="d-info-column">
                <h3>Head Office:</h3>
                <ul>
                  <li>Chennai</li>
                  <li>Bangalore</li>
                  <li>Coimbatore</li>
                </ul>
              </div>
              <div className="d-info-column">
                <h3>Branches:</h3>
                <ul>
                  <li>Madurai</li>
                  <li>Kanyakumari</li>
                  <li>Singapore</li>
                  <li>Malaysia</li>
                </ul>
              </div>
            </div>

            <div className="d-social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/free-psd/instagram-application-logo_23-2151544100.jpg" alt="Instagram" className="d-social-icon" />
              </a>
              <a href="mailto:vista@gmail.com">
                <img src="https://thumbs.dreamstime.com/b/logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-paper-texture-glossy-emblem-wallpaper-210442689.jpg" alt="Gmail" className="d-social-icon" />
              </a>
              <a href="tel:+918765432190">
                <img src="https://png.pngtree.com/png-clipart/20230320/original/pngtree-circle-phone-call-icon-in-black-color-png-image_8997757.png" alt="Call" className="d-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;