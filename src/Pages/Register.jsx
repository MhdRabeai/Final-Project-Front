import React, { useState } from "react";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOneVisible, setIsOne] = useState(false);
  const [isTwoVisible, setIsTwo] = useState(false);
  function togglePass() {
    setIsVisible((prevState) => !prevState);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formElement = document.getElementById("uploadForm");
    if (formElement) {
      const formData = new FormData(formElement);
      try {
        const res = await fetch("http://localhost:4000/register", {
          method: "POST",
          body: formData,
          credentials: "include",
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-[60rem] mx-auto px-4 flex-none my-8">
        <form
          id="uploadForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div data-hs-stepper="">
            <ul className="relative flex flex-row gap-x-2">
              <li
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
                data-hs-stepper-nav-item='{
      "index": 1,
      "isOptional": true
    }'
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-[#4f9451] hs-stepper-active:text-white hs-stepper-success:bg-[#4f9451] hs-stepper-success:text-white hs-stepper-completed:bg-[#355a36] hs-stepper-completed:group-focus:bg-[#4f7750] dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      1
                    </span>
                    <svg
                      className="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-[#4f9451] hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500"></div>
              </li>

              <li
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
      "index": 2,
      "isOptional": true
    }'
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-[#4f9451] hs-stepper-active:text-white hs-stepper-success:bg-[#4f9451] hs-stepper-success:text-white hs-stepper-completed:bg-[#355a36] hs-stepper-completed:group-focus:bg-[#4f7750] dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      2
                    </span>
                    <svg
                      className="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-[#4f9451] hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500"></div>
              </li>

              <li
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
      "index": 3
    }'
              >
                <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-[#4f9451] hs-stepper-active:text-white hs-stepper-success:bg-[#4f9451] hs-stepper-success:text-white hs-stepper-completed:bg-[#355a36] hs-stepper-completed:group-focus:bg-[#4f7750] dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      3
                    </span>
                    <svg
                      className="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400">
                    Step
                  </span>
                </span>
                <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-[#4f9451] hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500"></div>
              </li>
            </ul>

            <div className="mt-5 sm:mt-8">
              <div
                data-hs-stepper-content-item='{
      "index": 1
    }'
                style={{ display: "none" }}
              >
                <div className="hs-accordion-group w-full divide divide-gray-200 dark:divide-neutral-700 border rounded-xl shadow-sm p-6 dark:bg-neutral-800 dark:border-neutral-700">
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border  rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent border-gray-200 active"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    >
                      How are you feeling today?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      style={{ display: "block" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="flex gap-x-6 flex-wrap">
                          <div className="flex">
                            <input
                              type="radio"
                              name="feeling"
                              value={"Great"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-1"
                            />
                            <label
                              htmlFor="hs-radio-group-1"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Great
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="feeling"
                              value={"Good"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-2"
                            />
                            <label
                              htmlFor="hs-radio-group-2"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Good
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="feeling"
                              value={"So-so"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-3"
                            />
                            <label
                              htmlFor="hs-radio-group-3"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              So-so
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="feeling"
                              value={"Bad"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-4"
                            />
                            <label
                              htmlFor="hs-radio-group-4"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Bad
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    >
                      Select any of these challenges you are facing.
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                      style={{ height: "0px" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="grid lg:grid-cols-4 lg:gap-x-4 xl:gap-x-12  lg:items-center  justify-between ">
                          <div className="lg:col-span-2 divide divide-y-8 divide-transparent mb-2 lg:mb-0">
                            <div className="flex">
                              <input
                                type="checkbox"
                                name="challenges"
                                value={"Family"}
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-1"
                                defaultChecked
                              />
                              <label
                                htmlFor="hs-checkbox-group-1"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Family
                              </label>
                            </div>

                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-2"
                                value={"Gender identity"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-2"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Gender identity
                              </label>
                            </div>

                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-3"
                                value={"Relationships"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-3"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Relationships
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-4"
                                value={"Social Anxiety"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-4"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Social Anxiety
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-5"
                                value={"Trauma/PTSD"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-5"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Trauma/PTSD
                              </label>
                            </div>
                          </div>
                          <div className="lg:col-span-2 divide divide-y-8 divide-transparent">
                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-6"
                                value={"Anger"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-6"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Anger
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-7"
                                value={"Depression"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-7"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Depression
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-8"
                                value={"Weight"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-8"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Weight
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-9"
                                value={"Anxiety"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-9"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Anxiety
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="challenges"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-10"
                                value={"Other"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-10"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    >
                      What areas of life you are hoping to improve?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                      style={{ height: "0px" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="grid lg:grid-cols-4 lg:gap-x-4 xl:gap-x-12  lg:items-center  justify-between ">
                          <div className="lg:col-span-2 divide divide-y-8 divide-transparent mb-2 lg:mb-0">
                            <div className="flex">
                              <input
                                type="checkbox"
                                name="areas"
                                value={"Eating habits"}
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-1"
                                defaultChecked
                              />
                              <label
                                htmlFor="hs-checkbox-group-1"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Eating habits
                              </label>
                            </div>

                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-2"
                                value={"Exercise"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-2"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Exercise
                              </label>
                            </div>

                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-3"
                                value={"Health"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-3"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Health
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-4"
                                value={"Home life"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-4"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Home life
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-5"
                                value={"Relationships"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-5"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Relationships
                              </label>
                            </div>
                          </div>
                          <div className="lg:col-span-2 divide divide-y-8 divide-transparent">
                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-6"
                                value={"Sleeping habis"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-6"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Sleeping habis
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-7"
                                value={"Work-life balance"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-7"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Work-life balance
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-8"
                                value={"Social life"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-8"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Social life
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-9"
                                value={"Work"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-9"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Work
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                name="areas"
                                type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                                id="hs-checkbox-group-10"
                                value={"Other"}
                              />
                              <label
                                htmlFor="hs-checkbox-group-10"
                                className="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                    >
                      Have you ever been in therapy or counseling befor?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                      style={{ height: "0px" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="flex gap-x-6 flex-wrap">
                          <div className="flex">
                            <input
                              type="radio"
                              name="prev_therapy"
                              value={"Yes"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-1"
                            />
                            <label
                              htmlFor="hs-radio-group-1"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="prev_therapy"
                              value={"No"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-2"
                            />
                            <label
                              htmlFor="hs-radio-group-2"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    >
                      Have you recently had any thoughts of self-harm or sucide?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        style={{ position: "s" }}
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                      style={{ height: "0px" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="flex gap-x-6 flex-wrap">
                          <div className="flex">
                            <input
                              type="radio"
                              name="self_harm"
                              value={"Yes"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-1"
                            />
                            <label
                              htmlFor="hs-radio-group-1"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="self_harm"
                              value={"No"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-2"
                            />
                            <label
                              htmlFor="hs-radio-group-2"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="true"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    >
                      Are you havig any chronic pail or illness?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                      style={{ height: "0px" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="flex gap-x-6 flex-wrap">
                          <div className="flex">
                            <input
                              type="radio"
                              name="illness"
                              value={"Yes"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-1"
                            />
                            <label
                              htmlFor="hs-radio-group-1"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="illness"
                              value={"No"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-2"
                            />
                            <label
                              htmlFor="hs-radio-group-2"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-hs-stepper-content-item='{
      "index": 2
    }'
                style={{ display: "none" }}
              >
                <div className="hs-accordion-group w-full divide divide-gray-200 dark:divide-neutral-700 border rounded-xl shadow-sm p-6 dark:bg-neutral-800 dark:border-neutral-700">
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border  rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent border-gray-200 "
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    >
                      Are you currently taking any medication?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                      style={{ height: "0px" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="flex gap-6 flex-wrap">
                          <div className="flex">
                            <input
                              type="radio"
                              name="any_medication"
                              value={"Yes"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-1"
                              onClick={() => setIsOne(true)}
                            />
                            <label
                              htmlFor="hs-radio-group-1"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="any_medication"
                              value={"No"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-2"
                              onClick={() => setIsOne(false)}
                            />
                            <label
                              htmlFor="hs-radio-group-2"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              No
                            </label>
                          </div>
                          <div className="overflow-hidden w-full">
                            <div
                              className={` flex-col  animate-[slideDown_1s_ease]  ${
                                isOneVisible ? "flex" : "hidden"
                              }`}
                            >
                              <label
                                htmlFor="textarea-label"
                                className="block text-sm font-medium text-[#4f9451] mb-2 dark:text-white"
                              >
                                Mention them:
                              </label>
                              <textarea
                                id="textarea-label"
                                className="resize-none py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-xs  text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                rows="3"
                                name="any_medication"
                                placeholder="Write here..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="true"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    >
                      Are you havig any chronic pail or illness?
                      <svg
                        className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                      style={{ height: "0px" }}
                    >
                      <div className="py-4 px-5 ">
                        <div className="flex gap-6 flex-wrap">
                          <div className="flex">
                            <input
                              type="radio"
                              name="illness"
                              value={"Yes"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-1"
                              onClick={() => setIsTwo(true)}
                            />
                            <label
                              htmlFor="hs-radio-group-1"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex">
                            <input
                              type="radio"
                              name="illness"
                              value={"No"}
                              className="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-2"
                              onClick={() => setIsTwo(false)}
                            />
                            <label
                              htmlFor="hs-radio-group-2"
                              className="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              No
                            </label>
                          </div>
                          <div className="overflow-hidden w-full">
                            <div
                              className={` flex-col  animate-[slideDown_1s_ease]  ${
                                isTwoVisible ? "flex" : "hidden"
                              }`}
                            >
                              <label
                                htmlFor="textarea-label"
                                className="block text-sm font-medium text-[#4f9451] mb-2 dark:text-white"
                              >
                                What do you feel?
                              </label>
                              <textarea
                                id="textarea-label"
                                className="resize-none py-3 px-4 block w-full border-2 border-gray-300 rounded-lg text-xs  text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                rows="3"
                                name="illness"
                                placeholder="Write here..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-hs-stepper-content-item='{
      "index": 3
    }'
                style={{ display: "none" }}
              >
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 className="text-gray-500 dark:text-neutral-500">
                    Third content
                  </h3>
                </div>
              </div>

              <div
                data-hs-stepper-content-item='{
      "isFinal": true
    }'
              >
                <div className="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 className="text-gray-500 dark:text-neutral-500">
                    Final content
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex justify-between items-center gap-x-2">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-stepper-back-btn=""
                >
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
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>

                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[#345735] focus:outline-none focus:bg-[#4f9451] disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-next-btn=""
                >
                  Next
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
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[#345735] focus:outline-none focus:bg-[#4f9451] disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-finish-btn=""
                  style={{ display: "none" }}
                >
                  Finish
                </button>
                <button
                  type="reset"
                  className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[#345735] focus:outline-none focus:bg-[#4f9451] disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-reset-btn=""
                  style={{ display: "none" }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    // <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
    //   <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
    //     <div className="mb-8">
    //       <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
    //         Register
    //       </h2>
    //     </div>

    //     <form
    //       id="uploadForm"
    //       onSubmit={handleSubmit}
    //       encType="multipart/form-data"
    //     >
    //       <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="af-account-full-name"
    //             className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
    //           >
    //             Full name:
    //           </label>
    //           <div className="hs-tooltip inline-block">
    //             <svg
    //               className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400 dark:text-neutral-600"
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               viewBox="0 0 16 16"
    //             >
    //               <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    //               <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    //             </svg>
    //           </div>
    //         </div>

    //         <div className="sm:col-span-9">
    //           <div className="sm:flex">
    //             <input
    //               id="af-account-full-name"
    //               type="text"
    //               className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //               placeholder="Mhd..."
    //               name="name"
    //               required
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="af-account-email"
    //             className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
    //           >
    //             Email:
    //           </label>
    //         </div>

    //         <div className="sm:col-span-9">
    //           <input
    //             id="af-account-email"
    //             type="email"
    //             className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //             placeholder="Exp@site.com"
    //             name="email"
    //             required
    //           />
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="af-account-password"
    //             className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
    //           >
    //             Password:
    //           </label>
    //         </div>

    //         <div className="sm:col-span-9">
    //           <div className="relative">
    //             <input
    //               id="af-account-password"
    //               type={isVisible ? "text" : "password"}
    //               className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //               placeholder="Enter password"
    //               name="password"
    //               required
    //             />
    //             <button
    //               className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 m-0 z-50"
    //               type="button"
    //               onClick={togglePass}
    //             >
    //               {isVisible ? (
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   strokeWidth={1.5}
    //                   stroke="currentColor"
    //                   className="w-5 h-5"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    //                   />
    //                 </svg>
    //               ) : (
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   strokeWidth={1.5}
    //                   stroke="currentColor"
    //                   className="w-5 h-5"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    //                   />
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //                   />
    //                 </svg>
    //               )}
    //             </button>
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <div className="inline-block">
    //             <label
    //               htmlFor="af-account-phone"
    //               className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
    //             >
    //               Phone:
    //             </label>
    //             <span className="text-sm text-gray-400 dark:text-neutral-600">
    //               (Optional)
    //             </span>
    //           </div>
    //         </div>

    //         <div className="sm:col-span-9">
    //           <div className="sm:flex">
    //             <input
    //               id="af-account-phone"
    //               type="text"
    //               className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg   sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //               placeholder="+x(xxx)xxx-xx-xx"
    //               name="phone"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="af-account-gender-checkbox"
    //             className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
    //           >
    //             Gender:
    //           </label>
    //         </div>

    //         <div className="sm:col-span-9">
    //           <div className="sm:flex">
    //             <label
    //               htmlFor="af-account-gender-checkbox"
    //               className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //             >
    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
    //                 id="af-account-gender-checkbox"
    //                 value={"Male"}
    //               />
    //               <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
    //                 Male
    //               </span>
    //             </label>

    //             <label
    //               htmlFor="af-account-gender-checkbox-other"
    //               className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    //             >
    //               <input
    //                 type="radio"
    //                 name="gender"
    //                 className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
    //                 id="af-account-gender-checkbox-other"
    //                 value={"female"}
    //               />
    //               <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
    //                 Female
    //               </span>
    //             </label>
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="favcolor"
    //             className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
    //           >
    //             How old Are You?
    //           </label>
    //         </div>
    //         <div className="sm:col-span-9">
    //           <div className="relative mb-6">
    //             <input
    //               type="range"
    //               className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px rounded-lg sm:mt-0 sm:first:ms-0   text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 "
    //               aria-orientation="horizontal"
    //               min="20"
    //               max="50"
    //               step="1"
    //               name="age"
    //             />
    //           </div>
    //         </div>
    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="af-account-bio"
    //             className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
    //           >
    //             Cv:
    //           </label>
    //         </div>
    //         <div className="sm:col-span-9">
    //           <label
    //             htmlFor="myfile"
    //             className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none  dark:border-neutral-700"
    //           >
    //             <input
    //               id="myfile"
    //               name="myfile"
    //               type="file"
    //               className="sr-only"
    //               accept="image/*"
    //             />
    //             <svg
    //               className="size-10 mx-auto text-gray-400 dark:text-neutral-600"
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="16"
    //               height="16"
    //               fill="currentColor"
    //               viewBox="0 0 16 16"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
    //               ></path>
    //               <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
    //             </svg>
    //             <span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200">
    //               Browse your device
    //             </span>
    //             <span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500">
    //               Maximum file size is 2 MB
    //             </span>
    //           </label>
    //         </div>
    //       </div>

    //       <div className="mt-5 flex justify-end gap-x-2">
    //         <button
    //           type="submit"
    //           className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};
export default Register;
