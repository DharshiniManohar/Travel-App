import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Kerala.css";

const Kerala = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Kerala");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
   
    <div>
      <div className="charhoneymoon-container">
        <div className="charoverlay">
          <h2 className="chartitle">Kerala Couple Packages</h2>
          <p className="charsubtitle">Travel WorldClass</p>
          <div
            className={`charenquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="charcontent-container">
        <div className="charstate-list">
          <ul className="keralaul">
            {["Kerala", "Goa", "Shimla", "Manali", "Darjeeling"].map((state) => (
              <li
                key={state}
                className={selectedState === state ? "active" : ""}
                onClick={() => handleStateClick(state)}
              >
                {state}
              </li>
            ))}
          </ul>

          <div className="charquestion-box">
            <h4>Got a Question?</h4>
            <p className="parathree">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="charcontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="charform-box">
          <h3 className="charhthree">Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
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
        </div>
        </div>
        <div className="charstate-description">
          {selectedState === "Kerala" && (
            <>
              <div>
                <h3 className="charhthree">Best Kerala Couple Packages-All Inclusive & Affordable Tour Packages</h3>
                <p className="parathree">
                  Kerala is blessed with natural beauty in abundance. The pristine beaches, lush greenery, beautiful mountain ranges, and sparkling backwaters truly make this place God’s Own Country and a much-loved honeymoon destination for newlyweds. At Vista Holidays, we offer exclusive Kerala couple packages that cover the most romantic destinations, allowing you to spend quality time with your beloved.
                </p>
              </div>
              <div>
                <h3 className="charhthree">What's Included in Our Kerala Couple Package?</h3>
                <p className="parathree">
                  Hill stations, wildlife reserves, gorgeous backwaters, and pristine beaches are all included in our couple package deals. You can also customize the package to suit your needs and budget. In addition, we provide a range of add-ons to help you craft an unforgettable experience. All of this comes with an assurance of safe travel, high-quality accommodations, and dependable guides and cabs. So, what are you waiting for? Start packing right away for your romantic getaway.
                </p>
                <img  className="kerimg" src="https://w0.peakpx.com/wallpaper/994/618/HD-wallpaper-kerala-tourism-kerala-beach.jpg" alt="Kerala" />
              </div>
              <div>
                <h3 className="charhthree">Tips to Help You Plan a Memorable Couple Trip</h3>
                <p className="parathree">At Vista Holidays, we've provided all-inclusive Kerala couple packages for over four decades. A typical package covers accommodation, food, local transportation, and sightseeing, but if you’d like to make your vacation genuinely stress-free and memorable, here are a few pointers to help you:</p>
                <ul className="keralaul">
                  <li>Pack your clothes according to season. Wear warm clothes, a raincoat, and an insect spray during the monsoons. Carry light cotton clothing, caps, and sunscreen lotion in the summers.</li>
                  <li>Carry necessary medications in advance if you experience mountain sickness.</li>
                  <li>Many temples have strict dress codes; check with the agency about these restrictions and dress accordingly.</li>
                </ul>
              </div>
              <div>
                <h3 className="charhthree">What is the Cost of the Kerala couple Package?</h3>
                <p className="parathree">Typical Kerala couple package costs at Vista Holidays start from Rs. 24,000 and could go up to Rs. 1,00,000, depending on where you stay, how you travel, and of course, the destinations listed on the itinerary.</p>
              </div>
              <div>
                <h3 className="charhthree">Which Part of Kerala is Best for a Couple Tour?</h3>
                <p className="parathree">Every place in Kerala refreshes you with its breath-taking natural beauty and offers picturesque views. The following are some of Kerala’s most romantic locations.</p>
                <ul className="keralaul">
                    <li>Munnar</li>
                    <li>Thekkady</li>
                    <li>Wayanad</li>
                    <li>Alleppey</li>
                </ul>
                <img className="kerimg" src="https://e1.pxfuel.com/desktop-wallpaper/164/258/desktop-wallpaper-tourism-kerala-nature.jpg" alt="Kerala"></img>
              </div>
              <div>
                <h3 className="charhthree">What is the Best Time to Visit Kerala for a Couples?</h3>
                <p className="parathree">At Vista Holidays, we've curated Kerala couple packages for all seasons. But the months of October to February are perfect for romantic getaways because you get to witness serenity in the lap of nature with your beloved. Travelling is much more comfortable during this time of the year because you don’t have to deal with the scorching heat or extreme rainfall.</p>
              </div>
              <div>
                <h3>Why is Vista holidays the Best Travel Agency for Kerala couple Packages?</h3>
                <p className="parathree">Couple Holidays offers affordable packages to incredibly romantic destinations in India and across the world. We are a fully integrated travel firm providing complete solutions for businesses and travel enthusiasts worldwide. We provide transparent and cost-effective solutions.</p>
              </div>
              <div>
                <h3 className="charhthree">Best Hotels and Resorts to Stay in Kerala for Honeymoon</h3>
                <p className="parathree">We have included the best accommodation alternatives for you in the list below, ranging from affordable to luxury depending upon the Kerala honeymoon package price you opted for.</p>
                <ul className="keralaul">
                    <li>Thekkady's Spice Village</li>
                    <li>Munnar's Tea Valley Resort</li>
                    <li>Kumarakom Lake Resort located in Kottayam</li>
                    <li>Alleppey's Coco Houseboats</li>
                </ul>
              </div>
            </>
          )}
          {/* Add descriptions for other states if needed */}
        </div>
      </div>
      <footer className="charfooter">
        <div className="charfooter-content">
          <p className="parathree">&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="charfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Kerala;