const Barcode = require('../models/Barcode');

exports.getBarcodeData = async (req, res) => {
    const { barcode } = req.params;
    try {
        const data = await Barcode.findOne({ barcode });
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: 'Barcode not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
