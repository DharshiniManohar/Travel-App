

import React, { useState } from 'react';
import '../styles/tourDetails1.css';
import one from '../assets/logo.png';

function TourDetails1() {
  // Initial prices
  const adultPrice = 89999;
  const childWithBedPrice = 83500;
  const childNoBedPrice = 83499;

  // State management
  const [numAdults, setNumAdults] = useState(1);
  const [numChildrenWithBed, setNumChildrenWithBed] = useState(0);
  const [numChildrenNoBed, setNumChildrenNoBed] = useState(0);

  // Calculate total price
  const totalPrice = (numAdults * adultPrice) +
                      (numChildrenWithBed * childWithBedPrice) +
                      (numChildrenNoBed * childNoBedPrice);

  return (
    <div>
      <nav className="d-navbar">
        <div className="d-brand">
          <img src={one} alt="Vista Logo" className="d-logo" />
          <span className="d-brand-name">Vista</span>
        </div>
        <ul className="d-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/company">Company</a></li>
          <li><a href="/group-tours">Group Tours</a></li>
          <li><a href="/packages">Packages</a></li>
          <li><a href="/couplespot">Couple Package</a></li>
          <li><a href="/cruises">Cruises</a></li>
          <li><a href="/wedding">Wedding</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <button className="d-enquiry-button">Enquiry</button>
      </nav>

      <div className="d-tour-content">
        <h1 className="d-tour-title">Global Wanderlust Adventures</h1>
        <h2>Sharjah|Abu Dhabi|Dubai</h2>

        <div className="d-tour-description">
          <img
            src="https://mediaim.expedia.com/destination/9/17e35bb211c5ed3cf3f98b9781cf434b.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh"
            alt="South India Tour"
            className="d-tour-image1"
          />

          <div className="d-info-box1">
            <h2>No. 1 Travel Brand</h2>
            <p><strong>3,00,000+</strong> Happy guests</p>
            <p><strong>41,000+</strong> Number of successful tours</p>
            <p><strong>15+</strong> Years of experience</p>
            <p><strong>300+</strong> Our team ensures your best holiday experience.</p>

            <div className="d-speciality-list">
              <h2>Speciality of This Trip</h2>
              <ul>
                <li><span className="icon">✈</span> Flight</li>
                <li><span className="icon">🛂</span> Visa</li>
                <li><span className="icon">🏨</span> Hotel</li>
                <li><span className="icon">🍽</span> Meals</li>
                <li><span className="icon">🚌</span> Transport</li>
                <li><span className="icon">📸</span> Sightseeing</li>
              </ul>
            </div>

            <div className="d-why-choose-us">
              <h2>Why Choose VISTA</h2>
              <ul>
                <li>Super Friendly Tour Manager throughout the Trip.</li>
                <li>Mouth Watering Indian Food included in the Trip.</li>
                <li>Amazing Attractions and Sightseeing in the Trip.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-booking-section">
          <div className="d-booking-form">
            <h2>Book Your Tour</h2>
            <form>
              <div className="d-form-group">
                <label htmlFor="departure">Departure:</label>
                <input type="text" id="departure" value="November 13, 2024" readOnly />
              </div>

              <div className="d-form-group">
                <label htmlFor="adult">Adult:</label>
                <select id="adult" name="adult" value={numAdults} onChange={(e) => setNumAdults(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="d-form-group">
                <label htmlFor="childrenWithBed">Children With Bed:</label>
                <select id="childrenWithBed" name="childrenWithBed" value={numChildrenWithBed} onChange={(e) => setNumChildrenWithBed(Number(e.target.value))}>
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="d-form-group">
                <label htmlFor="childrenNoBed">Children No Bed:</label>
                <select id="childrenNoBed" name="childrenNoBed" value={numChildrenNoBed} onChange={(e) => setNumChildrenNoBed(Number(e.target.value))}>
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button type="submit">Book Now</button>
              <p className="reservation-info">Reserve your seat for ₹5000/person. Only for online booking.</p>
            </form>
          </div>

          <div className="d-trip-details">
            <h2>Trip Details</h2>
            <div className="d-trip-detail-item">
              <span className="d-icon">📍</span>
              <p>Trip from Chennai</p>
            </div>
            <div className="d-trip-detail-item">
              <span className="d-icon">🌍</span>
              <p>Trip to Baku</p>
            </div>
            <div className="d-trip-detail-item">
              <span className="d-icon">⏳</span>
              <p>Duration: 4 Nights / 5 Days</p>
            </div>
            <div className="d-trip-detail-item">
              <span className="d-icon">👥</span>
              <p>No of people: 41 Adults</p>
            </div>
            <div className="d-detail-item">
              <span className="d-icon">🏨</span>
              <p>Accommodation: Hotels Provided</p>
            </div>
            <div className="d-trip-detail-item">
              <span className="d-icon">🚍</span>
              <p>Transportation: Private A/C Coach</p>
            </div>
          </div>
        </div>

        <div className="d-cost-details">
          <div className="d-cost-info">
            <h2>Package Cost</h2>
            <p><strong>Adult Cost:</strong> ₹89,999</p>
            <p><strong>Child With Bed:</strong> ₹83,500</p>
            <p><strong>Child No Bed:</strong> ₹93,499</p>
          </div>
          <div className="d-total-price">
            <h2>Total Price</h2>
            <p>₹{totalPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <h2>Tour Information</h2>
          <p>Read this to prepare for your tour in the best way!</p>
      <div className="d-tour-info-section">
          

          <div className="d-info-box">
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
            </ul>

            <h3>Exclusions</h3>
            <ul>
              <li>Visa Charges</li>
              <li>GT Holidays tour manager</li>
            </ul>

            <h3>Need to know</h3>
            <ul>
              <li>Advance preparation for the tour</li>
            </ul>
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

export default TourDetails1;