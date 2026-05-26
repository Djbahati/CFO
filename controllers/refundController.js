const Refund = require('../models/Refund');
const mongoose = require('mongoose');

exports.createRefund = async (req, res) => {
    try {
        const { transactionId, reason } = req.body || {};
        if (!transactionId || !reason) {
            return res.status(400).json({ message: 'transactionId and reason are required' });
        }
        if (!mongoose.Types.ObjectId.isValid(transactionId)) {
            return res.status(400).json({ message: 'transactionId must be a valid ObjectId' });
        }

        const newRefund = new Refund({ transactionId, reason });
        await newRefund.save();
        return res.status(201).json({ message: 'Refund created successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Refund creation failed' });
    }
};

exports.getRefunds = async (req, res) => {
    try {
        const refunds = await Refund.find().sort({ timestamp: -1 });
        return res.status(200).json(refunds);
    } catch (err) {
        return res.status(500).json({ message: 'Failed to fetch refunds' });
    }
};
