const FireEvent = require('../models/FireEvent');

exports.logFireData = async (req, res) => {
  const { temperature, smoke, flame } = req.body;
  const fireDetected = temperature > 50 || smoke > 600 || flame === 1;
  await FireEvent.create({ temperature, smoke, flame, fireDetected });
  res.json({ fireDetected });
};
