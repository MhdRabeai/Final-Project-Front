import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import reviewsData from "../Components/ReviewsData";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Profile = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-2xl mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col ">
          <div className="relative ">
            <img
              className="w-full h-40 object-cover"
              src="profile.png"
              alt="Background"
            />
            <img
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-4 border-white shadow-lg"
              src="Testimonial.png"
              alt="Profile"
            />
          </div>
          <div className="text-center py-6 px-4  mt-10  border-b-2 border-[#ddd]">
            <h1 className="text-2xl font-semibold">Danish Hebo</h1>
            <h2 className="text-gray-500 mt-1">Professional UI/UX Designer</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere fermentum urna, eu condimentum mauris tempus
              ut.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-[#4F9451] hover:text-green-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#4F9451] hover:text-green-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#4F9451] hover:text-green-500">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-[#4F9451] hover:text-green-500">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="px-6 py-8 pb-0 m-0">
            <h2 className="text-xl font-semibold mb-2">Some Reviews:</h2>
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
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-8 rounded-lg ">
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
                id="textarea-label2"
                class="resize-none py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-xs  text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                rows="3"
                name="review"
                placeholder="Write Your review..."
              ></textarea>
              <button className="w-full bg-[#4f9451] text-white py-2 rounded-md">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
