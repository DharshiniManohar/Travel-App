import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Manali.css";

const Manali = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Manali");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="mhoneymoon-container">
        <div className="moverlay">
          <h2 className="mtitle">Manali Couple Packages</h2>
          <p className="msubtitle">Travel WorldClass</p>
          <div
            className={`menquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="mcontent-container">
        <div className="mstate-list">
          <ul>
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

          <div className="mquestion-box">
            <h4>Got a Question?</h4>
            <p className="man">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="mcontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="mform-box">
          <h3 className="ma">Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
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
        <div className="mstate-description">
          {selectedState === "Manali" && (
            <>
              <div>
                <h3 className="ma">Budget-Friendly Manali Couple Packages at Vista Holidays</h3>
                <p className="man">
                Planning the perfect couple time is not an easy task. At Vista Holidays, we’ve put together fantastic Manali honeymoon packages that match your taste and budget. Our expert travel planners take care of everything from transport arrangements and accommodation to sightseeing and food. Call us at 9940882200 or fill in the contact form for package details.</p>                
                </div>
              <div>
                <h3 className="ma">Why Is Manali an Ideal Couple Destination?</h3>
                <p className="man">
                Manali isn’t only about snow-capped mountains and unlimited adventure opportunities. The place is full of hidden gems like there is a lot of hidden gems like Patilkuhl, Thanedar, and Soyal. If you’d like to combine sightseeing with adventure activities like hiking, mountaineering, or rafting, Manali is the perfect place for a couples. At Vista Holidays, we have partnered with several trade associations and hotels to provide some of the best Manali packages for couples.</p>                
                <img className="mli" src="https://c1.wallpaperflare.com/preview/577/658/556/manali-himachal-pardesh-mandi.jpg" alt="Manali" />
              </div>
              <div>
                <h3 className="ma">Tips to Plan a Stress-free Tour in Manali</h3>
                <ul className="mana">
                    <li>Pack your clothing depending on the season and location. Some places experience sub-zero temperatures during the winter, while temperature ranges from 5 to 15 degrees even in summer in places like Kinnaur and Chamba.</li>
                    <li>The rainy season is the best time to shop for low Manali honeymoon package prices, but make sure you check for landslides and other problems before booking.</li>
                    <li>Keep enough cash if you’re visiting a remote location</li>
                    <li>Don’t forget to carry a government-issued ID along with a negative RT- PCR test or vaccination certificate.</li>
                </ul>
              </div>
              <div>
                <h3 className="ma">What Are the Best Places to Visit for Couples?</h3>
                <p className="man">With its fantastic scenery and romantic atmosphere, Manali is one of the best romantic destinations in India. Some of the famous places we include in our Manali honeymoon packages include:</p>
                <ul className="mana">
                    <li>Solang Valley</li>
                    <li>Beas Kund</li>
                    <li>Hidimba Devi Temple</li>
                    <li>Gulaba</li>
                </ul>
                <img className="mli" src="https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/p179.png" alt="Manali"></img>
              </div>
              <div>
                <h3 className="ma">Which Is the Best Time to Visit Manali?</h3>
                <p className="man">Manali is pleasant all through the year, offering a variety of experiences depending on the season. Ideally, the months from October to March are suitable for couples planning to experience snow for the first time. But if you’re looking for a picture-perfect landscape or interested in camping, paragliding, or trekking, consider visiting Shimla from March to June. But if you’re looking for low-budget Manali Couple packages, consider visiting the place from July to September.</p>
              </div>
              <div>
                <h3 className="ma">Best Places to Visit in Manali</h3>
                <p className="man">Manali is beautiful throughout the year, but it is pretty crowded during the summer months. October to June is also an ideal time to visit, thanks to the pleasant climate and colorful flowers that bloom in this season. If you’re looking for Manali honeymoon packages that include winter-based activities, December to February are the best season. Book one from July to September if you’re looking for budget Manali Couple packages for couples. It rains in Manali during this time of the year, making it unsuitable for sightseeing and adventure activities.</p>
                <img className="mli" src="https://media.istockphoto.com/id/1223612773/photo/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrow-gauge-railway-in-north-india-which.jpg?s=612x612&w=0&k=20&c=vYxFBTbvcLcivcYjtFB-S_P7ETUwgIj0mAk84l9uC1g=" alt="Shimla"></img>
              </div>
              <div>
                <h3 className="ma">Why Vista Holidays is the Best Travel Agency for Manali Couple Packages?</h3>
                <p className="man">Vista Holidays has been offering budget vacation packages for over four decades. We’ve made it our mission to encourage everyone to explore new places and meet new people irrespective of their budget. We’ve curated some of the most exciting vacation packages with innovative travel ideas at a fair cost. We provide a wide range of Manali Couple packages for couples and guarantee the utmost transparency and cost-effective solutions.</p>
                <ul className="mana">
                    <li>Customized tour packages</li>
                    <li>All safety protocols and COVID norms followed</li>
                    <li>Itinerary covers all major destinations</li>
                    <li>24×7 customer service available.All-inclusive packages.</li>
                </ul>
              </div>
              <div>
                <h3 className="ma">Best Hotels and Resorts to Stay in Manali</h3>
                <p className="man">Vista Holidays offers the best Manali honeymoon packages for couples. Here’s why you must choose us to make your honeymoon memorable.</p>
                <ul className="mana">
                    <li>The Orchard Greens</li>
                    <li>Welcome Heritage Urvashi’s Retreat</li>
                    <li>Snow Valley Resorts</li>
                    <li>Sun Park Resort Manali</li>
                </ul>
              </div>
            </>
          )}
          {/* Add descriptions for other states if needed */}
        </div>
      </div>
      <footer className="mfooter">
        <div className="mfooter-content">
          <p className="man">&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="mfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Manali;