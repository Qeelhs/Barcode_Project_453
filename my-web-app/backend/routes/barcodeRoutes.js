const express = require('express');
const router = express.Router();
const barcodeController = require('../controllers/barcodeController');

router.get('/:barcode', barcodeController.getBarcodeData);

module.exports = router;
