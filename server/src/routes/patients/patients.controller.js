const { getAllPatients } = require("../../models/patients/patients.model");

async function httpGetAllPatients(req, res) {
  return res.status(200).json(await getAllPatients());
}

module.exports = {
  httpGetAllPatients,
};
