// This is where Nyle will code up the UI during first sprint.

// Coordinate with Adam because this view might be the same as Patient.js in doctor-pages
import Patientcard from "../../components/patientcard";
import { VscFilePdf } from "react-icons/vsc";
import "./Patient.css";

const Patient = (props) => {
  return (
    <div>
      <h2>Patient Page</h2>
      <div className="patient">
        <Patientcard 
          img="/lebron.jpg"
          name="LeBron James"
          sex="Male"
          age="37"
          blood="AB-"
          ill="bad teammates"
        />

        <h2>Upcoming Appointments</h2>
          <table>
            <tr>
              <th>Where</th>
              <th>Purpose</th>
              <th>When</th>
            </tr>
            <tr>
              <td>Humber River Hospital</td>
              <td>X-Ray</td>
              <td>Wednesday, October 5, 2022</td>
            </tr>
            <tr>
              <td>Madison Square Garden</td>
              <td>Drop 50</td>
              <td>Thursday, October 6, 2022</td>
            </tr>
          </table>

        <h2>Reports</h2>
        <table>
          <tr>
            <th>Report</th>
            <th>Date</th>
            <th>Notes</th>
            <th>PDF</th>
          </tr>
          <tr>
            <td>Blood Test</td>
            <td>October 4, 2022</td>
            <td>Contains ice</td>
            <td><VscFilePdf /></td>
          </tr>
          <tr>
            <td>Covid-19</td>
            <td>October 4, 2022</td>
            <td>Negative</td>
            <td><VscFilePdf /></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Patient;
