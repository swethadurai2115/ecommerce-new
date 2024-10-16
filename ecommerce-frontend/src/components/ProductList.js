import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div>
        {products.map(product => (
          <div key={product._id} style={styles.product}>
            <img src={product.imageUrl} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  product: {
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  image: {
    width: '150px',
    height: '150px',
  },
};

export default ProductList;
