const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  name: { type: String, require: true },
});

module.exports = mongoose.model("User", usersSchema);
