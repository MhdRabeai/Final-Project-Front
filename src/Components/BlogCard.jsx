import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, date, CardTitle, CardDescription, image }) => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-wrap gap-4">
        {/* <div className="w-full mx-auto rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white transition-transform transform hover:scale-105 flex flex-col">
          <img
            src={image}
            alt="blog image"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {date}
              </span>
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
        </div> */}
        <a
          href="/"
          className="w-full mx-auto relative block overflow-hidden rounded-lg shadow-lg p-4 sm:p-4 lg:p-6  border border-gray-200 transition-transform transform hover:scale-105"
        >
          <span className="absolute inset-x-0 bottom-0 h-2  bg-[#4f9451]"></span>

          <div className="flex-col-reverse sm:flex-row flex sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Building a SaaS product as a software developer
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-600">
                By: John Doe
              </p>
            </div>

            <div className="block sm:shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-16 rounded-lg object-cover drop-shadow-md"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
              illum provident a, ipsa maiores deleniti consectetur nobis et
              eaque.
            </p>
          </div>

          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st June, 2021</dd>
            </div>
          </dl>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
