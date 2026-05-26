const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
    try {
        const { type, amount, description } = req.body || {};
        if (!type || amount === undefined || amount === null) {
            return res.status(400).json({ message: 'Type and amount are required' });
        }

        const transaction = new Transaction({ type, amount, description });
        await transaction.save();
        return res.status(201).json({ message: 'Transaction created successfully', transaction });
    } catch (err) {
        console.error('Transaction creation error:', err);
        return res.status(500).json({ message: 'Transaction creation failed', error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({ timestamp: -1 });
        return res.status(200).json(transactions);
    } catch (err) {
        console.error('Transaction fetch error:', err);
        return res.status(500).json({ message: 'Failed to fetch transactions', error: err.message });
    }
};
