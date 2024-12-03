import React from 'react';
import './DiagnosisHistory.css';
import heart from '../../assests/heart.png'
import lungs from '../../assests/lungs.png'
import temp from '../../assests/temp.png'
import { MdOutlineArrowDropDown } from "react-icons/md";
import BloodPressureChart from '../bloodPressureChart/BloodPressureChart';

const DiagnosisHistory = () => {
  return (
    <div className="container">
      <h2 className="title">Diagnosis History</h2>
      <BloodPressureChart/>
      <div className="metrics-container">
        <div className="metric-card blue-bg">
            <img className='metricimg_size' src={heart} alt='heartImg.' />
            <p className="metric-label">Respiratory Rate</p>
          <h3 className="metric-value blue-text">20 bpm</h3>
          <p className="metric-label">Normal</p>
          
        </div>
        <div className="metric-card orange-bg">
        <img className='metricimg_size' src={lungs} alt='heartImg.' />
        <p className="metric-label">Temperature</p>
          <h3 className="metric-value orange-text">98.6°F</h3>
          <p className="metric-label" >Normal</p>
          
        </div>
        <div className="metric-card red-bg">
        <img className='metricimg_size' src={temp} alt='heartImg.' />
        <p className="metric-label">Heart Rate</p>
          <h3 className="metric-value red-text">78 bpm</h3>
          <p className="metric-label"><MdOutlineArrowDropDown /><p>Low than Average</p></p>
          
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
