const express = require("express");
//let Doctor = require('../models/doctors.mongo');

const { httpGetAllDoctors, httpAddDoctor, httpGetDoctorPatients } = require("./doctors.controller");
const doctorsRouter = express.Router();

// Route currently: /v1/doctors/
doctorsRouter.get("/", httpGetAllDoctors);
doctorsRouter.post("/add", httpAddDoctor);
doctorsRouter.get("/patients", httpGetDoctorPatients);
// doctorsRouter.route('/add').post((req, res) => {
//     const username = req.body.username;

//     const newDoctor = new Doctor({id});

//     newDoctor.save()
//         .then(() => res.json('Doctor added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = doctorsRouter;
