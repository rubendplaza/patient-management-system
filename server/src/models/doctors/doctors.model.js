const ObjectId = require('mongodb').ObjectId;
const doctors = require("./doctors.mongo");
const patients = require("../patients/patients.mongo");

// IMPLEMENT REQUIRED METHODS HERE.
async function addDoctor(doctor) {
  return await doctors.create(doctor);
}

async function getAllDoctors() {
  return await doctors.find({});
}

async function getDoctor(doctor_id) {
  return await doctors.findOne(
    { _id: ObjectId(doctor_id), },
    { __v: 0, }
  )
}

//if patients will have a doctor's array added
// async function getDoctorPatients(d_name) {
//   const patients = await patients.find({doctors: {name: d_name}});
//   return patients;
// }

//if patients are going to be added to doctor's patients array
async function getDoctorPatients(d_Id) {
  return await patients.find({doctorId: ObjectId(d_Id)});
}

module.exports = {
  getAllDoctors,
  addDoctor,
  getDoctorPatients,
  getDoctor
};
