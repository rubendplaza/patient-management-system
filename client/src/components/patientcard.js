import React from "react";
import "./patientcard.css";
import 'semantic-ui-css/semantic.min.css'
import {Segment, List} from 'semantic-ui-react'

const Patientcard = (props) => {
    return (
        <div className="card">
            <img src={props.img} className="profile-pic" />
            <Segment padded raised style={{borderWidth: "2px", borderColor: "black", borderRadius: "25px"}}>
                <Segment vertical>Name: {props.name}</Segment>
                <Segment vertical>Sex: {props.sex}</Segment>
                <Segment vertical>Age: {props.age}</Segment>
                <Segment vertical>Blood Type: {props.blood}</Segment>
                <Segment vertical>Known Illnesses: <List>{props.ill.map(((ill) => <List.Item>{ill}</List.Item>))}</List></Segment>
            </Segment>
        </div>
    ); 
}

export default Patientcard;