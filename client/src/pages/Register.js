import { useState } from "react";
import "./register.css";

function useForceUpdate(setDoctorNames) {
  return async () => {
    const doctorNamesFetch = await fetch("http://localhost:8000/v1/doctors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return setDoctorNames(await doctorNamesFetch.json());
  };
}

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [doctorName, setDoctorName] = useState(null);
  const [tmpDoctorNames, setDoctorNames] = useState([]);

  const forceUpdate = useForceUpdate(setDoctorNames);

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/v1/login/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        isDoctor,
        doctorName,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      localStorage.setItem("isDoctor", isDoctor);
      localStorage.setItem("id", data.id);
      alert("Registration successful");
      if (isDoctor == "true") {
        window.location.href = "./doctor";
      } else {
        window.location.href = "./patient";
      }
    } else {
      alert("Please Fill In Missing Information");
    }
  }

  function handleDoctorNameChange(event) {
    setDoctorName(event.target.value);
  }

  return (
    <div className="register-section">
      <form id="register-form" onSubmit={registerUser}>
        <h1>Patiently Register</h1>
        <label for="name">Name</label> <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          id="name"
        />
        <br />
        <label for="name">Are you a doctor?</label> <br />
        <input
          name="isDoctor"
          value={true}
          onChange={(e) => setIsDoctor(e.target.value)}
          type="radio"
          id="true"
        />
        <label for="true">Yes</label>
        <input
          name="isDoctor"
          value={false}
          onChange={(e) => setIsDoctor(e.target.value)}
          type="radio"
          id="false"
        />
        <label for="false">No</label>
        <br />
        <label for="doctorName">Select A Doctor</label> <br />
        {/* Get doctor names */}
        <select
          form="register-form"
          id="doctorName"
          onClick={forceUpdate}
          onChange={handleDoctorNameChange}
        >
          <option key="100" value="Choose one">
            Choose one
          </option>
          {tmpDoctorNames.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        <br />
        <label for="email">Email</label> <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          id="email"
        />
        <br />
        <label for="password">Password</label> <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          id="password"
        />
        <br />
        <br />
        <input type="submit" value="Register" id="submit" />
        <a href="./login">or Login</a>
      </form>
    </div>
  );
}

export default Register;
