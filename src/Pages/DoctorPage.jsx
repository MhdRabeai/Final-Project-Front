import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useUserInfo } from "../Services/UserContext";
import { Loading } from "../Components/Loading";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
const DoctorPage = () => {
  let { doctorId } = useParams();
  const { user } = useUserInfo();
  const [doctor, setDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetDoctor = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/doctorProfile?id=${doctorId}`,
        {
          credentials: "include",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setDoctor(data["doctor"]);
        console.log(data["doctor"]);
      }
    } catch (err) {}
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    handleGetDoctor();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {" "}
      <div className="">
        <div className="container max-w-[86rem] w-full mx-auto px-4 flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden transition-all duration-300 hover:shadow-[#4f9451]/50 dark:hover:shadow-blue-900/50">
            <div className="relative h-32 bg-gradient-to-r ">
              <img src="/green.png" alt="bg" className="w-full max-h-full" />
              <img
                src={`http://localhost:4000/${doctor?.userDetails?.avatar}`}
                alt="img"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="pt-14 pb-6 px-6 text-center">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                {doctor?.userDetails["name"]}
              </h1>
              <p className="text-[#4f9451] dark:text-indigo-400 font-semibold mb-5">
                Specialization: {doctor?.specialization}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2 text-xs">
                Experience: {doctor?.experience} years
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs">
                About Me: {doctor?.headLine}
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Link
                  to={`mailto:${doctor.userDetails["email"]}`}
                  className="text-gray-600 hover:text-[#4f9451] dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <BiLogoGmail />
                </Link>
                <Link
                  to={`whatsapp:contact=${doctor?.userDetails["phone"]}@s.whatsapp.com`}
                  className="text-gray-600 hover:text-[#4f9451] dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <FaWhatsapp />
                </Link>
              </div>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 text-sm bg-[#4f9451] text-white rounded-full transition-colors duration-300 hover:bg-[#386e3a]  dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-700">
                  Session Price: {doctor["session_price"]}$
                </span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
              <Link
                to={"booking"}
                className="block text-center w-full bg-[#4f9451] text-white text-sm py-2 rounded-lg font-semibold hover:bg-[#386e3a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4f9451] focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
