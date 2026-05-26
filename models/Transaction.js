const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    type: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
