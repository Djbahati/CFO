const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const refundRoutes = require('./routes/refundRoutes');
const revenueRoutes = require('./routes/revenueRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

if (!mongoUri) {
    console.error('MONGODB_URI is not set. Please add it to your .env or environment variables.');
    process.exit(1);
}

if (!jwtSecret) {
    console.error('JWT_SECRET is not set. Please add it to your .env or environment variables.');
    process.exit(1);
}

mongoose
    .connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/revenue', revenueRoutes);
app.use('/api/refunds', refundRoutes);
app.use('/api/transactions', transactionRoutes);

module.exports = app;
