const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  id: { type: mongoose.Types.ObjectId, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isDoctor: { type: String, required: true },
});

module.exports = mongoose.model("User", usersSchema);
