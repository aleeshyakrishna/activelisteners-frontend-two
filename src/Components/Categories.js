import React from "react";
import "../Css/Categories.css";
import emoji from "../Images/emoji.png";
import chat from "../Images/chat.png";
import weekly from "../Images/weekly.png";
import community from "../Images/community.png";
import Static from "../Images/Static.png";
import Elements from "../Images/Elements.png";
import { NavLink } from "react-router-dom";
const Categories = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="categories-main-holecontainer">
      <div className="puzzle-boy">
        <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
          <span>Services we Offer</span>
          <p>Our Core</p>
          <h1>Discoveries</h1>
        </div>
        <div className="element">
          <img
            src={Elements}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            alt=""
          />
          <h4
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Transformative support for those seeking clarity and understanding
            through active listening.
          </h4>
        </div>
        {/* <img
          src={Maskgroup}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          alt=""
        /> */}
      </div>
      <div className="categories-main">
        <div className="cate-yellow-box">
          <div className="Hoodi">
            {/* <img src={Static} alt="" /> */}
            <iframe
              className="MobileAddiction-yt-video"
              src="https://www.youtube.com/embed/rcxd7w9PryE?si=ZJUIHyOtmVaxFrHK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="cate-left-box">
          <div
            className="box1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
          >
            <img src={community} alt="" />
            <h2>Mobile Addiction</h2>
            <p>
              Obsessive smartphone usage hampers daily life, social interaction,
              productivity.
            </p>
            <NavLink onClick={scrollToTop} to="/MobileAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box2"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2900"
          >
            <img src={chat} alt="" />
            <h2>Social Media Addiction</h2>
            <p>
              Continuous scrolling, likes, and shares diminish real-world
              connections profoundly.
            </p>
            <NavLink onClick={scrollToTop} to="/SocialMediaAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box3"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2500"
          >
            <img src={weekly} alt="" />
            <h2>Gaming Addiction</h2>
            <p>
              Excessive gaming disrupts routines, relationships, and overall
              well-being detrimentally.
            </p>
            <NavLink onClick={scrollToTop} to="/GamingAddiction">
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
          <div
            className="box4"
            data-aos-duration="3000"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={emoji} alt="" />
            <h2>Entertainment & Performance Addiction</h2>
            <p>
              Constant pursuit of thrill undermines personal growth,
              relationships, and well-being.
            </p>
            <NavLink
              onClick={scrollToTop}
              to="/EntertainmentandperformanceAddiction"
            >
              <button style={{ width: "150px", marginLeft: "0%" }}>
                Discover
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
