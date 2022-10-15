const doctors = require("./doctors.mongo");

// IMPLEMENT REQUIRED METHODS HERE.

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
};
