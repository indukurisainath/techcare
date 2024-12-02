import React from "react";
import "./PatientList.css";
import pic1 from '../../assests/pic-1.png'
import pic2 from '../../assests/pic 2.png'
import pic3 from '../../assests/pic 3.png'
import pic4 from '../../assests/pic 4.png'
import pic5 from '../../assests/pic 5.png'
import pic6 from '../../assests/pic 6.png'
import pic7 from '../../assests/pic 7.png'
import pic8 from '../../assests/pic 8.png'
import pic9 from '../../assests/pic 9.png'
import pic10 from '../../assests/pic 10.png'
import pic11 from '../../assests/pic 11.png'
import pic12 from '../../assests/pic 12.png'
import { IoIosSearch } from "react-icons/io";


const patients = [
  { name: "Emily Williams", gender: "Female", age: 18, image: pic1 },
  { name: "Ryan Johnson", gender: "Male", age: 45,image: pic2 },
  { name: "Brandon Mitchell", gender: "Male", age: 36,image: pic3 },
  { name: "Jessica Taylor", gender: "Female", age: 28, highlighted: true,image: pic4 },
  { name: "Samantha Johnson", gender: "Female", age: 56,image: pic5 },
  { name: "Ashley Martinez", gender: "Female", age: 54,image: pic6 },
  { name: "Olivia Brown", gender: "Female", age: 32,image: pic7 },
  { name: "Tyler Davis", gender: "Male", age: 19,image: pic8 },
  { name: "Kevin Anderson", gender: "Male", age: 30,image: pic9 },
  { name: "Dylan Thompson", gender: "Male", age: 36,image: pic10 },
  { name: "Nathan Evans", gender: "Male", age: 58,image: pic11 },
  { name: "Mike Nolan", gender: "Male", age: 51,image: pic12 },
];

const PatientsList = () => {
  return (
    <div className="patients-container">
        <div className="patient_heading">
        <h2>Patients</h2>
        <p className="search_icon"><IoIosSearch /></p>

        </div>
      

      <ul className="patients-list">
        {patients.map((patient, index) => (
          <li
            key={index}
            className={`patient-item ${patient.highlighted ? "highlighted" : ""}`}
          >
            <div className="patient-avatar">
              <img
                src={patient.image || `https://via.placeholder.com/40`}
                alt={`${patient.name}`}
              />
            </div>
            <div className="patient-info">
              <p className="patient-name">{patient.name}</p>
              <p className="patient-details">
                {patient.gender}, {patient.age}
              </p>
            </div>
            <button className="more-options">...</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
