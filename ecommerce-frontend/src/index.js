import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>,
  document.getElementById('root')
);
