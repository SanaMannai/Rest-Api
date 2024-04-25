const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: Number,
  favoriteFoods: [String],
});

module.exports = mongoose.model("Person", personSchema);
