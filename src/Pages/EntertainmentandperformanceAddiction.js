import React from "react";
import Navbar from "../Components/Navbar.js";
import Enterleft from "../Images/Enterleft.png";
import Enterright from "../Images/Enterright.png";
import Navarrow from "../Images/Navarrow.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import MoAddiction from "../Images/MoAddiction.png";
import Maskgroup from "../Images/Mask group.png";
import PodcastRed from "../Images/PodcastRed.png";
import cover from "../Images/cover.png";
import Therapycategories from "../Components/Therapycategories.js";
import Footer from "../Components/Footer.js";
import GetinTouch from "../Components/GetinTouch.js";

const EntertainmentandperformanceAddiction = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="mobile-addiction-main-container">
          <div className="mobile-addiction-header">
            <div className="header-container">
              <img
                src={Enterleft}
                data-aos="fade-right"
                data-aos-duration="1000"
                alt=""
                width={"150px]"}
              />
              <div className="hdr-text">
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  For Teenagers{" "}
                </h1>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Mobile
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="3000">
                  Addiction
                </h3>
              </div>
              <img
                src={Enterright}
                data-aos="fade-right"
                data-aos-duration="1000"
                alt=""
              />
            </div>
            <div className="btn-compo">
              <button>Get Support</button>
              <img src={Navarrow} alt="" />
            </div>
            <p>
              We believe that early gadget exposure,Adaptation to MobilePhones
              among children has now led to a time where ther Decrease in
              learning
            </p>
          </div>

          <div className="grean-box-mobile-addiction">
            <div className="mobile-addiction-box-green">
              <img
                src={Roundb}
                style={{
                  marginTop: "-40%",
                  marginLeft: "-10%",
                  zIndex: "-1",
                  width: "20%",
                }}
                alt=""
              />

              <div className="inside-mobile-addiction-txt">
                <h1>Are you Addicted to the Entertainment & Performance?</h1>
                {/* <img
                  src={MoAddiction}
                  style={{
                    width: "60%",
                  }}
                  alt=""
                /> */}
                <iframe
              className="adaptationToMobile-yt-video"
              src="https://www.youtube.com/embed/-UvzOWw3Xsw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
              </div>
              <img
                src={Rounda}
                style={{
                  marginRight: "-17%",
                  marginTop: "35%",
                  width: "30%",
                  zIndex: "-1",
                }}
                alt=""
              />
            </div>
          </div>

          <div className="observed-result">
            <div className="observed-result-header">
              <div className="Subscribe-heading">
                <p>Services we Offer</p>
                <h1>Causes of </h1>
                <h2>Entertainment & Performance Addiction</h2>
              </div>
            </div>
            {/* boxes */}
            <div className="observed-result-cate">
              <div className="observed-result-main">
                {/* Fist-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <img src="" alt="" />
                    <h2>Mental health issues</h2>
                    <p>
                      Overuse of mobile devices can cause eye strain, pain, and
                      sleep disruption.
                    </p>
                  </div>

                  <div className="observed-result-box-align">
                    <img src="" alt="" />
                    <h2>Academic or work decline</h2>
                    <p>
                      Watching Tv Shows results in academic neglect, missed
                      assignments, and poor performance.
                    </p>
                  </div>
                </div>
                {/* second-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <img src="" alt="" />
                    <h2>Neglected Responsibilities</h2>
                    <p>
                      Enetrtainment Addiction may neglect tasks, causing
                      academic, work, or familial problems.
                    </p>
                  </div>

                  <div className="observed-result-box-align">
                    <img src="" alt="" />
                    <h2>Sleep Deprivation</h2>
                    <p>
                      Enetrtainment addiction disrupts sleep, worsening physical
                      and mental health issues.
                    </p>
                  </div>
                </div>
                {/* therod-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <img src="" alt="" />
                    <h2>Low Self Esteen</h2>
                    <p>
                      Exposure to violent Platform desensitizes, fosters
                      aggression, and triggers conflicts.
                    </p>
                  </div>

                  <div className="observed-result-box-align">
                    <img src="" alt="" />
                    <h2>Lack of real-life experiences</h2>
                    <p>
                      Enetrtainment addiction offers temporary escape but
                      hinders personal growth ultimately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="yellow-box-mobile-addiction">
                <div className="mobile-addiction-yellow-box">
                  <h4>
                    Get to know How much you are Addicted to Mobile Phones
                  </h4>
                  <button>Take Test</button>
                  <img src={Maskgroup} className="maskgroup-mob" alt="" />
                </div>

                <div className="mobile-addiction-yellow-box">
                  <img
                    src={PodcastRed}
                    style={{
                      width: "100px",
                      position: "absolute",
                      marginLeft: "15%",
                      marginTop: "-16%",
                    }}
                    alt=""
                  />
                  <img
                    src={cover}
                    style={{
                      width: "200px",
                      marginLeft: "1%",
                      borderRadius: "30px",
                    }}
                    alt=""
                  />
                  <span>Recommended Podcast</span>
                  <h4>Are you Addicted to Mobile phone?</h4>
                  <button>Watch Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Therapycategories />
        <GetinTouch />
        <Footer />
      </div>
    </div>
  );
};

export default EntertainmentandperformanceAddiction;
