import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.product_name} ({product.generic_name})</h2>
      <img src={product.image_url} alt={product.product_name} className="product-image" />
      <p><strong>Barcode:</strong> {product.code}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Packaging:</strong> {product.packaging}</p>
      <p><strong>Brands:</strong> {product.brands}</p>
      <p><strong>Categories:</strong> {product.categories}</p>
      <p><strong>Origins:</strong> {product.origins}</p>
      <p><strong>Labels:</strong> {product.labels}</p>
      <p><strong>Purchase Places:</strong> {product.purchase_places}</p>
      <p><strong>Stores:</strong> {product.stores}</p>
      <p><strong>Countries:</strong> {product.countries}</p>
      <p><strong>Ingredients:</strong> {product.ingredients_text}</p>
      <p><strong>Traces:</strong> {product.traces}</p>
      <p><strong>Serving Size:</strong> {product.serving_size}</p>
      <p><strong>Nutrition Grade:</strong> {product.nutrition_grade_fr}</p>
      <h3>Nutrition Facts (per 100g)</h3>
      <ul>
        <li><strong>Energy:</strong> {product.energy_kj_100g} kJ ({product.energy_kcal_100g} kcal)</li>
        <li><strong>Proteins:</strong> {product.proteins_100g} g</li>
        <li><strong>Carbohydrates:</strong> {product.carbohydrates_100g} g</li>
        <li><strong>Sugars:</strong> {product.sugars_100g} g</li>
        <li><strong>Fat:</strong> {product.fat_100g} g</li>
        <li><strong>Saturated Fat:</strong> {product.saturated_fat_100g} g</li>
        <li><strong>Fiber:</strong> {product.fiber_100g} g</li>
        <li><strong>Sodium:</strong> {product.sodium_100g} g</li>
        <li><strong>Vitamin C:</strong> {product.vitamin_c_100g} mg</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
