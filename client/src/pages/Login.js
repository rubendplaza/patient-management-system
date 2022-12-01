import { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      localStorage.setItem("isDoctor", data.isDoctor);
      localStorage.setItem("id", data.id);
      alert("Login successful");
      if (localStorage.getItem("isDoctor") == "true") {
        window.location.href = "./doctor";
      } else {
        window.location.href = "./patient";
      }
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div className="login-section">
      <form onSubmit={loginUser}>
        <h1>Patiently Login</h1>
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
        <input type="submit" value="Login" id="submit" />
        <a href="./register">or Register</a>
      </form>
    </div>
  );
}

export default Login;
