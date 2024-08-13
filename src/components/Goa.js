import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Goa.css";

const Goa = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Goa");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="goahoneymoon-container">
        <div className="coverlay">
          <h2 className="ctitle">Goa Couple Packages</h2>
          <p className="csubtitle">Travel WorldClass</p>
          <div
            className={`cenquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="ccontent-container">
        <div className="cstate-list">
          <ul className="goaul">
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

          <div className="cquestion-box">
            <h4>Got a Question?</h4>
            <p className="goapara">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="ccontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="cform-box">
          <h3 className="goathree">Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
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
        <div className="cstate-description">
          {selectedState === "Goa" && (
            <>
              <div>
                <h3 className="goathree">Best Goa Couple Packages-All Inclusive & Affordable Tour Packages</h3>
                <p className="goapara">
                Goa has always been the dream destination for party-hopping travellers thanks to its dynamic nightlife and vibrant parties. But that’s not all – it’s a much sought-after destination for newlyweds as well. At GT Holidays, we offer a wide range of Goa honeymoon packages that include the most romantic itinerary with plenty of opportunities to spend quality time together.</p>
              </div>
              <div>
                <h3>How to Plan Couple Trip to Goa?</h3>
                <p className="goapara">
                At Vista Holidays, we usually suggest the 3 nights 4 days Goa honeymoon packages that include attractions in North and South Goa. If you’re looking for the best time to visit, we suggest planning the trip from November to February. The weather is pleasant and comfortable around these months. The summer is off-season and the best time to shop for deals on Goa honeymoon package prices.</p>
                <img  className="goag" src="https://t4.ftcdn.net/jpg/03/20/00/21/360_F_320002102_Mtgit9EEEutS4yq3A7kl2pGb4VKO6IQI.jpg" alt="Goa" />
              </div>
              <div>
                <h3 className="goathree">Best Places to Visit in Goa</h3>
                <p className="goapara">From Calangute to Palolem and Candolim, Goa is blessed with some of the best beaches in India. Anjuna and Baga are wonderful if you’re in North Goa and the party-loving type. But South Goa is home to the best-secluded beaches that offer a serene and relaxing atmosphere for newlyweds looking for a quiet romantic stroll.Typical Goa honeymoon tour packages from GT Holidays include all the famous beaches on the itinerary. Some of the other popular tourist attractions on the package include Fort Aguada, Dona Paula, Old Goa Church, and the Mangeshi Temple. At GT Holidays, we provide the best Goa packages for couples to accommodate all budgets.</p>
              </div>
              <div>
                <h3 className="goathree">What to Do in Goa and When to Visit Goa?</h3>
                <p className="goapara">For a honeymoon in Goa, South Goa offers a quieter, picturesque experience with quality dining and entertainment, while North Goa is busier but has more options for eating out and partying. Early March to April is ideal for summer honeymoons, while November to early January is best for winter, with cooler weather and festive events. Monsoon season provides a romantic, quieter getaway for nature lovers, though some areas may be inaccessible due to rain.</p>
                <img  className="goag" src="https://osmvacation.com/admin/content/03-04-2021-2-27-43-pm322-3228578_day-top-10-goa-tourist-places.jpg" alt="Goa"></img>
              </div>
              <div>
                <h3>Which Part of Goa is Best for a Couple Tour?</h3>
                <p className="goapara">Every place in Goa refreshes you with its breath-taking natural beauty and offers picturesque views. The following are some of Goa’s most romantic locations.</p>
                <ul className="goaul">
                    <li>South Goa</li>
                    <li>North Goa</li>
                </ul>
                <img className="goag" src="https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww" alt="Goa"></img>
              </div>
              <div>
                <h3 className="goathree">What is the Best Time to Visit Goa for a Couples?</h3>
                <p className="goapara">The best time for couples to visit Goa depends on the experience you desire. For a festive and lively atmosphere with pleasant weather, the winter months from November to early January are ideal. This period includes celebrations like Diwali, Christmas, and New Year, adding a romantic and vibrant touch to your trip. If you prefer a quieter, more intimate getaway, consider visiting during the monsoon season from June to September. The lush greenery and scenic beauty make Goa especially enchanting, though some areas may be inaccessible due to heavy rain. For those seeking a peaceful beach experience without the crowds, early summer from March to April is a great choice, offering warm weather and serene beaches. However, it's best to avoid the peak summer months of May and June, as it can get quite hot and humid.</p>
              </div>
              <div>
                <h3 className="goathree">Why is Vista holidays the Best Travel Agency for Goa couple Packages?</h3>
                <p className="goapara">Vista Holidays is renowned for offering the best Goa couple packages by crafting personalized experiences that cater to couples' specific needs. They provide exclusive deals on luxury resorts, private beach dinners, and spa treatments, ensuring a romantic getaway. With expert knowledge of Goa, they guide you to the best spots, whether you prefer the tranquility of South Goa or the vibrant nightlife of North Goa. Their comprehensive services cover everything from flights to local tours, allowing couples to relax and enjoy their trip. Known for excellent customer service, Vista Holidays ensures a memorable and hassle-free experience.</p>
              </div>
              <div>
                <h3 className="goathree">Best Hotels and Resorts to Stay in Kerala for Honeymoon</h3>
                <p className="goapara">We have included the best accommodation alternatives for you in the list below, ranging from affordable to luxury depending upon the Goa honeymoon package price you opted for.</p>
                <ul className="goaul">
                    <li>Taj Exotica, Benaulim</li>
                    <li>The Leela, Cavelossim</li>
                    <li>Marquis Beach Resort, Candolim</li>
                    <li>Planet Hollywood Beach Resort, Utorda </li>
                </ul>
              </div>
            </>
          )}
          


          
        </div>
      </div>
      <footer className="cfooter">
        <div className="cfooter-content">
          <p className="goapara">&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="cfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Goa;