import React from "react";
import "./DiagnosticList.css";

const diagnosticData = [
  {
    problem: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    problem: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    problem: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
];

const DiagnosticList = () => {
  return (
    <div className="diagnostic-list-container">
      <h2 className="dignostic_heading">Diagnostic List</h2>
      <table className="diagnostic-table">
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.map((diagnosis, index) => (
            <tr key={index}>
              <td>{diagnosis.problem}</td>
              <td>{diagnosis.description}</td>
              <td>{diagnosis.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
