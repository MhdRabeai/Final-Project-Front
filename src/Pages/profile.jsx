import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import ProfileCard from "../Components/ProfileCard";
import reviewsData from "../Components/ReviewsData";

export const Profile = () => {
  return (
    <>
      <ProfileCard />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        {reviewsData.map((review, index) => (
          <div key={index} className="border-b py-4">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src="https://via.placeholder.com/40"
                alt="Profile"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-600 text-sm">
                  {review.date} - Rating:{" "}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      i < review.rating ? (
                        <FaStar key={i} className="text-yellow-500" />
                      ) : (
                        <FaRegStar key={i} className="text-yellow-500" />
                      )
                    ))}
                  </div>
                </p>
              </div>
            </div>
            <p className="mt-2">{review.comment}</p>
            <button className="mt-2 text-[#4f9451]">Reply</button>
          </div>
        ))}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Write a Review</h3>
          <div className="flex items-center mt-2">
            <span className="mr-2">Click on star to review:</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaRegStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="text"
              placeholder="Type review headline"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <textarea
              placeholder="Write your Review"
              className="w-full p-2 border border-gray-300 rounded mb-2"
              rows="4"
            />
            <button className="w-full bg-[#4f9451] text-white py-2 rounded">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
