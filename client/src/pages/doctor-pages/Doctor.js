import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams,
  Outlet,
} from "react-router-dom";

import DoctorPatients from "./DoctorPatients";
import DoctorPatient from "./DoctorPatient";

const Doctor = (props) => {
  let match = useMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/`}>Doctor:</Link>
        </li>
        <li>
          <Link to={`${match.url}/patients`}>My Patients</Link>
        </li>
        <li>
          <Link to={`${match.url}/patient`}>My Patient</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Doctor;
