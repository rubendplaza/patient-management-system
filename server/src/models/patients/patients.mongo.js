const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    location: String,
    purpose: String,
    date: Date
  }
);

const reportSchema = new mongoose.Schema(
  {
    type: String,
    date: Date,
    notes: String,
    pdf: String
  }
)

const patientsSchema = new mongoose.Schema({
  // DEFINE SCHEMA FOR PATIENTS HERE.
  name: String,
  sex: String,
  age: Number,
  bloodType: String,
  knownIllnesses: [String],
  upcomingAppointments: [appointmentSchema],
  reports: [reportSchema]
});

module.exports = mongoose.model("Patient", patientsSchema);
