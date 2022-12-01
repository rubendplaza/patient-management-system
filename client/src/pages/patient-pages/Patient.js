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

import Reports from "./Reports";
import Dashboard from "./Dashboard";

const Patient = (props) => {
  let match = useMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/`}>Patient:</Link>
        </li>
        <li>
          <Link to={`${match.url}/dashboard`}>Dashboard</Link>
        </li>
        <li>
          <Link to={`${match.url}/reports`}>Reports</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Patient;
