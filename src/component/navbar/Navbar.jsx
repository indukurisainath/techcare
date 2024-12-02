import React from "react";
import "./Navbar.css"; // Add CSS for styling the navbar
import { FaUserCircle, FaCalendarAlt, FaEnvelope, FaDollarSign, FaHome } from "react-icons/fa";
import logo from '../../assests/TestLogo@2x.jpg'
import joseimg from '../../assests/joseicon.png'
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={logo} // Replace with actual logo image
          alt="TechCare Logo"
          className="logo"
        />
        {/* <span className="logo-text">Tech.Care</span> */}
      </div>

      <ul className="navbar-links">
        <li>
          <a href="/overview">
            <FaHome /> Overview
          </a>
        </li>
        <li>
          <a href="/patients" className="active">
            <FaUserCircle /> Patients
          </a>
        </li>
        <li>
          <a href="/schedule">
            <FaCalendarAlt /> Schedule
          </a>
        </li>
        <li>
          <a href="/message">
            <FaEnvelope /> Message
          </a>
        </li>
        <li>
          <a href="/transactions">
            <FaDollarSign /> Transactions
          </a>
        </li>
      </ul>

      <div className="navbar-profile">
        <img
          src={joseimg} // Replace with actual profile picture
          alt="Dr. Jose Simmons"
          className="profile-pic"
        />
        <div className="profile-info">
          <span className="profile-name">Dr. Jose Simmons</span>
          <span className="profile-role">General Practitioner</span>
        </div>
        <IoMdSettings className="profile-menu-icon" />
        <BsThreeDotsVertical className="profile-menu-icon" />
        
      </div>
    </nav>
  );
};

export default Navbar;
