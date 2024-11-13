import React from 'react';

function Blog({ imageSrc, writer, date, title, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center">
        <img src={imageSrc} alt="Author's Avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-bold">{writer}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
}

export default Blog;