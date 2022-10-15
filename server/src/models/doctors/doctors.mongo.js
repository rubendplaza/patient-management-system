const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({
  // DEFINE SCHEMA FOR DOCTORS HERE
});

module.exports = mongoose.model("Doctor", doctorsSchema);
