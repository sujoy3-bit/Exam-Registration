const mongoose = require('mongoose');

const regCounterSchema = new mongoose.Schema({
  year: String,
  seq: Number
});

module.exports = mongoose.model('RegCounter', regCounterSchema);
