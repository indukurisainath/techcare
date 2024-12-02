import React from "react";
import "./PatientProfile.css";
import profilePic from '../../assests/profilepic.png';
import { CiCalendarDate } from "react-icons/ci";
import { BsGenderFemale } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { AiFillInsurance } from "react-icons/ai";


const PatientProfile = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={profilePic} alt="Jessica Taylor" className="profile-image" />
        <h2 className="profile-name">Jessica Taylor</h2>
      </div>
      <div className="profile-details">
        <p>
          <p className="detail-label"><CiCalendarDate /> Date Of Birth</p> August 23, 1996
        </p>
        <p>
          <p className="detail-label"><BsGenderFemale /> Gender </p> Female
        </p>
        <p>
          <p className="detail-label"><IoCallOutline /> Contact Info.</p> (415) 555-1234
        </p>
        <p>
          <p className="detail-label"><IoCallOutline /> Emergency Contacts </p> (415) 555-5678
        </p>
        <p>
          <p className="detail-label"><AiFillInsurance /> Insurance Provider</p> Sunrise Health Assurance
        </p>
      </div>
      <button className="show-info-button">Show All Information</button>
    </div>
  );
};

export default PatientProfile;
