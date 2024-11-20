import React from "react";
import { Link } from "react-router-dom";
import Stepper from "../Components/Stepper";

const DoctorPage = () => {
  return (
    <div className="">
      <div className="container max-w-[86rem] w-full mx-auto px-4 flex justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden transition-all duration-300 hover:shadow-[#4f9451]/50 dark:hover:shadow-blue-900/50">
          <div className="relative h-40 bg-gradient-to-r from-indigo-600 to-blue-700">
            <img src="/green.png" alt="bg" className="w-full max-h-full" />
            <img
              src="https://i.pravatar.cc/300"
              alt="John Doe"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="pt-16 pb-6 px-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              John Doe
            </h1>
            <p className="text-[#4f9451] dark:text-indigo-400 font-semibold mb-4">
              Software Developer
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passionate about creating user-friendly web applications and
              solving complex problems.
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <Link
                to={"/"}
                className="text-gray-600 hover:text-[#4f9451] dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
          
              <Link
                to={"/"}
                className="text-gray-600 hover:text-[#4f9451] dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
            <button
              className="w-full bg-[#4f9451] text-white text-sm py-2 rounded-lg font-semibold hover:bg-[#386e3a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#4f9451] focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-scale-animation-modal"
              data-hs-overlay="#hs-scale-animation-modal"
            >
              Book An Appointment
            </button>
          </div>
        </div>
      </div>
      <div
        id="hs-scale-animation-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        tabindex="-1"
        aria-labelledby="hs-scale-animation-modal-label"
      >
        <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3
                id="hs-scale-animation-modal-label"
                class="font-bold text-gray-800 dark:text-white"
              >
                Booking Process...
              </h3>
              <button
                type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-scale-animation-modal"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <Stepper amount={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
