const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const refundRoutes = require('./routes/refundRoutes');
const revenueRoutes = require('./routes/revenueRoutes');

app.use('/api/revenue', revenueRoutes);

app.use('/api/refunds', refundRoutes);

app.use('/api/transactions', transactionRoutes);

const app = express();
app.use(express.json());

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);

module.exports = app;
