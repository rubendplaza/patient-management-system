import Patientcard from "../../components/patientcard";
import { VscFilePdf } from "react-icons/vsc";
import "./Patient.css";
import Navbar from "../../components/navbar";
import 'semantic-ui-css/semantic.min.css'
import { Button, Table, Image, Header } from 'semantic-ui-react'

const Patient = (props) => {
  return (
    <div>
      <Navbar />
      <h2>Patient Page</h2>
      <div className="patient">
        <Patientcard 
          img="/lebron.jpg"
          name="LeBron James"
          sex="Male"
          age="37"
          blood="AB-"
          ill={["Bad Teammates"]}
        />

        <Header size="large">
          Upcoming Apointments
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Where</Table.HeaderCell>
              <Table.HeaderCell>Purpose</Table.HeaderCell>
              <Table.HeaderCell>When</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Humber River Hospital</Table.Cell>
            <Table.Cell>X-Ray</Table.Cell>
            <Table.Cell>Wednesday, October 5, 2022</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Madison Square Garden</Table.Cell>
            <Table.Cell>Drop 50</Table.Cell>
            <Table.Cell>Thursday, October 6, 2022</Table.Cell>
          </Table.Row>
        </Table>
        <Header size="large">
          Reports
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Report</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>PDF</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Row>
            <Table.Cell>Blood Test</Table.Cell>
            <Table.Cell>October 4, 2022</Table.Cell>
            <Table.Cell>Contains ice</Table.Cell>
            <Table.Cell><Image src="/Images/Out.svg" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Covid-19</Table.Cell>
            <Table.Cell>October 4, 2022</Table.Cell>
            <Table.Cell>Negative</Table.Cell>
            <Table.Cell><Image src="/Images/Out.svg" /></Table.Cell>
          </Table.Row>
        </Table>
      
        <Button.Group floated="right">
          <Button primary
            style = {{marginTop:5}}
            type="button"
            >Edit</Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default Patient;
