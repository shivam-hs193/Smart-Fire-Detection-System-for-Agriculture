const express = require('express');
const router = express.Router();
const { logFireData } = require('../controllers/fireController');

router.post('/log', logFireData);

module.exports = router;
