import React, { useState } from "react";
import "./patientcard.css";

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
      <div
        className="card-body"
        style={{ backgroundColor: bgColor, padding: "1rem" }}
      >
        <p>Name: {props.name}</p>
        <p>Sex: {props.sex}</p>
        <p>Age: {props.age}</p>
        <p>Blood Type: {props.blood}</p>
        <div>
          Known Illnesses:
          {props.ill.map((illness, index) => {
            return illness.split(",").map((eachillness, index) => {
              return (
                <div key={index}>{String("--") + String(eachillness)}</div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Patientcard;
