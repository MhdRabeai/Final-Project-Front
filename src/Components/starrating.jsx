import React from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex mb-4">
      {stars.map((_, index) => {
        const starRating = index + 1;

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 cursor-pointer ${
              rating >= starRating ? 'text-yellow-500' : 'text-gray-300'
            }`}
            fill="currentcolor"
            viewBox="0 0 24 24"
            onClick={() => onRatingChange(starRating)}
          >
            <path d="M12 .587l3.668 7.431L24 9.5l-6 5.868 1.418 8.23L12 18.897l-7.418 4.701L6 15.368 0 9.5l8.332-1.482z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
