// Blogs.js
import React, { useState, useEffect } from "react";
import BlogCard from "../Components/BlogCard";
import { Loading } from "../Components/Loading";

const BlogsAdmin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const itemsPerPage = 8;

  const dummyData = [
    {
      id: 1,
      title: "First Blog",
      body: "This is the first blog content.",
      doctorName: "Dr. John Doe",
      publishDate: "2024-11-10",
    },
    {
      id: 2,
      title: "Second Blog",
      body: "This is the second blog content.",
      doctorName: "Dr. Jane Smith",
      publishDate: "2024-11-12",
    },
    {
      id: 3,
      title: "Third Blog",
      body: "This is the third blog content.",
      doctorName: "Dr. Alice Brown",
      publishDate: "2024-11-14",
    },
  ];

  const doctorList = ["Dr. John Doe", "Dr. Jane Smith", "Dr. Alice Brown"];

  useEffect(() => {
    setData(dummyData);
    setLoading(false);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeamMembers = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  if (loading) {
    return <div>{<Loading />}</div>;
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
        <div className="mb-4">
          <select
            value={selectedDoctor}
            onChange={handleDoctorChange}
            className="border rounded p-2"
          >
            <option value="">Select Doctor</option>
            {doctorList.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 xl:grid-cols-4 xl:gap-4">
          {currentTeamMembers
            .filter(
              (post) =>
                !selectedDoctor || post.doctorName === selectedDoctor
            )
            .map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                date={post.publishDate}
                CardTitle={post.title}
                CardDescription={post.body.substring(0, 100) + "..."}
                image="https://via.placeholder.com/150"
                doctorName={post.doctorName}
              />
            ))}
        </div>
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
                    Previous
                  </button>
                </li>

                {[...Array(totalPages).keys()].map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => paginate(page + 1)}
                      className={`flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark hover:bg-gray-10 dark:border-white/10 dark:text-white dark:hover:bg-green/5 ${currentPage === page + 1
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
                    Next
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

export default BlogsAdmin;
