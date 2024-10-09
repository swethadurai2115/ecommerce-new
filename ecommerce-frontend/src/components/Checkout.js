// src/components/Checkout.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Checkout.js';
const Checkout = ({ cartItems, setCartItems }) => {
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/api/orders', {
                items: cartItems,
                address,
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setCartItems([]);
            navigate('/orders');
        } catch (err) {
            console.error('Checkout failed', err);
        }
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Shipping Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
