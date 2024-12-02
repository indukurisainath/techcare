import NavBar from "./component/navbar/Navbar";
import PatientsList from "./component/patientList/PatientList";
import PatientProfile from "./component/patientProfile/PatientProfile";


function App() {
  return (
    <div >
    
      <NavBar/>
      <PatientsList/>
      <PatientProfile/>
    </div>
  );
}

export default App;
