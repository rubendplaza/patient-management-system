const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({
  // DEFINE SCHEMA FOR DOCTORS HERE
  name: { type: String, required: true },
  id: { type: String, required: true },
  patients: [patientsSchema]
});

// const doctorAppointmentSchema = new mongoose.Schema(
//   {
//     patient: { type: patientsSchema, required: true }
//     location: { type: String, required: true },
//     purpose: { type: String, required: true },
//     date: { type: Date, required: true}
//   }
// );

module.exports = mongoose.model("Doctor", doctorsSchema);
