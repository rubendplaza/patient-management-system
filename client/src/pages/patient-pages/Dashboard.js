// This is where Adam will code up the UI during first sprint.

// Coordinate with Nyle because this view might be the same as Patient.js in doctor-pages

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

const Dashboard = (props) => {
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
      <Container fluid style={{ marginTop: "7em" }}>
        <Grid centered padded relaxed columns={2} divided>
          <Grid.Column verticalAlign="middle" width={2}>
            <Image src={INFO.img} circular />
          </Grid.Column>

          <Grid.Column>
            <Segment
              padded
              raised
              style={{
                borderWidth: "2px",
                borderColor: "black",
                borderRadius: "25px",
              }}
            >
              <Segment vertical>Name: {INFO.name}</Segment>
              <Segment vertical>Sex: {INFO.sex}</Segment>
              <Segment vertical>Age: {INFO.age}</Segment>
              <Segment vertical>Blood Type: {INFO.bloodType}</Segment>
              <Segment vertical>
                Known Illnesses:{" "}
                <List>
                  {INFO.knownIllnesses.map((illness) => (
                    <List.Item>{illness}</List.Item>
                  ))}
                </List>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>

        <Container style={{ marginTop: "4em" }}>
          <Header size="large">Upcoming Apointments</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Where</Table.HeaderCell>
                <Table.HeaderCell>Purpose</Table.HeaderCell>
                <Table.HeaderCell>When</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {INFO.upcomingAppointments.map((appointmentInfo) => (
              <Table.Row>
                <Table.Cell>{appointmentInfo.location}</Table.Cell>
                <Table.Cell>{appointmentInfo.purpose}</Table.Cell>
                <Table.Cell>{appointmentInfo.date}</Table.Cell>
              </Table.Row>
            ))}
          </Table>
        </Container>
      </Container>
    </div>
  );
};

export default Dashboard;
