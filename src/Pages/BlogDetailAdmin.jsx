

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  const blogs = [
    {
      id: "1",
      date: "Dec 22, 2023",
      CardTitle: "Meet AutoManage, the best AI management tools",
      CardDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "https://i.ibb.co/Cnwd4q6/image-01.jpg",
      content:
        "Here is the full content of the blog post that will be displayed in detail.",
    },
    {
      id: "2",
      date: "Dec 23, 2023",
      CardTitle: "AI-Powered Analytics for Data-Driven Decisions",
      CardDescription: "AI analytics help businesses make better decisions by analyzing large datasets.",
      image: "https://i.ibb.co/sq8Ssq8/image-02.jpg",
      content: "In this post, we dive deep into the power of AI analytics and how they shape business decisions.",
    },
    {
      id: "3",
      date: "Dec 24, 2023",
      CardTitle: "Revolutionizing Healthcare with AI Solutions",
      CardDescription: "The healthcare industry is experiencing a revolution with AI tools that improve patient care.",
      image: "https://i.ibb.co/Bz7z4kc/image-03.jpg",
      content: "AI tools are not just changing the way healthcare works, but also improving overall outcomes.",
    },
    {
      id: "4",
      date: "Dec 25, 2023",
      CardTitle: "The Future of Self-Driving Cars",
      CardDescription: "Self-driving cars are transforming the automotive industry, promising safer and more efficient transportation.",
      image: "https://i.ibb.co/gw0sy2f/image-04.jpg",
      content: "Explore the current trends in self-driving technology and the future impact it will have on transportation.",
    },
    {
      id: "5",
      date: "Dec 26, 2023",
      CardTitle: "The Impact of Blockchain on Financial Services",
      CardDescription: "Blockchain technology is disrupting the financial sector by increasing transparency and security.",
      image: "https://i.ibb.co/X8HFzHJ/image-05.jpg",
      content: "Blockchain offers a new paradigm for secure and transparent financial transactions, reducing fraud and enhancing trust.",
    },
    {
      id: "6",
      date: "Dec 27, 2023",
      CardTitle: "Smart Cities: The Role of IoT in Urban Development",
      CardDescription: "Internet of Things (IoT) is transforming cities into smart, connected environments for better urban living.",
      image: "https://i.ibb.co/ZH1s2K4/image-06.jpg",
      content: "Learn how IoT is revolutionizing the way cities operate, making them smarter, safer, and more efficient.",
    },
    {
      id: "7",
      date: "Dec 26, 2023",
      CardTitle: "The Impact of Blockchain on Financial Services",
      CardDescription: "Blockchain technology is disrupting the financial sector by increasing transparency and security.",
      image: "https://i.ibb.co/X8HFzHJ/image-05.jpg",
      content: "Blockchain offers a new paradigm for secure and transparent financial transactions, reducing fraud and enhancing trust.",
    },
    {
      id: "8",
      date: "Dec 27, 2023",
      CardTitle: "Smart Cities: The Role of IoT in Urban Development",
      CardDescription: "Internet of Things (IoT) is transforming cities into smart, connected environments for better urban living.",
      image: "https://i.ibb.co/ZH1s2K4/image-06.jpg",
      content: "Learn how IoT is revolutionizing the way cities operate, making them smarter, safer, and more efficient.",
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
    <div className="container mx-auto px-4 py-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800">{blogData.CardTitle}</h2>
      <p className="text-gray-500 mt-2">{blogData.date}</p>
      <img
        src={blogData.image}
        alt={blogData.CardTitle}
        className="mt-6 w-full rounded-lg max-w-[400px]"
      />
      <div className="mt-6 prose dark:prose-dark">
        {blogData.content}
      </div>
    </div>
  );
};

export default BlogDetail;