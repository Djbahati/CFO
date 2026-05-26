const Revenue = require('../models/Revenue');

exports.submitData = async (req, res) => {
    const { data } = req.body || {};
    if (!data) {
        return res.status(400).json({ message: 'Revenue data is required' });
    }

    try {
        const revenue = new Revenue({ data });
        await revenue.save();
        res.status(200).json({ message: 'Data submitted successfully', revenue });
    } catch (error) {
        console.error('Revenue submission error:', error);
        res.status(500).json({ message: 'Data submission failed', error: error.message });
    }
};
