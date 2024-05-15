import React from 'react';
import './rating.css'
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;