const patients = require("./patients.mongo");

// IMPLEMENT REQUIRED METHODS HERE

async function getAllPatients() {
  return await patients.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

module.exports = {
  getAllPatients,
};
