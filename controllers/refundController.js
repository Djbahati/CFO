const Refund = require('../models/Refund');

exports.createRefund = async (req, res) => {
    const { transactionId, reason } = req.body;
    const newRefund = new Refund({ transactionId, reason });
    await newRefund.save();
    res.status(201).json({ message: 'Refund created successfully' });
};

exports.getRefunds = async (req, res) => {
    const refunds = await Refund.find();
    res.status(200).json(refunds);
};
