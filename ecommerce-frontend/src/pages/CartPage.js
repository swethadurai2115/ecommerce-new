import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back shopping</Link></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} style={styles.cartItem}>
              <img src={item.imageUrl} alt={item.name} style={styles.image} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${calculateTotal()}</h2>
          <button style={styles.checkoutButton}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  image: {
    width: '100px',
    height: '100px',
    marginRight: '20px',
  },
  checkoutButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CartPage;
