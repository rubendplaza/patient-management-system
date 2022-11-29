const express = require("express");

const { httpGetAllPatients, httpGetPatientById, httpUpdatePatient, httpGetPatientsDoctor} = require("./patients.controller");
const patientsRouter = express.Router();

// Route currently: /v1/patients/
patientsRouter.get("/", httpGetAllPatients);
patientsRouter.get("/getbyid/:patientid", httpGetPatientById);
patientsRouter.post("/update", httpUpdatePatient);
patientsRouter.get("/getdoctor/:patientid", httpGetPatientsDoctor);

module.exports = patientsRouter;
