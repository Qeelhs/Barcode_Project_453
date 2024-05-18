import React, { useState } from 'react';
import './BarcodeInput.css';

const BarcodeInput = ({ onBarcodeSubmit }) => {
  const [barcode, setBarcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (barcode.trim()) {
      onBarcodeSubmit(barcode.trim());
    }
  };

  return (
    <div className="barcode-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Enter barcode"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BarcodeInput;
