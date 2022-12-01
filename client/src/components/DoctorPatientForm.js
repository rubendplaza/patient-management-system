import React, { useState } from "react";
import "./patientcard.css";

const DoctorPatientForm = (props) => {
  const [_id, setId] = useState(props.patientId);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [knownIllnesses, setKnownIllnesses] = useState("");

  function handleIllnessesChange(value) {
    setKnownIllnesses(value);
  }

  React.useEffect(() => {
    setId(props.patientId);
    setName(props.name);
    setSex(props.sex);
    setAge(props.age);
    setBloodType(props.blood);
    setKnownIllnesses(props.ill.join(","));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/v1/patients/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        name,
        sex,
        age,
        bloodType,
        knownIllnesses,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data._id) {
      alert("Patient successfully edited.");
    } else {
      alert("Error: Could not edit patient.");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label> <br />
        <input
          type="text"
          name="name"
          id="name"
          value={name} // inject state correspond to input and so on
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label for="sex">Sex</label> <br />
        <input
          type="text"
          name="sex"
          id="sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <br />
        <label for="age">Age</label> <br />
        <input
          type="text"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label for="bloodtype">Blood Type</label> <br />
        <input
          type="text"
          name="bloodtype"
          id="bloodtype"
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        />
        <br />
        <label for="illnesses">Known Illnesses</label> <br />
        <input
          type="text"
          name="illnesses"
          id="illnesses"
          value={knownIllnesses}
          onChange={(e) => handleIllnessesChange(e.target.value)}
        />
        <br />
        <button type="submit">Submit Edits</button>
      </form>
    </div>
  );
};

export default DoctorPatientForm;
