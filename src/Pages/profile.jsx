import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import reviewsData from "../Components/ReviewsData";

const Profile = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col space-y-8">
          <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src="https://your-background-image-url.jpg"
              alt="Background"
            />
            <img
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg"
              src="https://your-profile-image-url.jpg"
              alt="Profile"
            />
          </div>

          <div className="text-center py-6 px-4">
            <h1 className="text-2xl font-semibold">Danish Hebo</h1>
            <h2 className="text-gray-500 mt-1">Professional UI/UX Designer</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere fermentum urna, eu condimentum mauris tempus
              ut.
            </p>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-blue-500 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="px-6 py-8">
            <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
            {reviewsData.map((review, index) => (
              <div key={index} className="border-b py-4">
                <div className="flex items-center mb-3">
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
                        {[...Array(5)].map((_, i) =>
                          i < review.rating ? (
                            <FaStar
                              key={i}
                              className="text-yellow-500 text-2xl"
                            />
                          ) : (
                            <FaRegStar
                              key={i}
                              className="text-yellow-500 text-2xl"
                            />
                          )
                        )}
                      </div>
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
                <button className="mt-2 text-[#4f9451] hover:underline">
                  Reply
                </button>
              </div>
            ))}
          </div>

          {/* Write a Review */}
          <div className="bg-gray-50 px-6 py-8 rounded-lg mt-6">
            <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
            <div className="flex items-center mb-4">
              <span className="mr-2">Click on star to review:</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleStarClick(i)}
                    className="cursor-pointer"
                  >
                    {i < rating ? (
                      <FaStar className="text-yellow-500 text-2xl" />
                    ) : (
                      <FaRegStar className="text-yellow-500 text-2xl" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <textarea
                placeholder="Write your Review"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                rows="4"
              />
              <button className="w-full bg-[#4f9451] text-white py-2 rounded-md">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
