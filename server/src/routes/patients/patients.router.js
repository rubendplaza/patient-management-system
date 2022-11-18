const express = require("express");

const { httpGetAllPatients, httpGetPatientById, httpUpdatePatient, httpGetPatientsDoctor} = require("./patients.controller");
const patientsRouter = express.Router();

// Route currently: /v1/patients/
patientsRouter.get("/", httpGetAllPatients);
patientsRouter.post("/getbyid", httpGetPatientById);
patientsRouter.post("/update", httpUpdatePatient);
patientsRouter.post("/getdoctor", httpGetPatientsDoctor);

module.exports = patientsRouter;
