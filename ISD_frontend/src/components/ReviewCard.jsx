import React from "react";
import { FaStar } from "react-icons/fa";
import user from "../assets/User.svg";

export const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={user} alt={review.name} className="review-img" />
        <div>
          <h3>{review.name}</h3>
          <p>{review.date}</p>
        </div>
      </div>
      <div className="review-rating">
        {[...Array(review.rating)].map((_, i) => (
          <FaStar key={i} color="gold" />
        ))}
      </div>
      <p className="review-text">{review.review}</p>
    </div>
  );
};
