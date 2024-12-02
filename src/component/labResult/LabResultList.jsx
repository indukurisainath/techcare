import React from "react";
import "./LabResultList.css";
import { MdOutlineFileDownload } from "react-icons/md";

const labResults = [
  { name: "Blood Tests" },
  { name: "CT Scans" },
  { name: "Radiology Reports" },
  { name: "X-Rays", highlighted: true },
  { name: "Urine Test" },
];

const LabResults = () => {
  return (
    <div className="lab-results-container">
      <h2>Lab Results</h2>
      <ul className="lab-results-list">
        {labResults.map((result, index) => (
          <li
            key={index}
            className={`lab-result-item ${result.highlighted ? "highlighted" : ""}`}
          >
            <span className="lab-result-name">{result.name}</span>
            <button className="download-button">
            <MdOutlineFileDownload />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
