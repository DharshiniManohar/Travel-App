import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Bali.css";

const Bali = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Bali");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="balihoneymoon-container">
        <div className="balioverlay">
          <h2 className="balititle">Bali Couple Packages</h2>
          <p className="balisubtitle">Travel WorldClass</p>
          <div
            className={`balienquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="balicontent-container">
        <div className="balistate-list">
          <ul className="baliul">
            {["Maldives", "Bali", "Greece", "Dubai", "Paris"].map((state) => (
              <li
                key={state}
                className={selectedState === state ? "active" : ""}
                onClick={() => handleStateClick(state)}
              >
                {state}
              </li>
            ))}
          </ul>

          <div className="baliquestion-box">
            <h4>Got a Question?</h4>
            <p className="balipara">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="balicontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="baliform-box">
            <h3 className="balithree">Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
            <form>
              <input type="text" placeholder="Name *" required />
              <input type="text" placeholder="City of Residence *" required />
              <input type="email" placeholder="Email *" required />
              <input type="text" placeholder="Phone Number *" required />
              <input type="text" placeholder="WhatsApp *" required />
              <input type="text" placeholder="Travel Destination *" required />
              <input type="date" placeholder="Date of Travel *" required />
              <input type="number" placeholder="No. of People *" required />
              <input type="text" placeholder="Vacation Type *" required />
              <button type="submit" className="submit-button">SUBMIT</button>
            </form>

            {/* Add the map below the form */}
            <iframe
              title="Bali Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126969.29175742289!2d115.18891623607324!3d-8.409517664029977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2397d7ff19f73%3A0x708c4c77c2b379eb!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1691865045000!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0, marginTop: "20px" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="balistate-description">
          {selectedState === "Bali" && (
            <>
              <div>
                <h3 className="balithree">Budget-Friendly Bali Couple Packages at Vista Holidays</h3>
                <p className="balipara">
                If you’ve imagined a couple time that includes a perfect blend of natural beauty, culture, and culinary adventure, visit us to choose from over 15 Bali couple packages. People love this vibrant island because it has everything to satiate your romantic and adventurous spirit – from tropical sunshine and jungle thrills to elegant temples and culinary adventure.</p>               
                </div>
              <div>
                <h3>Why Is Bali a Popular Couple Destination?</h3>
                <p className="balipara">
                With more than 10,000 temples and the omnipresence of Hinduism, Bali is worthy of its nickname – The Island of Gods. The sheer natural beauty of Bali can be seen through its magical forests, volcanic mountains, magnificent coral reefs, and iconic rice fields. It is one of the most sought-after couple destinations. At Vista Holidays, we have curated some of the best Bali couple packages that cover the myriad aspects of this mystical island but at an affordable cost.</p>                
                <img  className="balig" src="https://thumbs.dreamstime.com/b/bali-19054959.jpg" alt="Bali" />
              </div>
              <div>
                <h3 className="balithree">How To Choose a Romantic Bali Couple Tour Package?</h3>
                <p className="balipara">When looking for Bali honeymoon packages, you must consider the places your partner and you would love to see and explore. Would you like an action-packed adventure or prefer to relax, indulge, and unwind? Luckily for you, Bali has something for everyone! At GT Holidays, we put together packages that match your preferences and tastes.</p>
              </div>
              <div>
                <h3 className="balithree">What Is the Best Time to Visit the Bali for Honeymoon?</h3>
                <p className="balipara">Bali’s tropical landscape and beautiful sandy beaches make the place ideal for a honeymoon. No wonder it is known to be one of the most romantic destinations in the world.</p>
                <ul className="baliul">
                    <li>Ubud</li>
                    <li>Seminyak</li>
                    <li>Jimbaran</li>
                    <li>Sanur </li>
                </ul>
                <img  className="balig" src="https://wallpapers.com/images/hd/bali-pictures-owyrttqyd1r584s1.jpg" alt="Bali"></img>
              </div>
              <div>
                <h3 className="balithree">What Is the Best Places to Visit Bali?</h3>
                <p className="balipara">The best time to visit Bali is between April to October when the weather is warm and there’s little rain. July to August and around Christmas and New Year’s are also good times to visit, but the island gets crowded. January and February are off-season because of the rains, but they’re also a great time to find cheap Bali honeymoon packages.</p>
              </div>
              <div>
                <h3 className="balithree">What Are Some of The Best Places to Visit in The Bali for A Couple Tour?</h3>
                <p className="balipara">It’s not every day that you get to be surrounded by sparkling waters and clear beaches. Everything about the Bali is wonderful, but some places stand out more than others.</p>
                <ul className="baliul">
                    <li>Baa Atoll</li>
                    <li>Vaadhoo Island</li>
                    <li>Baros Island</li>
                    <li>Cocoa Island</li>
                </ul>
                <img className="balig" src="https://i.pinimg.com/736x/9e/c2/96/9ec29640cffe163bec85c0b1c408cddb.jpg" alt="Bali"></img>
              </div>
              <div>
                <h3 className="balithree">Why Vista Holidays is the Best Travel Agency for Bali Couple Packages?</h3>
                <p className="balipara">Vista Holidays is the top choice for Bali couple packages, backed by over four decades of experience in offering budget-friendly vacations. We specialize in creating customized packages that ensure you experience Bali to the fullest, all while adhering to strict safety protocols and COVID norms. Our itineraries cover all major destinations, providing a comprehensive and memorable trip. With 24×7 customer service and all-inclusive packages, Vista Holidays ensures a seamless and enjoyable travel experience for couples.</p>
              </div>
              <div>
                <h3 className="balithree">How To Find Some of The Best Beach Resorts in the Bali?</h3>
                <p className="balipara">The Bali has some of the world’s best luxury resorts that offer the best facilities money can buy. There’s something for everyone, from underwater restaurants and overwater bungalows to water sports. Here are some of the best resorts in the Bali:</p>
                <ul className="baliul">
                    <li>The Mulia, Nusa Dua</li>
                    <li>The St. Regis Bali Resort</li>
                    <li>Ayana Resort and Spa</li>
                </ul>
              </div>

            </>
          )}
        </div>
      </div>
      <footer className="balifooter">
        <div className="balifooter-content">
          <p className="balipara">&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="balifooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bali;