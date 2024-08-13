import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Maldives.css";

const Maldives = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Maldives");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="mdhoneymoon-container">
        <div className="mdoverlay">
          <h2 className="mdtitle">Maldives Couple Packages</h2>
          <p className="mdsubtitle">Travel WorldClass</p>
          <div
            className={`mdenquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="mdcontent-container">
        <div className="mdstate-list">
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

          <div className="mdquestion-box">
            <h4>Got a Question?</h4>
            <p>
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="mdcontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="mdform-box">
            <h3 className="mdl">Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
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
              title="Maldives Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950009.650499772!2d72.40039104079586!3d3.2027780591450744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b48506e8694a7a9%3A0x5556816e6e01229d!2sMaldives!5e0!3m2!1sen!2sin!4v1691735288801!5m2!1sen!2sin"
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
        <div className="mdstate-description">
          {selectedState === "Maldives" && (
            <>
              <div>
                <h3 className="mdl">Budget-Friendly Maldives Couple Packages at Vista Holidays</h3>
                <p className="di">
                A couple time is much more than just a couple’s first post-wedding getaway. It’s an opportunity for them to connect as a couple and also an opportunity to take a quick break from the wedding planning. At Vista Holidays, we’re committed to making your romantic vacation worth cherishing for a lifetime. We offer budget-friendly all-inclusive honeymoon packages to over a hundred destinations across the world. You don’t have to lift a finger during the entire trip – we’ll take care of everything.</p>                
                </div>
              <div>
                <h3 className="mdl">Why Is Maldives an Ideal Couple Destination?</h3>
                <p className="di">
                The Maldives is a picture-perfect island that offers the best of everything – luxurious accommodation, delectable cuisine, fun activities, and plenty of natural attractions. There can be no better way to spend your romantic holiday than in the backdrop of beautiful white sandy beaches, turquoise lagoons, and a vibrant coral reef. Wouldn’t you love a candlelight dinner at the beach while enjoying nature or on a cruise while admiring the sunset and sipping champagne? If your idea of a romantic getaway includes sun, sand, and romance, call now to book Maldives couple packages from Vista Holidays.</p>                
                <img className="mdls" src="https://t3.ftcdn.net/jpg/01/11/28/88/360_F_111288833_YIh3Br4p3lzSlFjDutcVIjJMj9EkWlKv.jpg" alt="Maldives" />
              </div>
              <div>
                <h3 className="mdl">Top Tips to Remember When Choosing Maldives Couple Packages</h3>
                <p className="di">At Vista Holidays, we’re here to take the stress out of planning your honeymoon. We’ll take care of everything from ticket booking and visa arrangements to accommodation and food. And if you have special requests to surprise your partner, we’ll arrange that as well!But, to make your vacation extra special, here are a few things you must remember before choosing a romantic Maldives couple tour package. We’ve listed them for you:</p>
                <ul className="dis">
                    <li>Seaplanes and boats are the only means of transport between islands. Ask your tour operator if they can book a resort close to Male, the island country’s capital city. And remember to check if the package includes a complimentary airport transfer.</li>
                    <li>Make sure you book the package in the right season – The Maldives experiences rain season from May to October.</li>
                    <li>Some islands have their time zones, so remember to check with the resort when catching the flight or during departure.</li>
                </ul>
              </div>
              <div>
                <h3 className="mdl">What Is the Best Time to Visit the Maldives for Honeymoon?</h3>
                <p className="di">The Maldives is an excellent place to visit for most of the year, but the months between April to November are the wet season where the weather could get nasty, but there will likely be dry spells between these months as well. This is the time to look for off-season Maldives honeymoon packages. The perfect time to visit this beautiful country is from December to April. February is especially pleasant with plenty of sunshine, and the weather is warm.</p>
                <img className="mdls" src="https://w0.peakpx.com/wallpaper/600/646/HD-wallpaper-maldives-resort-ocean-resorts-pier-lights-sky.jpg" alt="Maldives"></img>
              </div>
              <div>
                <h3 className="mdl">Why Is Vista Holidays the Best Travel Partner?</h3>
                <p className="di">A couple time is the most intimate and wholesome affair of a couple’s life. Nobody understands this better than us! Over the years, we’ve curated some of the best Maldives packages for couples at various price levels.We know what’s best for you and strive to make everything perfect for this new start of your lives. At Vista Holidays, we promise a 100% safe and secure vacation. Call now if you’d like to co-create unique experiences that will take your holiday to the next level.</p>
              </div>
              <div>
                <h3 className="mdl">What Are Some of The Best Places to Visit in The Maldives for A Couple Tour?</h3>
                <p className="di">It’s not every day that you get to be surrounded by sparkling waters and clear beaches. Everything about the Maldives is wonderful, but some places stand out more than others.</p>
                <ul className="dis">
                    <li>Baa Atoll</li>
                    <li>Vaadhoo Island</li>
                    <li>Baros Island</li>
                    <li>Cocoa Island</li>
                </ul>
                <img className="mdls" src="https://c4.wallpaperflare.com/wallpaper/668/582/509/sheraton-maldives-resort-luxury-bungalows-in-water-photo-hd-wallpaper-1920%C3%971080-wallpaper-preview.jpg" alt="Maldives"></img>
              </div>
              <div>
                <h3 className="mdl">Why Vista Holidays is the Best Travel Agency for Maldives Couple Packages?</h3>
                <p className="di">Vista Holidays is the top choice for Maldives couple packages, backed by over four decades of experience in offering budget-friendly vacations. We specialize in creating customized packages that ensure you experience Maldives to the fullest, all while adhering to strict safety protocols and COVID norms. Our itineraries cover all major destinations, providing a comprehensive and memorable trip. With 24×7 customer service and all-inclusive packages, Vista Holidays ensures a seamless and enjoyable travel experience for couples.</p>
              </div>
              <div>
                <h3 className="mdl">How To Find Some of The Best Beach Resorts in the Maldives?</h3>
                <p className="di">The Maldives has some of the world’s best luxury resorts that offer the best facilities money can buy. There’s something for everyone, from underwater restaurants and overwater bungalows to water sports. Here are some of the best resorts in the Maldives:</p>
                <ul className="dis">
                    <li>Gili Lankanfushi</li>
                    <li>Hurawalhi Island Resort</li>
                    <li>Anantara Veli Maldives Resort</li>
                </ul>
              </div>

            </>
          )}
        </div>
      </div>
      <footer className="mdfooter">
        <div className="mdfooter-content">
          <p>&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="mdfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Maldives;