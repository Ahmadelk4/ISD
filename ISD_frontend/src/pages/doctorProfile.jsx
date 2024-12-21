import React from "react";
import "../CSS/doctorProfile.css";
import user from "../assets/User.svg";
import { ReviewCard } from "../components/ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Maggie",
    date: "May 8, 2023",
    rating: 5,
    review:
      "Dr. Smith is the best pediatrician we have ever had. She is always patient and takes the time to answer all of our questions. She is extremely knowledgeable and up-to-date with the latest research. Our kids love her and we trust her completely.",
  },
  {
    id: 2,
    name: "Joey",
    date: "April 22, 2023",
    rating: 5,
    review:
      "Dr. Smith has been my daughter's pediatrician for over 7 years and she has always provided excellent care. She is kind, compassionate, and very thorough. She takes the time to listen to our concerns and explains things in a way that is easy to understand. I highly recommend her to anyone looking for a great pediatrician!",
  },
  {
    id: 3,
    name: "Sophia",
    date: "March 15, 2023",
    rating: 5,
    review:
      "Dr. Smith is fantastic! She is always professional and caring. She remembers all the details about our family and makes us feel comfortable every time we visit.",
  },
  {
    id: 4,
    name: "Mike",
    date: "February 10, 2023",
    rating: 2,
    review:
      "I cannot say enough good things about Dr. Smith. She genuinely cares about her patients and goes above and beyond to ensure they receive the best care possible.",
  },
  {
    id: 5,
    name: "Mike",
    date: "February 10, 2023",
    rating: 3,
    review:
      "I cannot say enough good things about Dr. Smith. She genuinely cares about her patients and goes above and beyond to ensure they receive the best care possible.",
  },
  {
    id: 6,
    name: "Mike",
    date: "February 10, 2023",
    rating: 1,
    review:
      "I cannot say enough good things about Dr. Smith. She genuinely cares about her patients and goes above and beyond to ensure they receive the best care possible.",
  },
  {
    id: 7,
    name: "Mike",
    date: "February 10, 2023",
    rating: 1,
    review:
      "I cannot say enough good things about Dr. Smith. She genuinely cares about her patients and goes above and beyond to ensure they receive the best care possible.",
  },
  {
    id: 8,
    name: "Mike",
    date: "February 10, 2023",
    rating: 1,
    review:
      "I cannot say enough good things about Dr. Smith. She genuinely cares about her patients and goes above and beyond to ensure they receive the best care possible.",
  },
  {
    id: 9,
    name: "Mike",
    date: "February 10, 2023",
    rating: 5,
    review:
      "I cannot say enough good things about Dr. Smith. She genuinely cares about her patients and goes above and beyond to ensure they receive the best care possible.",
  },
  {
    id: 10,
    name: "Mike",
    date: "February 10, 2023",
    rating: 5,
    review:
      "I cannot say enough good things about Dr. Smith. She genuinely cares about her patients and goes above and beyond to ensure they receive the best care possible.",
  },
];

export default function doctorProfile() {
  function calculateAverageRating(reviews) {
    const totalRating = reviews
      .map((review) => review.rating)
      .reduce((acc, rating) => acc + rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating;
  }
  return (
    <div className="app">
      <div className="profile">
        <img className="profile-img" src={user} alt="Dr. Hannah Smith" />
        <h1>Dr. Hannah Smith,</h1>
        <p className="specialty">Pediatrics • 15 years experience</p>
        <div className="rating">
          <span className="stars">{calculateAverageRating(reviews)}</span>
          <span className="reviews">({reviews.length} reviews)</span>
        </div>
      </div>
      <div className="reviews">
        <h2>Patient Reviews</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
