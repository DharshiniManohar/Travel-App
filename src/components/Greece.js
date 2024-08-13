import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Greece.css";

const Greece = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [selectedState, setSelectedState] = useState("Greece");

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <div className="ghoneymoon-container">
        <div className="goverlay">
          <h2 className="gtitle">Greece Couple Packages</h2>
          <p className="gsubtitle">Travel WorldClass</p>
          <div
            className={`genquire-button ${buttonClicked ? "clicked" : ""}`}
            onClick={handleButtonClick}
          >
            Enquire Now
          </div>
        </div>
      </div>

      <div className="gcontent-container">
        <div className="gstate-list">
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

          <div className="gquestion-box">
            <h4>Got a Question?</h4>
            <p className="gre">
              Do not hesitate to call or WhatsApp us. We are happy to talk to you anytime.
            </p>
            <div className="gcontact-info">
              <span>
                <FaPhone /> +91 9940882200
              </span>
              <span>
                <FaEnvelope /> mail@vistaholidays.in
              </span>
            </div>
          </div>
          <div className="gform-box">
            <h3 className="gr">Get the Guaranteed Best Vacation Deals from Vista Holidays</h3>
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
              title="Greece Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1046165.7078492181!2d21.72415959344232!3d39.07418530641856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b632bdf5d2b3d%3A0x6859c7f7f7d9534!2sGreece!5e0!3m2!1sen!2sus!4v1691865045000!5m2!1sen!2sus"
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
        <div className="gstate-description">
          {selectedState === "Greece" && (
            <>
              <div>
                <h3 className="gr">Budget-Friendly Greece Couple Packages at Vista Holidays</h3>
                <p className="gre">
                Millions of tourists visit Greece every year to enjoy the pleasant weather, breathtaking landscape, and vibrant culture. But most importantly, Greece is a budget-friendly destination! At Vista Holidays, we offer a range of Greece couple packages that are affordable yet include the very best that the country offers.</p>                
                </div>
              <div>
                <h3 className="gr">Why Visit Greece?</h3>
                <p className="gre">
                Greece is beautiful and has a vibrant history that dates back to the Bronze Age and was once the seat of an ancient civilization. Everything in Greece has an irresistible charm: the black sand beaches in Santorini, the all-white architecture in Oia and Crete, or super luxurious resorts in Mykonos.</p>                
                <img className="grc" src="https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.webp?b=1&s=170667a&w=0&k=20&c=wOaDf_FP9nFOPg9GiigXIzqCJatw94bR74R0ZbxJe6A=" alt="Greece" />
              </div>
              <div>
                <h3 className="gr">How to Get to and Around Greece?</h3>
                <p className="gre">Athens is the country’s capital city with an international airport and a rail station that is well connected with the rest of the world. The Eleftherios Venizelos International Airport in Athens is the primary airport with frequent flights across all destinations. While you cannot get to Athens directly from Europe, some trains connect Thessaloniki to Sofia, Bucharest, and Belgrade. You can then take the suburban railway to get to Athens by train.If you’re planning to visit Greece by boat, consider booking a cruise from India, although we don’t offer one currently.</p>
              </div>
              <div>
                <h3 className="gr">What to Eat When in Greece?</h3>
                <p className="gre">Don’t miss out on these local delicacies in Greece:</p>
                <ul className="gree">
                    <li>Taramasalata – a fish roe dip mixed with olive oil and lemon juice and placed on a bed of some starch like bread, potato, or almonds.</li>
                    <li>Dolmades- vegetables stuffed with a combination of rice and meat or vegetables along with a heady concoction of exotic herbs.</li>
                    <li>Moussaka- A local baked delicacy of sautéed aubergine, minced lamb, puréed tomato, onion, garlic, and spices, and a topping of béchamel sauce and cheese.</li>
                    <li>Desserts – baklawas, Greek yoghurt, galaktoboureko, semolina halva, & more.</li>
                </ul>
                <img className="grc" src="https://cdn.pixabay.com/photo/2020/02/06/18/43/santorini-4825173_640.jpg" alt="Greece"></img>
              </div>
              <div>
                <h3 className="gr">When is the Best Time to Visit Greece?</h3>
                <p className="gre">April to June is the spring season in Greece and the best time to visit the country. November through March is off-season and the best time for discounted Greece honeymoon packages. Early autumn, i.e., September and October are equally pleasant and ideal for a vacation. They’re also the best time to find great deals on Greece honeymoon packages. However, July and August are peak tourist seasons and not the perfect time for a laidback romantic vacation. Not to mention, almost everyone in Greece is on vacation in August.</p>
              </div>
              <div>
                <h3 className="gr">What Are Some of The Best Places to Visit in The Greece for A Couple Tour?</h3>
                <p className="gre">It’s not every day that you get to be surrounded by sparkling waters and clear beaches. Everything about the Greece is wonderful, but some places stand out more than others.</p>
                <ul className="gre">
                    <li>Santorini</li>
                    <li>Mykonos</li>
                    <li>Athens</li>
                    <li>Nafplio</li>
                </ul>
                <img className="grc" src="https://img.freepik.com/premium-photo/ancient-greece-hd-8k-wallpaper-stock-photographic-image_973183-10871.jpg" alt="Greece"></img>
              </div>
              <div>
                <h3 className="gr">Why Vista Holidays is the Best Travel Agency for Greece Couple Packages?</h3>
                <p className="gre">Vista Holidays is the top choice for Greece couple packages, backed by over four decades of experience in offering budget-friendly vacations. We specialize in creating customized packages that ensure you experience Greece to the fullest, all while adhering to strict safety protocols and COVID norms. Our itineraries cover all major destinations, providing a comprehensive and memorable trip. With 24×7 customer service and all-inclusive packages, Vista Holidays ensures a seamless and enjoyable travel experience for couples.</p>
              </div>
              <div>
                <h3 className="gr">How To Find Some of The Best Beach Resorts in the Greece?</h3>
                <p className="gre">At Vista Holidays, we’ve partnered with some of the best hotels and resorts across Greece to provide the best accommodation for our guests. Some of the best hotels to stay in Greece include:</p>
                <ul className="gree">
                    <li>Adamant Suites, Santorini</li>
                    <li>Kirini Suites And Spa, Santorini</li>
                    <li>Grand Resort Lagonissi, Athens</li>
                </ul>
              </div>

            </>
          )}
        </div>
      </div>
      <footer className="gfooter">
        <div className="gfooter-content">
          <p>&copy; 2024 Vista Holidays. All Rights Reserved.</p>
          <div className="gfooter-links">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Greece;