import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Shimla.css";

const Shimla = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Shimla");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    
    <div>
      <div className="honeymoon-container">
        <div className="soverlay">
          <h2 className="stitle">Shimla Couple Packages</h2>
          <p className="ssubtitle">Travel WorldClass</p>
          <div
            className={`senquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="scontent-container">
        <div className="sstate-list">
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

          <div className="squestion-box">
            <h4>Got a Question?</h4>
            <p>
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="scontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="sform-box">
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
        </div>
        </div>
        <div className="sstate-description">
          {selectedState === "Shimla" && (
            <>
              <div>
                <h3 class="sh">Enjoy a Perfect Paradise with Shimla Couple Packages</h3>
                <p class="shi">
                Shimla, Himachal Pradesh’s charming hill station, is blessed with the natural beauty of forests and waterfalls. From strolling through the streets and enjoying a hot beverage in a fancy café to witnessing the sunrise while cozying with your beloved – there’s so much to see and do in Shimla. You can go souvenir shopping, buy the best winter wear at cheap prices, or pick exquisite, handcrafted wooden items. If nothing interests you, pick your favorite viewpoint to go bird watching. And if you’re looking to make your vacation memorable, visit us! At Vista Holidays, we offer Shimla honeymoon packages at the most affordable prices. </p>       
                </div>
              <div>
                <h3 class="sh"> classWhy is Shimla the Best Place for Couples?</h3>
                <p class="shi">
                With the best Shimla honeymoon packages from Vista Holidays, you can explore stunning tourist destinations while spending quality time together with your better half. Himachal Pradesh’s capital city is surrounded by lush vegetation, unique flora, snow-capped mountains, and breathtaking scenery. The lovely weather and stunning location wonderfully complement your lovely mood. We provide a range of services catering to your specific needs, from renting nice and fuzzy honeymoon suits to providing comfortable transportation. With our best Shimla Couple tour packages, you can visit great restaurants, enjoy amazing local cuisine, and shop at unique spots.</p>                
                <img  className="shig" src="https://img.lovepik.com/photo/20230421/medium/lovepik-near-the-shimla-railway-station-in-shimla-photo-image_352116993.jpg" alt="Shimla" />
              </div>
              <div>
                <h3>Tips to Plan a Stress-free Tour in Shimla</h3>
                <ul class="shim">
                    <li>Take woolen clothing even if you’re planning a summer vacation as it could be windy.Depart early in the morning to avoid traffic.</li>
                    <li>Take a first-aid kit, insect repellent, moisturizer, and appropriate hiking clothing for a camping trip.Dress appropriately for skiing or horseback riding.</li>
                    <li>Don’t hesitate to bargain at some of Shimla’s famous shopping areas like The Mall, Tibetan Bazaar, and Lakkar Bazaar.Keep some cash in hand to avoid depending on ATMs or credit cards.</li>
                    <li>Keep your vaccine certificate and some ID proof handy, and most venues require guests to show their COVID vaccination certification before entry.</li>
                </ul>
              </div>
              <div>
                <h3 class="sh">Which Part of Shimla is Best for Couples?</h3>
                <p class="shi">If the beautiful capital of Himachal Pradesh has sparked your interest, here’s everything you need to know about before choosing a romantic Shimla Couple tour package. Some of the best tourist attractions include:</p>
                <ul class="shim">
                    <li>Naldehra Peak</li>
                    <li>Kufri</li>
                    <li>Chail</li>
                    <li>The Scandal Point</li>
                </ul>
                <img className="shig" src="https://images.cnbctv18.com/wp-content/uploads/2022/08/Shimla-shutterstock.jpg?impolicy=website&width=1200&height=900" alt="Shimla"></img>
              </div>
              <div>
                <h3 class="sh">What is the Best Time to Visit Shimla?</h3>
                <p class="shi">Shimla is pleasant all through the year, offering a variety of experiences depending on the season. Ideally, the months from October to March are suitable for couples planning to experience snow for the first time. But if you’re looking for a picture-perfect landscape or interested in camping, paragliding, or trekking, consider visiting Shimla from March to June. But if you’re looking for low-budget Shimla Couple packages, consider visiting the place from July to September.</p>
              </div>
              <div>
                <h3 class="sh">Best Places to Visit in Shimla</h3>
                <p class="shi">Shimla is home to some wonderfully romantic spots that stand up to the buzz around them. A visit to these destinations is sure to make your honeymoon a memorable experience. Here’s a list of things you must do at some of Shimla’s famous places.</p>
                <ul class="shim">
                    <li>Get a panoramic view of the snow-capped mountains from Naldehra Peak.Take a train ride on the Kalka-Shimla on the Shivalik Deluxe Express</li>
                    <li>Visit the lush green forests of the Green Valley that are lined with thousands of pine and deodar trees.Visit Scandal Point to experience nightlife in Shimla</li>
                    <li>Seek the blessings of Lord Hanuman at Jakhoo Hill. Visit Summer Hill for its fervent charm and serene ambiance.</li>
                    <li>Immerse yourselves in the culture and heritage of Shimla with a visit to the Gaiety Theatre.Take a stroll around the Mall with your beloved while enjoying the snow around you.</li>
                </ul>
                <img className="shig" src="https://media.istockphoto.com/id/1223612773/photo/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrow-gauge-railway-in-north-india-which.jpg?s=612x612&w=0&k=20&c=vYxFBTbvcLcivcYjtFB-S_P7ETUwgIj0mAk84l9uC1g=" alt="Shimla"></img>
              </div>
              <div>
                <h3 class="sh">Why Vista Holidays is the Best Travel Agency for Shimla Couple Packages?</h3>
                <p class="shi">Vista Holidays has been offering budget vacation packages for over four decades. We’ve made it our mission to encourage everyone to explore new places and meet new people irrespective of their budget. We’ve curated some of the most exciting vacation packages with innovative travel ideas at a fair cost. We provide a wide range of Shimla Couple packages for couples and guarantee the utmost transparency and cost-effective solutions.</p>
              </div>
              <div>
                <h3 class="sh">Best Hotels and Resorts to Stay in Shimla</h3>
                <p class="shi">We have included the best accommodation alternatives for you in the list below, ranging from affordable to luxury depending upon the Shimla couple package price you opted for.</p>
                <ul class="shim">
                    <li>Hall of Wildflower</li>
                    <li>Springfields Hotel</li>
                    <li>Shimla Holiday Inn</li>
                    <li>Shimla Havens Resort </li>
                </ul>
              </div>
            </>
          )}
          {/* Add descriptions for other states if needed */}
        </div>
      </div>
      <footer className="sfooter">
        <div className="sfooter-content">
          <p>&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="sfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Shimla;