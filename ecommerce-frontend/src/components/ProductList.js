// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';
const ProductList = ({ cartItems, setCartItems }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="product-list">
            <h2>Products</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product._id} className="product">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
