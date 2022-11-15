const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId;

const patientsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sex: { type: String, required: false },
  age: { type: Number, required: false },
  bloodType: { type: String, required: false },
  knownIllnesses: { type: [String], required: false },
  doctorId: { type: ObjectId, required: false },
  // upcomingAppointments: [appointmentSchema],
  // reports: [reportSchema],
});

module.exports = { patientsSchema };
