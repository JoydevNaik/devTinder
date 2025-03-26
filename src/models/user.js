const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  skills: {
    type: [String],
  },
  caption: {
    type: String,
    default: "This is a default caption",
  },
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
