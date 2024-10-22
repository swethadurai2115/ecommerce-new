import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => (
  <div className="meal-card">  
    <img src={meal.image} alt={meal.name} />
    <h3>{meal.name}</h3>
    <p>${meal.price}</p>
    <Link to={`/meal/${meal._id}`}>View Details</Link>
  </div>
);

export default MealCard;