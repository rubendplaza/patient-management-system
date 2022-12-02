import React, { useState } from "react";
import "./patientcard.css";
import 'semantic-ui-css/semantic.min.css'
import {Segment, List} from 'semantic-ui-react'

const Patientcard = (props) => {
  const [bgColor, setBgColor] = useState("");
  function handlePatientClickEvent(event) {
    if (bgColor == "lightGrey") setBgColor("white");
    else setBgColor("lightGrey");
    localStorage.setItem("patientId", props.patientId);
  }

  return (
    <div
      className="card"
      onClick={handlePatientClickEvent}
      style={{ backgroundColor: bgColor, padding: "1rem" }}
    >
      <img src={props.img} className="profile-pic" />
        <Segment padded raised style={{borderWidth: "2px", borderColor: "black", borderRadius: "25px"}}>
          <Segment vertical>Name: {props.name}</Segment>
          <Segment vertical>Sex: {props.sex}</Segment>
          <Segment vertical>Age: {props.age}</Segment>
          <Segment vertical>Blood Type: {props.blood}</Segment>
          <div>
            <Segment vertical>Known Illnesses:
              {props.ill.map((illness, index) => {
                return illness.split(",").map((eachillness, index) => {
                  return (
                    <div key={index}>{String("--") + String(eachillness)}</div>
                  );
                });
              })}
            </Segment>
          </div>
        </Segment>
    </div>
  );
};

export default Patientcard;
