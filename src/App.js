
import DiagnosticList from "./component/diagnosticList/DiagnosticList";
import LabResults from "./component/labResult/LabResultList";
import NavBar from "./component/navbar/Navbar";
import PatientsList from "./component/patientList/PatientList";
import PatientProfile from "./component/patientProfile/PatientProfile";


function App() {
  return (
    <div >
    
      <NavBar/>
      <PatientsList/>
      <PatientProfile/>
      <LabResults/>
      <DiagnosticList/>
    </div>
  );
}

export default App;
