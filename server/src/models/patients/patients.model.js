const ObjectId = require('mongodb').ObjectId;
const patients = require("./patients.mongo");

// IMPLEMENT REQUIRED METHODS HERE

async function addPatient(patient) {
  return await patients.create(patient);
}

async function getPatient(patient_id) {
  return await patients.findOne(
    { _id: ObjectId(patient_id), },
    { __v: 0, }
  )
}

async function getAllPatients() {
  return await patients.find(
    {},
    { __v: 0, }
  );
}

async function updatePatient(patient)
{
  return await patients.findOneAndUpdate({ _id: ObjectId(patient._id), }, { $set: patient }, {new: true, upsert: true})
}

module.exports = {
  getAllPatients,
  addPatient,
  getPatient,
  updatePatient
};
