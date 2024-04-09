import React, { Component, useState } from "react";
import Slider from "react-slick";
import "../Css/Subscribe.css";
import { NavLink } from "react-router-dom";
import FreeMember from "../Images/FreeMember.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Doc from "../Images/Doc.png";
import Think from "../Images/Think.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MentoonBenar from "../Images/MentoonBenar.png";
const Subscribe = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [caro, setCaro] = useState([
    {
      id: 1,
      episode: 1,
      name: "Social Media de-addiction Tips",
      EpiImage: require("../Images/Adiction.png"),
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Social Media",
      cateB: "Mental health",
      cateC: "health",
      // cateD: "",
    },
    {
      id: 2,
      episode: 2,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Loneliness due to Gaming",
      EpiImage: require("../Images/Lonely .png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Loneliness",
      cateB: "health",
      cateC: "Gaming",
      // cateD: "",
    },
    {
      id: 3,
      episode: 3,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "How to handle your  Teenage Children",
      EpiImage: require("../Images/GamingAddiction.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "teenange",
      cateB: "health",
      cateC: "parents",
      // cateD: "",
    },
    {
      id: 4,
      episode: 4,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Are you perplexed mind Person?",
      EpiImage: require("../Images/Untitled_Artwork 22.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Mental Guide",
      cateB: "health",
      // cateC: "",
      // cateD: "",
    },
    {
      id: 5,
      episode: 5,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Why WFH is preffered?",
      EpiImage: require("../Images/Untitled_Artwork 16.png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Healthy Life",
      cateB: "health",
      // cateC: "",
      // cateD: "",
    },
    {
      id: 6,
      episode: 6,
      fravatara: require("../Images/avatar (1).png"),
      fravatarb: require("../Images/avatar.png"),
      name: "Disconnect to Reconnect",
      EpiImage: require("../Images/Disconnect to reconnect .png"),
      discribtions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut.",
      cateA: "Relocation",
      cateB: "health",
      // cateC: "",
      // cateD: "",
    },
  ]);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="Subscribe-main">
        <div className="Subscribe-cate">
          <div className="Subscribe-heading">
            <p>One Platform, Multiple touchpoints</p>
            <h1>How Else we can</h1>
            <h2>Help</h2>
          </div>

          <div
            className="Subscribe-box-main"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="2000"
          >
            <div className="Subscribe-box">
              <div className="Subscribe-box-1">
                <div>
                  <h1>Grief Support Group</h1>
                  <p>Offline & Online weekly meetup</p>
                </div>
                <img
                  src={FreeMember}
                  style={{ width: 100, marginTop: "-10px" }}
                  alt=""
                />
              </div>

              <ul className="Support-group">
                <li>Family, Relationships & Divorce</li>
                <li>Loss of Loved Ones/ Relocation</li>
                <li>Relocation</li>
                <li>Identity and Gender crisis</li>
                <li>Substance abuse</li>
                <li>Gaming/ Social Media/ Mobile Addicts</li>
                <li>Elderly Support Group</li>
              </ul>
              <div className="hdrsubs-butns">
                <button className="btn-primary">Know More</button>
                <img src={Kadhoolu} alt="" />
              </div>
            </div>
            <div className="Subscribe-box">
              <div className="Subscribe-box-2">
                <div>
                  <h1>Psychologists available via Phone consultation !</h1>
                  {/* <p>Offline & Online weekly meetup</p> */}
                </div>
                {/* <img src={FreeMember} style={{ width: 100 }} alt="" /> */}
              </div>

              <ul className="Support-group">
                <li>Bullying, Body Shaming, Cyber Trolling</li>
                <li>Low Self Esteem / Suicidal Tendencies </li>
                <li>Introverts</li>
              </ul>
              <div className="hdrsubs-butns-a">
                <button>Know More</button>
                <img src={Doc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hdr-caro">
        <div className="hdr-caro-a">
          <div className="caro-heading-tag">
            <div className="bg" data-aos="zoom-in" data-aos-duration="1000">
              <span>One Platform, Multiple touchpoints</span>
              <p>Podcast</p>
              <h1>Everyone</h1>
            </div>
            <div className="element">
              {/* <img
              src={Elements}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              alt=""
            /> */}
              {/* <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Transformative support for those seeking clarity and understanding
              through active listening.
            </p> */}
            </div>
            <img
              src={Think}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              alt=""
            />
          </div>
          <div className="subscribe-caro-container">
            <div className="slider-container">
              <Slider {...settings}>
                {caro.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="caro-for-hdr">
                        <div className="home-caro-align">
                          <img src={item.EpiImage} alt="" />
                          <ul className="epi-list">
                            <li>
                              <p style={{ fontWeight: "bold", color: "green" }}>
                                Episode {item.id}
                              </p>
                            </li>
                            <li>
                              <p
                                style={{ fontWeight: "bold", fontSize: "20px" }}
                              >
                                {item.name}
                              </p>
                            </li>
                            <hr></hr>
                            <li>
                              <p>{item.discribtions}</p>
                            </li>
                          </ul>
                        </div>

                        <div className="cate-home-caro">
                          <div className="cate-home-caro-btns">
                            <button>{item.cateA}</button>
                            <button>{item.cateB}</button>
                            <button>{item.cateC}</button>
                          </div>
                          <div className="host-home-caro">
                            <p>Hosted by :</p>
                            <div className="host-imgage">
                              <img
                                src={item.fravatarb}
                                style={{ width: "60px" }}
                                alt=""
                              />
                              <img
                                src={item.fravatarb}
                                style={{
                                  width: "60px",
                                  borderRadius: "500%",
                                }}
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="carosel-home-button">
        <NavLink className="Links" onClick={scrollToTop} to="/Podcast">
          <button>Discover</button>
        </NavLink>
      </div>
      <div className="mentoonsbaner">
        <img src={MentoonBenar} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
