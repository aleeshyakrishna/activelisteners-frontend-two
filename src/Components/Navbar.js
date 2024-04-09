import React, { useState } from "react";
import "../Css/Navbar.css";
import ALlogo from "../Images/ALlogo.png";
import { GiBottomRight3DArrow } from "react-icons/gi";
import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AlCloud from "../Images/AlCloud.png";
import Navarrow from "../Images/Navarrow.png";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  const CloseMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="Navbar-main">
        <div onClick={handleClick} className="nav-icons">
          {isOpen ? (
            <IoCloseOutline className="nav-icon" onClick={CloseMenu} />
          ) : (
            <RiMenu5Fill className="nav-icon" onClick={handleClick} />
          )}
          {/* <RiMenu5Fill className="nav-icon" />
          <IoCloseOutline className="nav-icon" /> */}
        </div>
        <nav>
          <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <div>
              <NavLink to="/" className="Links">
                <li>Home</li>
              </NavLink>
              <NavLink to="/Teletherapy" className="Links">
                <li>Speak-Easy</li>
              </NavLink>
              <NavLink to="/Senses" className="Links">
                <li>Senses Resurrection</li>
              </NavLink>
              <NavLink to="/OneOnOne" className="Links">
                <li>One-On-One Session</li>
              </NavLink>
              <NavLink to="/GriefSupport" className="Links">
                <li>Grief Support</li>
              </NavLink>
              <NavLink to="/AffiliateProgram" className="Links">
                <li>AffiliateProgram</li>
              </NavLink>
            </div>
            <div>
              <NavLink to="/GriefsupportGroup" className="Links">
                <li>Grief Support Meetup</li>
              </NavLink>
              <NavLink to="/Preppers" className="Links">
                <li>Preppers</li>
              </NavLink>
              <NavLink to="/Podcast" className="Links">
                <li>Podcast</li>
              </NavLink>
              <NavLink to="/TeamPage" className="Links">
                <li>TeamPage</li>
              </NavLink>
              <NavLink to="/Hiring" className="Links">
                <li>Careers</li>
              </NavLink>
              <NavLink to="/GoalVision" className="Links">
                <li>About us</li>
              </NavLink>
              {/* <NavLink to="/CareerCounselling" className="Links">
                <li>Career Counselling</li>
              </NavLink> */}
            </div>
          </ul>

          <div className="nav-icons"></div>
          <NavLink to="/">
            <img src={ALlogo} alt="" />
          </NavLink>
          <div className="Login-btns">
            <button className="full-rounded">
              <NavLink to="/Login" className="Links">
                <span>Login</span>
              </NavLink>
              <div className="border full-rounded"></div>
            </button>

            <button className="full-rounded">
              <NavLink to="/Signup" className="Links">
                <span>Sign up</span>
              </NavLink>
              <div className="border full-rounded"></div>
            </button>
            {/* <img src={Navarrow} className="navarrow" alt="" /> */}
            <NavLink to={"/UserProfile"} className="Links">
              <FaRegUser className="navarrow" />
            </NavLink>
          </div>
        </nav>
      </div>
      <img src={AlCloud} className="Cloude" />
    </div>
  );
};

export default Navbar;
