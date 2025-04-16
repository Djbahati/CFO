const express = require('express');
const router = express.Router();
const revenueController = require('../controllers/revenueController');

router.post('/submit', revenueController.submitData);

module.exports = router;
