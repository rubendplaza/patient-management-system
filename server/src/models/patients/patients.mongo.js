const mongoose = require("mongoose");
const { patientsSchema } = require("./patients.schema");

// NOTE: This isn't the proper convention.
// To make this work the way we've been doing it up
// to this point is by making an entire "appointment"
// folder and "report" folder and following the .mongo
// and .model convention like doctor and patient.

// const appointmentSchema = new mongoose.Schema({
//   location: String,
//   purpose: String,
//   date: Date,
// });

// const reportSchema = new mongoose.Schema({
//   type: String,
//   date: Date,
//   notes: String,
//   pdf: String,
// });

// Moved schema outside to patients.schema.js so it can be
// imported from other files. This file exports the "model"
// which is a different thing.

module.exports = mongoose.model("Patient", patientsSchema);