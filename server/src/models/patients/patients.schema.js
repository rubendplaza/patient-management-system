const mongoose = require("mongoose");

const patientsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sex: String,
  age: Number,
  bloodType: String,
  knownIllnesses: [String],
  // upcomingAppointments: [appointmentSchema],
  // reports: [reportSchema],
});

module.exports = { patientsSchema };
