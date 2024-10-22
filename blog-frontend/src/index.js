import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';
const container = document.getElementById('root');
const root = createRoot(container); // Create root using createRoot

root.render(
  <Router>
    <App />
  </Router>
);
