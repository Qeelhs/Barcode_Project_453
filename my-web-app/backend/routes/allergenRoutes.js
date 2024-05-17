const express = require('express');
const router = express.Router();
const allergenController = require('../controllers/allergenController');

router.post('/', allergenController.checkAllergens);

module.exports = router;
