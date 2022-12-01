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

import Reports from "./Reports";
import Dashboard from "./Dashboard";

const Patient = (props) => {
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
        <Menu.Item as={NavLink} to="/dashboard" name="Dashboard" active={false}>
          Dashboard
        </Menu.Item>
        <Menu.Item as={NavLink} to="/reports" name="Reports" active={false}>
          Reports
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

      <Dashboard />
    </div>
  );
};

export default Patient;
