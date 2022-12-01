import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams,
  Outlet,
  NavLink,
} from "react-router-dom";
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

import DoctorPatients from "./DoctorPatients";
import DoctorPatient from "./DoctorPatient";

const Doctor = (props) => {
  console.log(localStorage.getItem("id"));
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

      <DoctorPatients />
    </div>
  );
};

export default Doctor;
