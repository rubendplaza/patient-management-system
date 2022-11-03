import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login"; 
import Register from "./pages/Register";
// Patient Pages
import Dashboard from "./pages/patient-pages/Dashboard";
import Reports from "./pages/patient-pages/Reports";

// Doctor Pages
import Patient from "./pages/doctor-pages/Patient";
import Patients from "./pages/doctor-pages/Patients";

function Home() {
  // Just temporary.
  // We can separate out the pages for doctor/pages once we do login stuff.
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link>Doctor:</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/patient">Patient</Link>
          </li>
          <li>
            <Link to="/patients">Patients</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link>Patient:</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
        </ul>

        <hr />

        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
