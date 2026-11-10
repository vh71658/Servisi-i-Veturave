const express = require('express');
const cors = require('cors');
const veturaRoutes = require('./routes/vetura.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/veturat', veturaRoutes);
// Klientet dhe sherbimet do te shtohen me vone.

app.use((req, res) => res.status(404).json({ message: 'Route nuk u gjet' }));
app.use(errorHandler);
module.exports = app;
