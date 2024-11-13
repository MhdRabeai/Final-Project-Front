import React, { useState, useEffect } from "react";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.min(Math.ceil(data.length / itemsPerPage), 6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeamMembers = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap pb-10">
          <div className="w-full px-4">
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
            </div>
          </div>
        </div>

        {/* عرض الكروت باستخدام grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentTeamMembers.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              date={new Date().toLocaleDateString()}
              CardTitle={post.title}
              CardDescription={post.body.substring(0, 100) + "..."}
              image="https://via.placeholder.com/150"
            />
          ))}
        </div>

        {/* التصفح بين الصفحات */}
        {data.length >= itemsPerPage && (
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
                      className={`flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-10 dark:border-white/10 dark:text-white dark:hover:bg-green/5 ${
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
                      paginate(
                        currentPage < totalPages ? currentPage + 1 : totalPages
                      )
                    }
                    className="flex h-10 min-w-10 items-center justify-center px-2 text-base font-medium text-dark hover:bg-gray-2 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
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
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
