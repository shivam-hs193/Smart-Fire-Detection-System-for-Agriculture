const mongoose = require('mongoose');

const FireEventSchema = new mongoose.Schema({
  temperature: Number,
  smoke: Number,
  flame: Number,
  fireDetected: Boolean,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FireEvent', FireEventSchema);
