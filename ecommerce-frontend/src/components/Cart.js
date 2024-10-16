import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        Cart ({cart.length})
      </Link>
    </div>
  );
};

export default Cart;
