import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, date, CardTitle, CardDescription, image }) => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-wrap gap-4">
        <Link
          to={`blog/${id}`}
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
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
