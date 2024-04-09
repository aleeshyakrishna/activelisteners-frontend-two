import React from "react";
import "../Css/AffiliateProgram.css";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import PUZA from "../Images/PUZA.png";
import PUZB from "../Images/PUZB.png";
import EllipseRed from "../Images/EllipseRed.png";
import Navarrow from "../Images/Navarrow.png";
import PsyAff from "../Images/PsyAff.png";
import ClgGratuate from "../Images/ClgGratuate.png";
import NGO from "../Images/NGO.png";
import THands from "../Images/THands.png";
import FormA from "../Images/FormA.png";
import TS from "../Images/TS.png";
import TP from "../Images/TP.png";
import FormB from "../Images/FormB.png";
import MM from "../SmallElements/MM.png";
import MG from "../SmallElements/MG.png";
const AffiliateProgram = () => {
  return (
    <div>
      <Navbar />
      <div className="affiliate-program-main">
        {/* affilate-heading */}
        <div className="affiliate-program-heading">
          <img src={EllipseRed} alt="" />
          <img src={PUZA} alt="" />
          <div className="therapy-heading">
            <p>Affiliate</p>
            <h1>Program</h1>
            <h2>For You</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
            <div className="inside-button">
              <button>Know more</button>
              {/* <img src={Navarrow} alt="" /> */}
            </div>
          </div>
          <img src={PUZB} alt="" />
        </div>
        {/* psycologist-part */}
        <div className="psycologist-part">
          <div className="psycologist-image-part">
            <img src={PsyAff} alt="" />
          </div>
          <div className="psycologist-text-part">
            <div className="therapy-heading">
              <p>Meetup groups developed and Delivered By Psychologists</p>
              <h1>If you are a Psychologist</h1>
              <h2>Come ! Join us</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
              {/* <div className="inside-button">
                <button>Know more</button>
                <img src={Navarrow} alt="" />
              </div> */}
            </div>
            <div className="psycologist-how-can-join">
              <h1>Who can Join</h1>
              <p>A safe space to share experiences, connect with others.</p>
              <div className="psycologist-how-can-join-box-container">
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* clg gratuate */}
        <div className="Clg-graduate-part">
          <div className="clg-gratuate-text-part">
            <div className="therapy-heading">
              <p>Meetup groups developed and Delivered By Psychologists</p>
              <h1>If you are a College Graduate</h1>
              <h2>Come ! Join us</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
              {/* <div className="inside-button">
                <button>Know more</button>
                <img src={Navarrow} alt="" />
              </div> */}
            </div>
            <div className="psycologist-how-can-join">
              <h1>Who can Join</h1>
              <p>A safe space to share experiences, connect with others.</p>
              <div className="psycologist-how-can-join-box-container">
                <div className="Clg-how-can-join-box">
                  {" "}
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="Clg-how-can-join-box">
                  {" "}
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="Clg-how-can-join-box">
                  {" "}
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="Clg-how-can-join-box">
                  {" "}
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cls-gratuate-image-part">
            <img src={ClgGratuate} alt="" />
          </div>
        </div>
        {/* Ngo */}
        <div className="NGO-part">
          <div className="NGO-image-part">
            <img src={NGO} alt="" />
          </div>
          <div className="NGO-text-part">
            <div className="therapy-heading">
              <p>Meetup groups developed and Delivered By Psychologists</p>
              <h1>If you own a NGO </h1>
              <h2>Come ! Join us</h2>
              <img src={Yellowline} className="Yellowline" alt="" />
              {/* <div className="inside-button">
                <button>Know more</button>
                <img src={Navarrow} alt="" />
              </div> */}
            </div>
            <div className="psycologist-how-can-join">
              <h1>Who can Join</h1>
              <p>A safe space to share experiences, connect with others.</p>
              <div className="psycologist-how-can-join-box-container">
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
                <div className="psycologist-how-can-join-box">
                  <img src={THands} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni ducimus natus iure quos dolorum animi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* engage with us */}
      <div className="enga-main">
        <div className="therapy-heading">
          <p>Connect with us</p>
          <h1>Egange with </h1>
          <h2>Active Listeners </h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          {/* <div className="inside-button">
                <button>Know more</button>
                <img src={Navarrow} alt="" />
              </div> */}
        </div>
        <div className="enagewith-conatiner">
          <div className="enage-box">
            <h2>Monthly Meets</h2>
            <img src={MM} alt="" />
          </div>
          <div className="enage-box">
            <h2>Talk shows</h2>
            <img src={TS} alt="" />
          </div>
          <div className="enage-box">
            <h2>Meetup group</h2>
            <img src={MG} alt="" />
          </div>
          <div className="enage-box">
            <h2>Theatre Performing</h2>
            <img src={TP} alt="" style={{ width: "115%" }} />
          </div>
        </div>
      </div>
      {/* getin touch form for affiliate program */}

      {/* <GetinTouch /> */}
      <div className="getin-touch-affilate-main">
        <img src={FormB} alt="" />
        <div className="getin-touch-affilate">
          <div className="therapy-heading">
            <p>Our Goals</p>
            <h1>Get in Touch </h1>
            <h2>With us</h2>
            <img src={Yellowline} className="Yellowline" alt="" />
            {/* <div className="inside-button">
                <button>Know more</button>
                <img src={Navarrow} alt="" />
              </div> */}
          </div>
          <form>
            <div className="getin-touch-affilate-form">
              <div>
                {" "}
                <label>Full name *</label>
                <input type="text" />
              </div>
              <div>
                {" "}
                <label>Email *</label>
                <input type="text" />
              </div>
              <div>
                {" "}
                <label>Phone no *</label>
                <input type="text" />
              </div>
              <div>
                {" "}
                <label>Subject</label>
                <input type="text" />
              </div>
              <div className="message-getin-touch-affilate">
                {" "}
                <label>Message</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>
        <img src={FormA} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default AffiliateProgram;
