import React, { useState, useEffect } from 'react';
import BlogCard from '../Components/BlogCard';
import { Loading } from '../Components/Loading';
// import SearchComponent from './SearchPage';
import { Link } from 'react-router-dom';

const BlogsAdmin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchQuery, setSearchQuery] = useState("");
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

  const totalPages = Math.min(Math.ceil(data.length / itemsPerPage), 8);
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
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
            </p>
            {/* <SearchComponent
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            /> */}
              <div className="relative max-w-xs sm:max-w-md lg:max-w-lg mx-auto my-4">
            <label htmlFor="p-5 search-input" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Search for items"
            />
          </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 xl:grid-cols-4 xl:gap-4">
            {currentBlogs.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                date={new Date().toLocaleDateString()}
                CardTitle={
                  <Link 
                    to={`/dashboard/admin/blog-detail/${post.id}`}
                    className="text-green-500 hover:text-green-700 transition-colors duration-300" // تأثير hover
                  >
                    {post.title}
                  </Link>
                }
                CardDescription={post.body.substring(0, 100) + '...'}
                image="https://via.placeholder.com/150"
                doctorName="Dr. John Doe"
              />
            ))}
          </div>
          {filteredData.length >= itemsPerPage && (
            <div className="pt-10 text-center dark:bg-black">
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsAdmin;
