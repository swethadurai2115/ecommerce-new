import React, { useState } from 'react';

const Cart = ({ cartItems, onPlaceOrder }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name} - {item.quantity} x ${item.price}</p>
        </div>
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={onPlaceOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
