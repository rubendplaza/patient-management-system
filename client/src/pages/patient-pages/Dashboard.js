// This is where Adam will code up the UI during first sprint.

// Coordinate with Nyle because this view might be the same as Patient.js in doctor-pages

import userCircle from '../../images/User_cicrle_light.svg';
import 'semantic-ui-css/semantic.min.css'
import { Menu, Image, Container, Segment, List, Grid, Header, Table } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import { useState } from 'react'
import React, { useEffect } from 'react';

const Dashboard = (props) => {
  const [name, setName] = useState('')
	const [age, setAge] = useState('')
  const [illness, setIllness] = useState('')
	const [sex, setSex] = useState('')
  const [doctor, setDoctor] = useState('')

  const id = localStorage.getItem("id");
  console.log(id); 

  useEffect(() => {
    getInfo()
}, []); 
 
useEffect(() => {
  getDoctor()
}, []); 


  async function getInfo() {

		const response = await fetch(`http://localhost:8000/v1/patients/getbyid/${id}`, {
     
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const data = await response.json()
		console.log(data); 
    setName(data.name); 
    setAge(data.age); 
    setSex(data.sex); 
    setIllness(data.knownIllnesses)
    
	}


  async function getDoctor() {

		const response = await fetch(`http://localhost:8000/v1/patients/getdoctor/${id}`, {
     
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const data = await response.json()
		console.log(data); 
    setDoctor(data.name)
	}

  return (
    <div>
      <Menu color="blue" inverted fixed="top" size="large" borderless style={{borderBottomWidth: "5px", borderBottomColor: "black" }}>
          <Menu.Item
            as={NavLink} to="/dashboard"
            name="Dashboard"
            active={true}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            name="Schedule"
            active={false}
          >
            Schedule
          </Menu.Item>
          <Menu.Item
            as={NavLink} to="/reports"
            name="Reports"
            active={false}
          >
            Reports
          </Menu.Item>
          <Menu.Item
            as={NavLink} to="/"
            name="Icon"
            active={false}
            position="right"
          >
            <Image src={userCircle} size="mini"/>
          </Menu.Item>
        </Menu>

        <Container fluid style={{ marginTop: "7em"}}>
          <Grid centered padded relaxed columns={2} divided>
            <Grid.Column verticalAlign="middle" width={2}>
              <Image src={"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"} circular />
            </Grid.Column>

            <Grid.Column>
              <Segment padded raised style={{borderWidth: "2px", borderColor: "black", borderRadius: "25px"}}>
                  <Segment vertical>Name: {name}</Segment>
                  <Segment vertical>Sex: {sex}</Segment>
                  <Segment vertical>Age: {age}</Segment>
                  <Segment vertical>Known Illnesses: {illness}</Segment>
                  <Segment vertical>Doctor: {doctor}</Segment>
              </Segment>
            </Grid.Column>
          </Grid>

      
        </Container>
    </div>
  );
};

export default Dashboard;
