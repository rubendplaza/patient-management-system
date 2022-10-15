const express = require("express");

const { httpGetAllPatients } = require("./patients.controller");
const patientsRouter = express.Router();

// Route currently: /v1/patients/
patientsRouter.get("/", httpGetAllPatients);

module.exports = patientsRouter;
