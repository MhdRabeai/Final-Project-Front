import React, { useState } from "react";

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
    <div className="mx-auto mb-10 w-full max-w-[370px] transition-transform transform hover:-translate-y-2 duration-300">
      <div className="relative overflow-hidden rounded-lg">
        <img src={imageSrc} alt="" className="w-full" />
        <div className="absolute bottom-5 left-0 w-full text-center">
          <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-black">
            <h3 className="text-base font-semibold text-dark dark:text-white">
              {name}
            </h3>
            <p className="text-xs text-body-color dark:text-dark-6">
              {profession}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

const Team = () => {
  const teamData = [
    {
      name: "Coriss Ambady",
      profession: "Web Developer",
      imageSrc: "https://i.ibb.co/T1J9LD4/image-03-2.jpg",
    },
    {
      name: "John Doe",
      profession: "UI/UX Designer",
      imageSrc: "https://i.ibb.co/8P6cvVy/image-01-1.jpg",
    },
    {
      name: "Jane Smith",
      profession: "Backend Developer",
      imageSrc: "https://i.ibb.co/30tGtjP/image-04.jpg",
    },
    {
      name: "Samuel Green",
      profession: "Frontend Developer",
      imageSrc: "https://i.ibb.co/yVVT0Dp/image-02-2.jpg",
    },
    {
      name: "Robert Williams",
      profession: "Project Manager",
      imageSrc: "https://i.ibb.co/8P6cvVy/image-01-1.jpg",
    },
    {
      name: "Alice Johnson",
      profession: "QA Engineer",
      imageSrc: "https://i.ibb.co/T1J9LD4/image-03-2.jpg",
    },
    {
      name: "Lucas Martin",
      profession: "Web Developer",
      imageSrc: "https://i.ibb.co/30tGtjP/image-04.jpg",
    },
    {
      name: "Sophia Davis",
      profession: "DevOps Engineer",
      imageSrc: "https://i.ibb.co/yVVT0Dp/image-02-2.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(teamData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeamMembers = teamData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className=" dark:bg-black ">
      {/* lg:pb-20 lg:pt-[120px] pb-10 pt-20 */}
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 flex flex-wrap justify-center dark:bg-black">
          {currentTeamMembers.map((member, index) => (
            <TeamCard
              className="dark:bg-white"
              key={index}
              name={member.name}
              profession={member.profession}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>

        {teamData.length > itemsPerPage && (
          <div className="bg-white py-10 text-center dark:bg-black dark:border-white">
            <div className="mb-12 inline-flex justify-center rounded bg-white p-3 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.13)] dark:bg-black">
              <ul className="inline-flex overflow-hidden rounded-lg border border-stroke dark:border-white">
                <li>
                  <button
                    onClick={() =>
                      paginate(currentPage > 1 ? currentPage - 1 : 1)
                    }
                    className="flex h-10 min-w-10 items-center justify-center border-r border-stroke px-2 text-base font-medium text-dark  dark:border-white/10 dark:text-white dark:hover:bg-white/20"
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
    </section>
  );
};

export default Team;
