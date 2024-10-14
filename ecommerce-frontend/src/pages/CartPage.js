import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
