import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const BlogCardAdmin = ({ id, date, CardTitle, CardDescription, image, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto p-3">
      <div className="flex flex-wrap gap-4">
        <div
          className="w-full mx-auto relative block overflow-hidden rounded-lg shadow-lg p-4 sm:p-4 lg:p-6 border border-gray-200 transition-transform transform hover:scale-105"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-[#4f9451]"></span>

          <div className="flex-col-reverse sm:flex-row flex sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {CardTitle}
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-600">
                By: John Doe
              </p>
            </div>

            <div className="block sm:shrink-0">
              <img
                alt="Post Thumbnail"
                src={image || "https://via.placeholder.com/150"}
                className="size-16 rounded-lg object-cover drop-shadow-md"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              {CardDescription}
            </p>
          </div>

          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">{date}</dd>
            </div>
          </dl>
          <div className="flex items-center mt-4">
            <div
              className="bg-blue-100 rounded-full p-2 cursor-pointer mx-2"
              onClick={() => onEdit(id)}  
            >
              <FontAwesomeIcon icon={faPencilAlt} className="text-blue-500" />
            </div>
            <div
              className="bg-red-100 rounded-full p-2 cursor-pointer"
              onClick={() => onDelete(id)} 
            >
              <FontAwesomeIcon icon={faTrash} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardAdmin;
