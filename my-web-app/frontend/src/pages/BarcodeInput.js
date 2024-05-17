import React, { useState } from 'react';

const BarcodeInput = () => {
  const [barcode, setBarcode] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/barcode/${barcode}`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error('Error fetching barcode data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching barcode data:', error);
    }
  };

  return (
    <div>
      <h2>Barcode Input</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Enter barcode"
        />
        <button type="submit">Submit</button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default BarcodeInput;
