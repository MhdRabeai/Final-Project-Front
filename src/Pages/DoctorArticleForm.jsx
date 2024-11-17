import React, { useState } from 'react';

const DoctorArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const articleData = {
      title,
      content,
      categories,
      tags,
      image,
    };

    fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleData),
    })
    .then(response => {
      console.log('Article posted successfully:', response);
      setTitle('');
      setContent('');
      setCategories([]);
      setTags([]);
      setImage(null);
    })
    .catch(error => {
      console.error('Error posting article:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
      <h2 className="text-xl font-bold mb-4 text-green-700">Share your Knowledge</h2>
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48" />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
        <input type="file" id="image" onChange={handleImageChange} />
        {image && (
          <img src={image} alt="Article Image" className="mt-2" />
        )}
      </div>

      <div className="flex justify-center">
        <button type="submit" className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">Post Article</button>
      </div>
    </form>
  );
};

export default DoctorArticleForm;