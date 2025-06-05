const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
app.use(express.json());
app.use('/api/fire', require('./routes/api'));

app.listen(3000, () => console.log('Server running on port 3000'));
