import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, date, CardTitle, CardDescription, image }) => {
  return (
    <div className="container mx-auto p-6">
    <div className="flex flex-wrap gap-6">
      <div className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white transition-transform transform hover:scale-105 flex flex-col">
        <img src={image} alt="blog image" className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 truncate">
            {CardTitle}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-4 line-clamp-3">
            {CardDescription}
          </p>
          <div className="mt-auto">
            <Link
              to={`${id}`}
              className="bg-[#4F9451] dark:bg-dark-2 border-[#4F9451] dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color mt-5"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
  
};

export default BlogCard;
