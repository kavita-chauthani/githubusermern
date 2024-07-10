const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
  membersince: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
