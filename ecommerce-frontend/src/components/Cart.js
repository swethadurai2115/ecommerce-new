// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = ({ cartItems, setCartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleRemove = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice}</h3>
                    <Link to="/checkout"><button>Proceed to Checkout</button></Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
