const { getAllDoctors } = require("../../models/doctors/doctors.model");

async function httpGetAllDoctors(req, res) {
  return res.status(200).json(await getAllDoctors());
}

module.exports = {
  httpGetAllDoctors,
};
