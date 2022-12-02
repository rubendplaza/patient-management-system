import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

import FAQ from "./pages/FAQ";

import Patient from "./pages/patient-pages/Patient";
import Dashboard from "./pages/patient-pages/Dashboard";
import Reports from "./pages/patient-pages/Reports";

import Doctor from "./pages/doctor-pages/Doctor";
import DoctorPatients from "./pages/doctor-pages/DoctorPatients";
import DoctorPatient from "./pages/doctor-pages/DoctorPatient";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctorpatients" element={<DoctorPatients />} />
          <Route path="/doctorpatient" element={<DoctorPatient />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
