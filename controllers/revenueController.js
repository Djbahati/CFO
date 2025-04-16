const axios = require('axios');

exports.submitData = async (req, res) => {
    const { data } = req.body;
    try {
        await axios.post('https://revenue-authority-api.com/submit', data);
        res.status(200).json({ message: 'Data submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Data submission failed' });
    }
};
