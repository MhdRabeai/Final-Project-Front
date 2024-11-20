import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetailAdmin = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:4000/getBlogById/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching blog data');
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800">{blogData.title}</h2>
      <p className="text-gray-500 mt-2">{blogData.date}</p>
      <img
        src={blogData.image}
        alt={blogData.title}
        className="mt-6 w-full rounded-lg max-w-[400px]"
      />
      <div className="mt-6 prose dark:prose-dark">
        {blogData.content}
      </div>
    </div>
  );
};

export default BlogDetailAdmin;
