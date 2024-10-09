// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar = ({ user, cartItems }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <nav className="navbar">
            <h1>E-Commerce</h1>
            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
                {user ? (
                    <>
                        <li><Link to="/orders">Order History</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
