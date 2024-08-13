import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Dubai.css";

const Dubai = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Dubai");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="dubhoneymoon-container">
        <div className="duboverlay">
          <h2 className="dubtitle">Dubai Couple Packages</h2>
          <p className="dubsubtitle">Travel WorldClass</p>
          <div
            className={`enquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="dubcontent-container">
        <div className="dubstate-list">
          <ul>
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

          <div className="dubquestion-box">
            <h4>Got a Question?</h4>
            <p className="dubpara">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="dubcontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="dubform-box">
            <h3>Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
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
              title="Dubai Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324964.2721786909!2d55.16587140765909!3d25.276987738634864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43074b493d1b%3A0x6df6fd2e2b663ed!2sDubai!5e0!3m2!1sen!2sus!4v1691866152686!5m2!1sen!2sus"
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
        <div className="dubstate-description">
          {selectedState === "Dubai" && (
            <>
              <div>
                <h3>Budget-Friendly Dubai Couple Packages at Vista Holidays</h3>
                <p className="dubpara">
                Plan a romantic trip to Dubai with expert help from South India’s best tour planners. Our tour planners are committed to making your couple time memorable with plenty of activities that add an extra dose of romance. At Vista Holidays, we offer the best deals on a wide range of Dubai couple packages. You can also customize a vacation plan to suit your travel requirements.</p>                
                </div>
              <div>
                <h3>Why Visit Dubai?</h3>
                <p className="dubpara">
                There are many factors that make Dubai the tenth best travel destination in the world. Dubai is a magical land where anything humans ever fantasize about comes true. It’s the city of riches, extravaganza, and architectural marvel. Everything in Dubai is mega-sized, from the world’s highest tower to the world’s largest shopping mall and ski hub and the most significant water fountain ever. In a sentence – Dubai Is What Future Would Look Like.And yet, the city retains its old-world charm through its traditional souks, dhow boat rides, and quaint eateries offering authentic Emirati cuisine. For a complete vacation experience that includes modern architecture and Middle Eastern heritage, choose the best Dubai couple packages from Vista Holidays</p>                
                <img src="https://t4.ftcdn.net/jpg/00/47/08/81/360_F_47088187_ojdI6a6rMwAmeeAkOG0jzg3SuMyCBYKq.jpg" alt="Dubai" />
              </div>
              <div>
                <h3>How To Get to Dubai and Travel Within the City?</h3>
                <p className="dubpara">Flying is the best way to get to Dubai if you are traveling from India. You could fly directly to Dubai or Sharjah, which is extremely close to the city. The Dubai International Airport is one of the busiest in the Middle East, with several flights every day to and from major Indian cities, including Delhi, Mumbai, Chennai, Bangalore, Thiruvananthapuram, and Hyderabad.You could travel within the city by metro or hire a taxi when in Dubai. Buses run every 15 minutes and are connected to major tourist attractions. If you’re in Palm Jumeriah, consider using the monorail, which is privately owned and connects you from Dubai Marina to Palm Jumeriah.</p>
              </div>
              <div>
                <h3>Tourist Attractions Included in Our Dubai couple Packages</h3>
                <p className="dubpara">Dubai is one of the most unique cities in the world. It was practically built from nothing in just a few decades. Today, it is home to some of the best record-worthy architectural marvels. At GT Holidays, we have included all the beautiful experiences the city has to offer through our well-curated Dubai couple packages:</p>
                <ul>
                    <li>TDesert Safari</li>
                    <li>Abu Dhabi</li>
                    <li>Burj Khalifa</li>
                    <li>Ferrari World – Abu Dhabi</li>
                </ul>
                <img src="https://t3.ftcdn.net/jpg/01/06/40/84/360_F_106408400_fZWQuBa9KlJqS339h6gBMpc5oeAyji7F.jpg" alt="Dubai"></img>
              </div>
              <div>
                <h3>The Best Time to Book a Romantic Dubai couple Tour Package</h3>
                <p className="dubpara">Dubai is a year-round destination, but certain times are ideal for a romantic getaway. The city's winter, from November to April, offers mild temperatures (17°C to 30°C) and is popular for the Dubai Shopping Festival in January and February. For a budget-friendly honeymoon, consider June to August when it's off-season with temperatures between 33°C and 42°C, perfect for shopping during Dubai Summer Surprises. April-May and September-October are transitional months with moderate weather, ideal for food lovers to enjoy the Dubai Food Festival.</p>
              </div>
              <div>
                <h3>What Are Some of The Best Places to Visit in The Dubai for A Couple Tour?</h3>
                <p className="dubpara">It's not every day that you find yourself amidst stunning skyscrapers and luxurious experiences. Dubai is extraordinary in every way, but certain places truly stand out.</p>
                <ul>
                    <li>The Dubai Mall</li>
                    <li>Palm Jumeirah</li>
                    <li>Dubai Marina</li>
                    <li>Dubai Creek</li>
                </ul>
                <img src="https://c4.wallpaperflare.com/wallpaper/449/321/109/dubai-burj-dubai-buildings-skyscrapers-palm-tree-hd-wallpaper-preview.jpg" alt="Dubai"></img>
              </div>
              <div>
                <h3>Why Vista Holidays is the Best Travel Agency for Dubai Couple Packages?</h3>
                <p className="dubpara">Vista Holidays is the top choice for Dubai couple packages, backed by over four decades of experience in offering budget-friendly vacations. We specialize in creating customized packages that ensure you experience Dubai to the fullest, all while adhering to strict safety protocols and COVID norms. Our itineraries cover all major destinations, providing a comprehensive and memorable trip. With 24×7 customer service and all-inclusive packages, Vista Holidays ensures a seamless and enjoyable travel experience for couples.</p>
              </div>
              <div>
                <h3>How To Find Some of The Best Beach Resorts in the Dubai?</h3>
                <p className="dubpara">At Vista Holidays, we’ve partnered with some of the best hotels and resorts across Dubai to provide the best accommodation for our guests. Some of the best hotels to stay in Dubai include:</p>
                <ul>
                    <li>Atlantis The Palm</li>
                    <li>Burj Al Arab Jumeirah</li>
                    <li>One&Only Royal Mirage</li>
                </ul>
              </div>

            </>
          )}
        </div>
      </div>
      <footer className="dubfooter">
        <div className="dubfooter-content">
          <p className="dubpara">&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="dubfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dubai;