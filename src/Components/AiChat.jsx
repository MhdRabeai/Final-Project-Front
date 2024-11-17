import React from "react";

const AiChat = () => {
  return (
    <>
      <button
        type="button"
        className="fixed right-[-5px] bottom-20 z-40  text-white "
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-example"
        data-hs-overlay="#hs-offcanvas-example"
      >
        <div
          className="p-3 rounded-[50%_0%_0%_50%] border-4 border-white
           bg-[#4f9451]"
        >
          <svg
            className="w-5  h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      <div
        id="hs-offcanvas-example"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full  sm:max-w-xs w-[80%] z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700 flex flex-col justify-between"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="hs-offcanvas-example-label"
      >
        <div>
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
            <h3
              id="hs-offcanvas-example-label"
              className="font-bold text-gray-800 dark:text-white"
            >
              Ask me any thing ..
            </h3>
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
              data-hs-overlay="#hs-offcanvas-example"
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
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
          <div className="">
            <ul className="space-y-5 max-h-[75vh] p-2 overflow-auto my-chat">
              <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                  <h2 className="font-medium text-gray-800 dark:text-white">
                    How can we help?
                  </h2>
                  <div className="space-y-1.5">
                    <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                      You can ask questions like:
                    </p>
                    <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                      <li className="text-sm text-gray-800 dark:text-white">
                        What's Preline UI?
                      </li>

                      <li className="text-sm text-gray-800 dark:text-white">
                        How many Starter Pages & Examples are there?
                      </li>

                      <li className="text-sm text-gray-800 dark:text-white">
                        Is there a PRO version?
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="max-w-lg ms-auto flex justify-end gap-x-2 sm:gap-x-4">
                <div className="grow text-end space-y-3">
                  <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                    <p className="text-sm text-white">what's preline ui?</p>
                  </div>
                </div>
              </li>
              <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                  <h2 className="font-medium text-gray-800 dark:text-white">
                    How can we help?
                  </h2>
                  <div className="space-y-1.5">
                    <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                      You can ask questions like:
                    </p>
                    <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                      <li className="text-sm text-gray-800 dark:text-white">
                        What's Preline UI?
                      </li>

                      <li className="text-sm text-gray-800 dark:text-white">
                        How many Starter Pages & Examples are there?
                      </li>

                      <li className="text-sm text-gray-800 dark:text-white">
                        Is there a PRO version?
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="max-w-lg ms-auto flex justify-end gap-x-2 sm:gap-x-4">
                <div className="grow text-end space-y-3">
                  <div className="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
                    <p className="text-sm text-white">what's preline ui?</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <form>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 mt-3 gap-1">
            <input
              type="text"
              class="peer py-2 px-4  block w-full
 border-2  border-gray-200 rounded-lg text-sm 
 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent 
 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Your Message..."
              required=""
              value=""
            />
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-[#4f9451] rounded-full cursor-pointer hover:bg-[#4f94512c] dark:text-blue-500 dark:hover:bg-gray-600"
              name="message"
            >
              <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AiChat;
