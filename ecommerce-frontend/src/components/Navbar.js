import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Cart />
    </nav>
  );
};

export default Navbar;
