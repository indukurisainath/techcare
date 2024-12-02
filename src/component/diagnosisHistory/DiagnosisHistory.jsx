import React from 'react';
import './DiagnosisHistory.css';
import heart from '../../assests/heart.png'
import lungs from '../../assests/lungs.png'
import temp from '../../assests/temp.png'
import { MdOutlineArrowDropDown } from "react-icons/md";

const DiagnosisHistory = () => {
  return (
    <div className="container">
      <h2 className="title">Diagnosis History</h2>
      <div className="chart-section">
        <div className="chart-header">
          <h3>Blood Pressure</h3>
          <p>Last 6 months</p>
        </div>
        {/* Chart placeholder */}
        <div className="chart-placeholder">
          <p>Chart placeholder</p>
        </div>
      </div>
      <div className="metrics-container">
        <div className="metric-card blue-bg">
            <img src={heart} alt='heartImg.' />
            <p className="metric-label">Respiratory Rate</p>
          <h3 className="metric-value blue-text">20 bpm</h3>
          <p>Normal</p>
          
        </div>
        <div className="metric-card orange-bg">
        <img src={lungs} alt='heartImg.' />
        <p className="metric-label">Temperature</p>
          <h3 className="metric-value orange-text">98.6°F</h3>
          <p>Normal</p>
          
        </div>
        <div className="metric-card red-bg">
        <img src={temp} alt='heartImg.' />
        <p className="metric-label">Heart Rate</p>
          <h3 className="metric-value red-text">78 bpm</h3>
          <MdOutlineArrowDropDown /><p>Low than Average</p>
          
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
