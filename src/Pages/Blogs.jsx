import React, { useState, useEffect } from 'react';
import BlogCard from '../Components/BlogCard';
import { Loading } from '../Components/Loading';
import { IoIosSearch } from "react-icons/io";
import SearchComponent from './SearchPage';

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const filteredData = data.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      'Dr. John Doe'.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.min(Math.ceil(filteredData.length / itemsPerPage), 8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeamMembers = filteredData.slice(indexOfFirstItem, indexOfLastItem);
 
  const paginate = (pageNumber) => {
    setCurrentPage(Math.min(pageNumber, totalPages));
  };
  const [sortConfig, setSortConfig] = useState({
    key: "title",
    direction: "ascending",
  });
  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  

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
  <label htmlFor="search-input" className="sr-only">
    Search
  </label>
  <div className="relative">
    <input
      type="text"
      id="search-input"
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500"
      placeholder="Search..."
      onChange={handleSearchChange}
    />
    <IoIosSearch 
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      size={20}
    />
  </div>
</div>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 xl:grid-cols-4 xl:gap-4">
            {currentTeamMembers.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                date={new Date().toLocaleDateString()}
                CardTitle={post.title}
                CardDescription={post.body.substring(0, 100) + '...'}
                image="https://via.placeholder.com/150"
                doctorName="Dr. John Doe"
              />
            ))}
          </div>
          {filteredData.length > itemsPerPage && (
          <div className="pt-10 text-center dark:bg-black">
            <div className="inline-flex justify-center rounded bg-white p-3 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.13)] dark:bg-black dark:border">
              <ul className="inline-flex overflow-hidden rounded-lg border border-stroke dark:border-gray">
                <li>
                  <button
                    onClick={() =>
                      paginate(currentPage > 1 ? currentPage - 1 : 1)
                    }
                    className="flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 9.8125H4.15625L9.46875 4.40625C9.75 4.125 9.75 3.6875 9.46875 3.40625C9.1875 3.125 8.75 3.125 8.46875 3.40625L2 9.96875C1.71875 10.25 1.71875 10.6875 2 10.9688L8.46875 17.5312C8.59375 17.6562 8.78125 17.75 8.96875 17.75C9.15625 17.75 9.3125 17.6875 9.46875 17.5625C9.75 17.2812 9.75 16.8438 9.46875 16.5625L4.1875 11.2188H17.5C17.875 11.2188 18.1875 10.9062 18.1875 10.5312C18.1875 10.125 17.875 9.8125 17.5 9.8125Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </li>

                {[...Array(totalPages).keys()].map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => paginate(page + 1)}
                      className={`flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-200 dark:border-white/10 dark:text-white dark:hover:bg-white/5 ${
                        currentPage === page + 1
                          ? "bg-gray-200 dark:bg-dark-3"
                          : ""
                      }`}
                    >
                      {page + 1}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() =>
                      paginate(Math.min(totalPages, currentPage + 1))
                    }
                    className="flex h-10 min-w-10 items-center justify-center px-2 text-base font-medium text-dark hover:bg-gray-200 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                    disabled={currentPage === totalPages}
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 10L11.5312 3.4375C11.25 3.15625 10.8125 3.15625 10.5312 3.4375C10.25 3.71875 10.25 4.15625 10.5312 4.4375L15.7812 9.78125H2.5C2.125 9.78125 1.8125 10.0937 1.8125 10.4688C1.8125 10.8438 2.125 11.1875 2.5 11.1875H15.8437L10.5312 16.5938C10.25 16.875 10.25 17.3125 10.5312 17.5938C10.6562 17.7188 10.8437 17.7812 11.0312 17.7812C11.2187 17.7812 11.4062 17.7188 11.5312 17.5625L18 11C18.2812 10.7187 18.2812 10.2812 18 10Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        </div>
      </div>
  
    </section>
  );
};

export default Blogs;