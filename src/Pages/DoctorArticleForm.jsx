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
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 py-10 mb-4">
    <h2 className="text-xl font-bold mb-4 text-green-700">Share your Knowledge</h2>
  
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
        Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder="Enter Title..."
      />
    </div>
  
    <div className="mb-4">
      <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
        Content
      </label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-xs text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder="Enter Your Knowledge..."
      />
    </div>
  
    <div className="mb-4">
      <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
        Image
      </label>
      <div className="relative">
        <input type="file" id="image" onChange={handleImageChange} className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
        
      </div>
    </div>
  
    <div className="flex justify-center">
      <button type="submit" className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
        Post Article
      </button>
    </div>
  </form>
  );
};

export default DoctorArticleForm;