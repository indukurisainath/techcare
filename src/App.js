

import DiagnosisHistory from "./component/diagnosisHistory/DiagnosisHistory";
import DiagnosticList from "./component/diagnosticList/DiagnosticList";
import LabResults from "./component/labResult/LabResultList";
import NavBar from "./component/navbar/Navbar";
import PatientsList from "./component/patientList/PatientList";
import PatientProfile from "./component/patientProfile/PatientProfile";


function App() {
  return (
    <div >
    
      <NavBar/>
      <div><PatientsList/></div>
      <div><PatientProfile/></div>
      <div><LabResults/></div>
      <div><DiagnosticList/></div>
      <div><DiagnosisHistory/></div>
      <div></div>
      <div></div>
      
      
      
      
      
      
    </div>
  );
}

export default App;
