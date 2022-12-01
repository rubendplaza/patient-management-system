// This is where Nyle will code up the UI during first sprint.

// Coordinate with Adam because this view might be the same as Patient.js in doctor-pages
import Patientcard from "../../components/patientcard";
import { VscFilePdf } from "react-icons/vsc";
import "./DoctorPatient.css";
import Navbar from "../../components/navbar";
import userCircle from "../../images/User_cicrle_light.svg";
import "semantic-ui-css/semantic.min.css";
import {
  Menu,
  Image,
  Container,
  Segment,
  List,
  Grid,
  Header,
  Table,
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

const DoctorPatient = (props) => {
  return (
    <div>
      <Menu
        color="blue"
        inverted
        fixed="top"
        size="large"
        borderless
        style={{ borderBottomWidth: "5px", borderBottomColor: "black" }}
      >
        <Menu.Item
          as={NavLink}
          to="/doctorpatients"
          name="my-patients"
          active={false}
        >
          My Patients
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/doctorpatient"
          name="my-patient"
          active={false}
        >
          My Patient
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/"
          name="Icon"
          active={false}
          position="right"
        >
          <Image src={userCircle} size="mini" />
        </Menu.Item>
      </Menu>
      <h2>Patient Page</h2>
      <div className="patient">
        <Patientcard
          img="/lebron.jpg"
          name="LeBron James"
          sex="Male"
          age="37"
          blood="AB-"
          ill="Bad Teammates"
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
            <td>
              <VscFilePdf />
            </td>
          </tr>
          <tr>
            <td>Covid-19</td>
            <td>October 4, 2022</td>
            <td>Negative</td>
            <td>
              <VscFilePdf />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DoctorPatient;
