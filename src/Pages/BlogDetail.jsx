import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  const blogs = [
    {
      id: "10",
      date: "Dec 22, 2023",
      CardTitle: "Meet AutoManage, the best AI management tools",
      CardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://i.ibb.co/Cnwd4q6/image-01.jpg",
      content:
        "Here is the full content of the blog post that will be displayed in detail.",
    },
  ];

  useEffect(() => {
    const blog = blogs.find((b) => b.id === id);
    setBlogData(blog);
  }, [id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-3xl font-bold">{blogData.CardTitle}</h2>
      <p className="text-gray-500 mt-2">{blogData.date}</p>
      <img
        src={blogData.image}
        alt={blogData.CardTitle}
        className="mt-6 w-full max-w-2xl"
      />
      <p className="mt-6">{blogData.content}</p>
    </div>
  );
};

export default BlogDetail;
