// src/components/OrderHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Checkout.css';
const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/orders', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => setOrders(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="order-history">
            <h2>Order History</h2>
            {orders.map(order => (
                <div key={order._id} className="order">
                    <h3>Order ID: {order._id}</h3>
                    <p>Address: {order.address}</p>
                    <h4>Items:</h4>
                    <ul>
                        {order.items.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                    <p>Total: ${order.totalPrice}</p>
                </div>
            ))}
        </div>
    );
};

// Ensure the component is properly exported here
export default OrderHistory;
