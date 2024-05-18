const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const barcodeRoutes = require('./routes/barcodeRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Nutritional Facts Finder API');
});

app.use('/api/barcode', barcodeRoutes);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
