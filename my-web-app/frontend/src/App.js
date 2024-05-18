import React, { useState } from 'react';
import BarcodeInput from './components/BarcodeInput';
import ProductDetails from './components/ProductDetails';
import './App.css';

const App = () => {
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async (barcode) => {
    try {
      const response = await fetch(`/api/barcode/${barcode}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
      setProduct(null);
    }
  };

  return (
    <div className="App">
      <h1>Barcode Nutrition Finder</h1>
      <BarcodeInput onBarcodeSubmit={fetchProductDetails} />
      <ProductDetails product={product} />
    </div>
  );
};

export default App;
