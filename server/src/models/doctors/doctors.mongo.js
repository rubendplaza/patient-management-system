const mongoose = require("mongoose");
const patientsSchema = require("../patients/patients.schema");

const doctorsSchema = new mongoose.Schema({
  //id: { type: mongoose.Types.ObjectId, required: true },
  name: { type: String, required: true },
  patients: { type: [patientsSchema], required: false, default: undefined },
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
