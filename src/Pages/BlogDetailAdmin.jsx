import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetailAdmin = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  const blogs = [
    { id: "1", date: "Dec 22, 2023", CardTitle: "Meet AutoManage, the best AI management tools", image: "https://i.ibb.co/Cnwd4q6/image-01.jpg", content: "Here is the full content of the blog post that will be displayed in detail." },
    { id: "2", date: "Dec 23, 2023", CardTitle: "AI-Powered Analytics", image: "https://i.ibb.co/sq8Ssq8/image-02.jpg", content: "In this post, we dive deep into the power of AI analytics." },
    { id: "3", date: "Dec 24, 2023", CardTitle: "Revolutionizing Healthcare", image: "https://i.ibb.co/Bz7z4kc/image-03.jpg", content: "AI tools are not just changing the way healthcare works." }
  ];

  useEffect(() => {
    const blog = blogs.find((b) => b.id === id);
    setBlogData(blog);
  }, [id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800">{blogData.CardTitle}</h2>
      <p className="text-gray-500 mt-2">{blogData.date}</p>
      <img
        src={blogData.image}
        alt={blogData.CardTitle}
        className="mt-6 w-full rounded-lg max-w-[400px]"
      />
      <p className="mt-6 text-lg">{blogData.content}</p>
    </div>
  );
};

export default BlogDetailAdmin;
