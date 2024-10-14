import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link to={`/product/${product._id}`}>
        <img src={product.imageUrl} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
