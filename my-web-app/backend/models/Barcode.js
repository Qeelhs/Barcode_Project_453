const mongoose = require('mongoose');

const BarcodeSchema = new mongoose.Schema({
    barcode: { type: String, required: true, unique: true },
    nutritionalFacts: { type: String, required: true }
});

module.exports = mongoose.model('Barcode', BarcodeSchema);
