// This is where Nyle will code up the UI during first sprint.

// Coordinate with Adam because this view might be the same as Dashboard.js in patient-pages
import Patientcard from "../../components/patientcard";
import "./Patients.css";
import Navbar from "../../components/navbar";


const Patients = (props) => {
  return (
    <div>
      <Navbar />
      <h2>Patients Page</h2>
      <div className="patients">
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
      
      </div>
    </div>
  );
};

export default Patients;
