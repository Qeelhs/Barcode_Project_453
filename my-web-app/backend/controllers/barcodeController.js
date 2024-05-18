const Product = require('../models/productModel');

exports.getProductByBarcode = async (req, res) => {
  const { barcode } = req.params;
  try {
    const product = await Product.findOne({ code: barcode });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
