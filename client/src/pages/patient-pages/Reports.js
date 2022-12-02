// This is where Adam will code up the UI during first sprint.
import { jsPDF } from "jspdf";
import React, { useEffect, useState } from "react";
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
  const [todayDate, setTodayDate] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [illness, setIllness] = useState("");
  const [sex, setSex] = useState("");
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    const tmpDate = new Date();
    setTodayDate(String(tmpDate));
    getInfo();
  }, []);

  useEffect(() => {
    getDoctor();
  }, []);

  async function getInfo() {
    const id = localStorage.getItem("id");
    const response = await fetch(
      `http://localhost:8000/v1/patients/getbyid/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    setName(data.name);
    setAge(data.age);
    setSex(data.sex);
    setBloodType(data.bloodType);
    setIllness(data.knownIllnesses);
  }

  async function getDoctor() {
    const id = localStorage.getItem("id");
    const response = await fetch(
      `http://localhost:8000/v1/patients/getdoctor/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    setDoctor(data.name);
  }

  async function handleDownload() {
    const patientId = localStorage.getItem("id");
    const response = await fetch(
      `http://localhost:8000/v1/patients/getbyid/${patientId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("Received:", data);

    const pdfText = [];
    pdfText.push("COLLECTED DATE: " + todayDate);
    pdfText.push("Name: " + name);
    pdfText.push("Doctor Name: " + doctor);
    pdfText.push("Age: " + age);
    pdfText.push("Sex: " + sex);
    pdfText.push("Blood Type: " + bloodType);
    pdfText.push("Known Illessness: " + illness.join(","));

    const doc = new jsPDF({
      orientation: "landscape",
    });

    doc.text(pdfText, 10, 10);
    doc.save("report.pdf");
  }
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
        <Menu.Item as={NavLink} to="/faq" name="FAQ" active={false}>
          FAQ
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
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>PDF</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Row>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{todayDate}</Table.Cell>
            <Table.Cell onClick={handleDownload}>
              <Image src="/Images/Out.svg" />
            </Table.Cell>
          </Table.Row>
        </Table>
      </Container>
    </div>
  );
};

export default Reports;
