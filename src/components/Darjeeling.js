import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Darjeeling.css";

const Darjeeling = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Darjeeling");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="darjhoneymoon-container">
        <div className="darjoverlay">
          <h2 className="darjtitle">Darjeeling Couple Packages</h2>
          <p className="darjsubtitle">Travel WorldClass</p>
          <div
            className={`darjenquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="darjcontent-container">
        <div className="darjstate-list">
          <ul className="darul">
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

          <div className="darjquestion-box">
            <h4>Got a Question?</h4>
            <p className="darpara">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="darjcontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="darjform-box">
          <h3 className="darthree">Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
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
        <div className="darjstate-description">
          {selectedState === "Darjeeling" && (
            <>
              <div>
                <h3 className="darthree">Budget-Friendly Darjeeling Couple Packages at Vista Holidays</h3>
                <p className="darpara">
                A honeymoon is a perfect opportunity to escape from the hullaballoo of the wedding and spend some time together before settling into marital life. At Vista Holidays, we create couple packages customized to suit your requirements perfectly. If you fancy a romantic escapade to an exotic destination, visit us to choose from a range of Darjeeling couple packages.</p>                
                </div>
              <div>
                <h3 className="darthree">Why Choose Darjeeling?</h3>
                <p className="darpara">
                Darjeeling is bordered by the world-famous Kanchenjunga peaks and is an ideal place for a romantic holiday. This little hill town looks nothing short of a fairy-tale with many small hills of neatly cured tea gardens, wild orchids, tall rows of pine trees, and the chugging of the miniature mountain trains. If you’re looking to explore this hill station in all its glory, visit us to choose from the best Darjeeling couple tour packages.</p>
                <img className="darig" src="https://t3.ftcdn.net/jpg/02/84/37/74/360_F_284377440_j7mnvUTPiDmqj5qmaDQFFu6Hi8qfbCqB.jpg" alt="Darjeeling" />
              </div>
              <div>
                <h3 className="darthree">How to Reach Darjeeling?</h3>
                <p className="darpara">Darjeeling is well connected to other cities by air and road but not by train.The Bagdogra International Airport near Siliguri is the nearest airport with multiple direct flights to major cities like New Delhi, Mumbai, Bangalore, Hyderabad, and Chennai. If you’re keen on traveling by road, the only other way to get to Darjeeling is to take a bus or a taxi cab from Siliguri or New Jalpaiguri. If you are up for a slow seven-hour ride up the mountains while taking in the picturesque beauty of Darjeeling, consider boarding a toy train from Jalpaiguri or Siliguri. Vista Holidays offers comprehensive Darjeeling couple packages that include travel arrangements, transfers, accommodation, and sightseeing.</p>
              </div>
              <div>
                <h3 className="darthree">What Are the Best Places to Visit for Couples?</h3>
                <p className="darpara">With its fantastic scenery and romantic atmosphere, Darjeeling is one of the best romantic destinations in India. Some of the famous places we include in our Darjeeling couples packages include:</p>
                <ul className="darul">
                    <li>Tiger Hill</li>
                    <li>Darjeeling Himalayan Railway (Toy Train)</li>
                    <li>Batasia Loop</li>
                    <li>Darjeeling Mall (Chowrasta)</li>
                </ul>
                <img  className="darig" src="https://5.imimg.com/data5/EF/ME/WU/SELLER-56318053/andaman2-990x490-500x500.jpg" alt="Darjeeling"></img>
              </div>
              <div>
                <h3 className="darthree">Places Included in Our Darjeeling couple Packages</h3>
                <p className="darpara">Darjeeling offers all that you could ask for in a romantic getaway. This quaint hill station provides a beautiful view of the Kanchenjunga and an exotic sunrise view from Tiger Hills. The rope car ride offers a stunning panoramic view of the snow-capped mountains and lush green tea estates slopes. With Vista Holidays’ Darjeeling couple packages, you can ride the toy mountain train and visit the beautiful Jhakri waterfalls. You also get to experience the tranquillity of the Buddhist monasteries and the Japanese Temple. In addition, Darjeeling has a beautiful museum and some tastefully put-together art galleries for art and history aficionados.Gangtok, the capital of Sikkim, is just a four-hour drive away from Darjeeling and home to scenic lakes and landscapes.</p>
              </div>
              <div>
                <h3 className="darthree">What to Eat in Darjeeling?</h3>
                <p className="darpara">Darjeeling cuisine is a mix of Tibetan, Naga, and Nepali cuisine. There are plenty of specializing in Thai, Tibetan, Nepali, Chinese, and North-East Indian food. Some of the local dishes you must try include:</p>
                <ul className="darul">
                    <li>Thupka</li>
                    <li>The Thali Meals</li>
                    <li>Sael Rotis</li>
                    <li>Darjeeling Tea</li>
                </ul>
                <img className="darig" src="https://media.istockphoto.com/id/1223612773/photo/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrow-gauge-railway-in-north-india-which.jpg?s=612x612&w=0&k=20&c=vYxFBTbvcLcivcYjtFB-S_P7ETUwgIj0mAk84l9uC1g=" alt="Darjeeling"></img>
              </div>
              <div>
                <h3 className="darthree">Why Vista Holidays is the Best Travel Agency for Darjeeling Couple Packages?</h3>
                <p className="darpara">Vista Holidays is the top choice for Darjeeling couple packages, backed by over four decades of experience in offering budget-friendly vacations. We specialize in creating customized packages that ensure you experience Darjeeling to the fullest, all while adhering to strict safety protocols and COVID norms. Our itineraries cover all major destinations, providing a comprehensive and memorable trip. With 24×7 customer service and all-inclusive packages, Vista Holidays ensures a seamless and enjoyable travel experience for couples.</p>
              </div>
              <div>
                <h3 className="darthree">Best Hotels and Resorts to Stay in Darjeeling</h3>
                <p className="darpara">Vista Holidays offers the best Darjeeling couple packages for couples. Here’s why you must choose us to make your couple time memorable.</p>
                <ul className="darul">
                    <li>Arcadia Heritage Resort</li>
                    <li>Dungmali Heritage Resort</li>
                    <li>Mayfair Darjeeling</li>
                </ul>
              </div>
            </>
          )}
          {/* Add descriptions for other states if needed */}
        </div>
      </div>
      <footer className="darjfooter">
        <div className="darjfooter-content">
          <p className="darpara">&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="darjfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Darjeeling;