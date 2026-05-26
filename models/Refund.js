const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
    transactionId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
    reason: { type: String, required: true, trim: true, minlength: 2, maxlength: 500 },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Refund', refundSchema);
