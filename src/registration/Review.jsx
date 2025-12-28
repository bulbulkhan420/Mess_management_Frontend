import React from 'react';
import styles from './Review.module.css'

const reviews = [
  {
    id: 1,
    name: 'Alex Smith',
    date: 'September 29, 2024',
    avatar: 'A',
    reviewText: 'I’ve been using this system for 3 months, and it has completely transformed my approach to fitness. The meal plans are easy to follow, and the exercise routines fit my schedule perfectly!',
    rating: 5
  },
  {
    id: 2,
    name: 'John Doe',
    date: 'August 14, 2024',
    avatar: 'J',
    reviewText: 'The mass management system helped me lose 10kg in just two months! The support from the team is incredible, and the features are so easy to use.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Johnson',
    date: 'July 23, 2024',
    avatar: 'E',
    reviewText: 'Great system! It helped me track my progress and stay motivated. Highly recommend for anyone looking to manage their weight effectively.',
    rating: 4
  }
];

const Review = () => {
  return (
    <div className={styles.reviews_section}>
<<<<<<< HEAD
      <h2 className={styles.hh2}>User Reviews</h2>
=======
      <h2>User Reviews</h2>
>>>>>>> 29b1658a361852b0d311d3f43a06eff02107fa95
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <div className={styles.review_header}>
            <div className={styles.user_avatar}>{review.avatar}</div>
            <div className={styles.user_info}>
              <h3>{review.name}</h3>
              <p className={styles.review_date}>{review.date}</p>
            </div>
          </div>
          <div className={styles.review_content}>
            <p>{review.reviewText}</p>
            <div className={styles.rating}>Rating: {'⭐'.repeat(review.rating)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

<<<<<<< HEAD
export default Review;
=======
export default Review;
>>>>>>> 29b1658a361852b0d311d3f43a06eff02107fa95
