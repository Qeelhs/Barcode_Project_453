const express = require('express');
const router = express.Router();
const { getProductByBarcode } = require('../controllers/barcodeController');

router.get('/:barcode', getProductByBarcode);

module.exports = router;
