import React, { useState, useEffect } from 'react';
import BlogCardAdmin from "../Components/BlogCardAdmin"; 
import { Loading } from '../Components/Loading';
import { Link } from 'react-router-dom';

const BlogsAdmin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      'Dr. John Doe'.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentBlogs = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div><Loading /></div>;
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEdit = (id) => {
    console.log("Editing post with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Deleting post with ID:", id);
  };

  // Helper function to truncate text for title and body
  const truncateText = (text, length = 100) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  // Function to generate page numbers dynamically
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <section className="dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="mx-auto max-w-[510px] text-center">
            <span className="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
              Our Blogs
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Our Recent News
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <div className="relative max-w-xs sm:max-w-md lg:max-w-lg mx-auto my-4">
              <label htmlFor="search-input" className="sr-only">Search</label>
              <input
                type="text"
                id="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                className="peer py-2 px-4 ps-11 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Search for items"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xl:grid-cols-4 xl:gap-4">
            {currentBlogs.map((post) => (
              <BlogCardAdmin
                key={post.id}
                id={post.id}
                date={new Date().toLocaleDateString()}
                CardTitle={
                  <Link 
                    to={`/dashboard/admin/blog-detail/${post.id}`}
                    className="text-[#4F9451] hover:text-[#4F9451] transition-colors duration-300"
                  >
                    {truncateText(post.title, 10)}
                  </Link>
                }
                CardDescription={truncateText(post.body, 80)}
                image="https://via.placeholder.com/150"
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Pagination Section */}
          <div className="pt-10 text-center dark:bg-black">
            <nav className="flex justify-center space-x-4">
              {/* Prev Button */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 disabled:bg-gray-400 transition duration-200 hover:bg-gray-400"
              >
                Prev
              </button>

              {/* Display Pagination Buttons */}
              {generatePageNumbers().slice(currentPage - 1, currentPage + 3).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`px-4 py-2 rounded-md ${currentPage === pageNumber ? 'bg-[#4f9451] text-white' : 'bg-gray-300 text-gray-800'} transition duration-200 hover:bg-[#4f9451] hover:text-white`}
                >
                  {pageNumber}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 disabled:bg-gray-400 transition duration-200 hover:bg-gray-400"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsAdmin;
