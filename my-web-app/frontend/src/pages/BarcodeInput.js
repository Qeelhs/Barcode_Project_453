import React, { useState } from 'react';

const BarcodeInput = () => {
  const [barcode, setBarcode] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setData(null);

    const trimmedBarcode = barcode.trim();

    try {
      const response = await fetch(`/api/barcode/${trimmedBarcode}`);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError('Error fetching barcode data');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h3>Nutritional Facts</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BarcodeInput;
