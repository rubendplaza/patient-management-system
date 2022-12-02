import React, { useEffect, useState } from "react";
import userCircle from "../images/User_cicrle_light.svg";
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

const FAQ = (props) => {
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
              <Table.HeaderCell>Question</Table.HeaderCell>
              <Table.HeaderCell>Answer</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Why was this application made?</Table.Cell>
            <Table.Cell>
              It is often way too long and tedious to request your file from
              your doctor. Either they do not want to cooperate or take too long
              to get you your information. With <strong>Patiently,</strong> you
              can download whatever information your doctor has on you whenever
              you want.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Why would I use this application as a patient?
            </Table.Cell>
            <Table.Cell>
              As a patient, using this application will put power back in your
              hands when it comes to your health. You are able to see how your
              doctor has diagnosed you and be able to download and bring your
              health information to any other doctor's office for a second
              opinion.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              Why would I use this application as a doctor?
            </Table.Cell>
            <Table.Cell>
              As a doctor, using this application will make it much effortless
              for your patients to receiver their patient file. It is often
              tedious to provide a patient with their file because doctor's are
              very busy and is a lower priority task for you as a doctor when
              you have other patients and appointments to attend to. With{" "}
              <strong>Patiently,</strong> worry no longer, this task is left
              completely to the patient, they can download their file whenever
              they want!
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>How do I use this application as a patient?</Table.Cell>
            <Table.Cell>
              Simply use our registration page, fill in your details and the
              doctor you would like to be assigned to and then you're good to
              go. Now, whenever your doctor updates your information, you'll be
              able to view and download it in your Reports page if you want to
              get a second opinion.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>How do I use this application as a doctor?</Table.Cell>
            <Table.Cell>
              Simply register through our registration page, indicating that you
              are a doctor and you will be in the system. Now whenever a patient
              signs up and requests you as their doctor, you'll be able to view
              and edit their information.
            </Table.Cell>
          </Table.Row>
        </Table>
      </Container>
    </div>
  );
};

export default FAQ;
