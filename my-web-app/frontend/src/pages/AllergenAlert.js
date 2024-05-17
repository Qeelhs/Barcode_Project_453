import React, { useState } from 'react';

const AllergenAlert = () => {
  const [nutritionalFacts, setNutritionalFacts] = useState('');
  const [allergens, setAllergens] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/allergen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nutritionalFacts })
      });
      if (response.ok) {
        const result = await response.json();
        setAllergens(result.allergens);
      } else {
        console.error('Error checking allergens:', response.statusText);
      }
    } catch (error) {
      console.error('Error checking allergens:', error);
    }
  };

  return (
    <div>
      <h2>Allergen Alert</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={nutritionalFacts}
          onChange={(e) => setNutritionalFacts(e.target.value)}
          placeholder="Enter nutritional facts"
        />
        <button type="submit">Submit</button>
      </form>
      {allergens && <pre>{JSON.stringify(allergens, null, 2)}</pre>}
    </div>
  );
};

export default AllergenAlert;
