const doctors = require("./doctors.mongo");

// IMPLEMENT REQUIRED METHODS HERE.
async function addDoctor(doctor) {
  return await doctors.create(doctor);
}

async function getAllDoctors() {
  return await doctors.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

module.exports = {
  getAllDoctors,
  addDoctor,
};
