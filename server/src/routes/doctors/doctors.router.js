const express = require("express");
//let Doctor = require('../models/doctors.mongo');

const { httpGetAllDoctors, httpAddDoctor, httpGetDoctorPatients, httpGetDoctorById } = require("./doctors.controller");
const doctorsRouter = express.Router();

// Route currently: /v1/doctors/
doctorsRouter.get("/", httpGetAllDoctors);
doctorsRouter.post("/add", httpAddDoctor);
doctorsRouter.post("/getbyid", httpGetDoctorById)
doctorsRouter.get("/patients/:id", httpGetDoctorPatients);
// doctorsRouter.route('/add').post((req, res) => {
//     const username = req.body.username;

//     const newDoctor = new Doctor({id});

//     newDoctor.save()
//         .then(() => res.json('Doctor added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = doctorsRouter;
