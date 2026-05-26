const mongoose = require('mongoose');

const revenueSchema = new mongoose.Schema({
    data: { type: String, required: true, trim: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Revenue', revenueSchema);
