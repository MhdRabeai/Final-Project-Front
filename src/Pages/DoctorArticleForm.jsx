import React, { useState } from 'react';

const DoctorArticleForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      title,
      description,
      content,
      image,
    };

    fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData),
    })
      .then((response) => {
        console.log('Article posted successfully:', response);
        setTitle('');
        setDescription('');
        setContent('');
        setImage(null);
        setPreviewImage(null);
      })
      .catch((error) => {
        console.error('Error posting article:', error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl md:p-8 lg:p-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-green-700">
          Share Your Knowledge
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 mb-4 rounded-lg overflow-hidden border-2 border-gray-300 shadow-sm">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Uploaded Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <label className="cursor-pointer">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 text-white text-sm sm:text-base rounded-lg shadow hover:bg-green-700">
                Upload Image
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm md:text-base font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title..."
              className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm md:text-base font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a brief description..."
              className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              rows="3"
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm md:text-base font-medium text-gray-700 mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter detailed content..."
              className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              rows="6"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 md:py-3 rounded-lg shadow hover:bg-green-700"
            >
              Post Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorArticleForm;
