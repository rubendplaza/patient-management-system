const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema({
  // DEFINE SCHEMA FOR PATIENTS HERE.
});

module.exports = mongoose.model("Patient", patientsSchema);
