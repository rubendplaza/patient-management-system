import React from "react";
import "./patientcard.css";

const Patientcard = (props) => {
    return (
        <div className="card">
            <img src={props.img} className="profile-pic" />
            <div className="card-body">
                <p>Name: {props.name}</p>
                <p>Sex: {props.sex}</p>
                <p>Age: {props.age}</p>
                <p>Blood Type: {props.blood}</p>
                <p>Known Illnesses: {props.ill}</p>
            </div>
        </div>
    ); 
}

export default Patientcard;