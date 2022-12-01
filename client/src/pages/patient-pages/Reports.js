// This is where Adam will code up the UI during first sprint.

import userCircle from "../../images/User_cicrle_light.svg";
import { NavLink, withRouter } from "react-router-dom";
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

const Reports = (props) => {
  // Temporary test data
  const INFO = {
    img: "/Images/JaneDoe.png",
    name: "Jane Doe",
    sex: "Female",
    age: 21,
    bloodType: "A+",
    knownIllnesses: ["Peanut Allergy", "Test Illness 2"],
    upcomingAppointments: [
      {
        location: "Women's Hospital",
        purpose: "Ultrasound",
        date: "Thursday, October 5, 2022, 5:00PM",
      },
      {
        location: "Scarborough General Hospital",
        purpose: "X-ray",
        date: "Sunday, October 21, 2022, 6:00PM",
      },
    ],
    reports: [
      {
        type: "Blood Test",
        date: "October 4, 2022",
        notes: "All clear",
        pdf: "placeholder",
      },
      {
        type: "Covid-19",
        date: "September 2, 2022",
        notes: "Negative",
        pdf: "placeholder",
      },
    ],
  };

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
      <Container style={{ marginTop: "7em" }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Report</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>PDF</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {INFO.reports.map((reportDetails) => (
            <Table.Row>
              <Table.Cell>{reportDetails.type}</Table.Cell>
              <Table.Cell>{reportDetails.date}</Table.Cell>
              <Table.Cell>{reportDetails.notes}</Table.Cell>
              <Table.Cell>
                <Image src="/Images/Out.svg" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default Reports;
