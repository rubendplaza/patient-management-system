const express = require("express");

const { httpGetAllDoctors } = require("./doctors.controller");
const doctorsRouter = express.Router();

// Route currently: /v1/doctors/
doctorsRouter.get("/", httpGetAllDoctors);

module.exports = doctorsRouter;
