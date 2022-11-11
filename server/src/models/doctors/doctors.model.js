const Doctors = require("./doctors.mongo");

// IMPLEMENT REQUIRED METHODS HERE.
async function addDoctor(doctor) {
  return await Doctors.create(doctor);
}

async function getAllDoctors() {
  return await Doctors.find()
  .then(doctors => res.json(doctors))
  .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = {
  getAllDoctors,
  addDoctor,
};
