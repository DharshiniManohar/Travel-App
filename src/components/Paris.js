import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Paris.css";

const Paris = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Paris");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="parhoneymoon-container">
        <div className="paroverlay">
          <h2 className="partitle">Paris Couple Packages</h2>
          <p className="parsubtitle">Travel WorldClass</p>
          <div
            className={`enquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="parcontent-container">
        <div className="parstate-list">
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

          <div className="parquestion-box">
            <h4>Got a Question?</h4>
            <p className="parpara">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="parcontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="parform-box">
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
              title="Paris Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1046165.7078492181!2d2.2137490297045406!3d48.85661405030325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f5d9e7f0eaf%3A0x40517f1857b4460!2sParis!5e0!3m2!1sen!2sus!4v1691866643152!5m2!1sen!2sus"
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
        <div className="parstate-description">
          {selectedState === "Paris" && (
            <>
              <div>
                <h3>Budget-Friendly Paris Couple Packages at Vista Holidays</h3>
                <p className="parpara">
                If you’re looking for the perfect couple time destination, there’s no better place than Paris. Maybe it’s the beautiful buildings, medieval architecture, or suave French culture that evokes these emotions. Paris is the best place to start your journey of love & togetherness with your loved one. At Vista Holidays, we have curated some of the best Paris couple packages for you to explore and make your pick.</p>                
                </div>
              <div>
                <h3>How to Reach Paris?</h3>
                <p>
                Paris is one of the busiest airports in Europe, with several flights flying in and out from across the world. Charles de Gaulle International Airport is a major airport in Paris, with two other smaller airports servicing the city viz. Orly International Airport and Beauvais Airport.Traveling by sea is a fantastic experience for those traveling from the United Kingdom. Paris is well connected to many cities within France with five international train stations. Buses also ply internationally, connecting Paris with neighbouring countries – you can board one at the Gare Routiere Internationale du Paris-Gallieni.</p>                
                <img className="parg" src="https://www.hdwallpapers.in/download/eiffel_tower_paris_with_blur_blue_sky_background_4k_hd_travel-1920x1080.jpg" alt="Paris" />
              </div>
              <div>
                <h3>How to Travel Within Paris</h3>
                <p className="parpara">Public transport is excellent in Paris, with the Metro taking you anywhere within Paris and sometimes slightly beyond. All you need is a map to travel from one destination to another. Car hires and rentals are also available, but they are expensive.Remember to ask your travel advisor at GT Holidays about Paris Passlib – the city’s official pass that offers access to some of the major museums and monuments in the city. These passes are valid for one year from the date of activation. You can also cancel or change your visit until 48 hours before it is due.</p>
              </div>
              <div>
                <h3>What and Where to Eat in Paris?</h3>
                <p className="parpara">The monument has long been considered a symbol of love. The Eiffel Tower is a mesmerizing architectural delight that towers the skyscape and is vividly visible from afar. Ideally, you must visit the Eiffel by night when the tower lights up automatically as it gets dark. The tower also has a 5-minute light show every hour after nightfall until 1am. The scene looks breathtaking – almost as if twinkling stars are falling on earth. Call us if you’d like to surprise your loved one with a gift at the Eiffel Tower. Follow our Instagram profile to know about the latest offers and discounts.</p>
                <img  className="parg" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Paris-HD-Wallpaper-Free.jpg" alt="Paris"></img>
              </div>
              <div>
                <h3>When to Pick the Best Paris Packages for Couples?</h3>
                <p className="parpara">Whether it is the bright sunny days or autumn winds, Paris is charming all through the year. The city is cheerful and pleasant during spring while summers are warmer, with temperatures averaging 20 degrees. Paris looks equally dreamy during autumn, with colourful leaves strewn across cobbled pathways and people wearing shades of grey and black in sync with the season. Winter is considered off-season but still has its share of tourists looking to take advantage of budget Paris couple packages.</p>
              </div>
              <div>
                <h3>What Are Some of The Best Places to Visit in The paris for A Couple Tour?</h3>
                <p className="parpara">It's not every day that you find yourself amidst iconic landmarks and charming streets. Paris is exceptional in every way, but certain places truly capture its timeless allure.</p>
                <ul>
                    <li>The Eiffel Towers</li>
                    <li>The Louvre</li>
                    <li>Temple of Love</li>
                    <li>Disneyland</li>
                </ul>
                <img className="parg"  src="https://cdn.pixabay.com/photo/2021/07/30/20/23/paris-6510643_640.jpg" alt="Paris"></img>
              </div>
              <div>
                <h3>Why Vista Holidays is the Best Travel Agency for Paris Couple Packages?</h3>
                <p className="parpara">Vista Holidays is the top choice for Paris couple packages, backed by over four decades of experience in offering budget-friendly vacations. We specialize in creating customized packages that ensure you experience Paris to the fullest, all while adhering to strict safety protocols and COVID norms. Our itineraries cover all major destinations, providing a comprehensive and memorable trip. With 24×7 customer service and all-inclusive packages, Vista Holidays ensures a seamless and enjoyable travel experience for couples.</p>
              </div>
              <div>
                <h3>How To Find Some of The Best Beach Resorts in the Paris?</h3>
                <p className="parpara">At Vista Holidays, we’ve partnered with some of the best hotels and resorts across Paris to provide the best accommodation for our guests. Some of the best hotels to stay in Paris include:</p>
                <ul>
                    <li>Shangri La Hotel</li>
                    <li>Hotel Plaza Athenee</li>
                    <li>Four Seasons Hotel George V Paris</li>
                </ul>
              </div>

            </>
          )}
        </div>
      </div>
      <footer className="parfooter">
        <div className="parfooter-content">
          <p className="parpara">&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="parfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Paris;