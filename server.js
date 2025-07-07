const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


connectDB();

// Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('🚀 Serveur sur http://localhost:${PORT}'));
