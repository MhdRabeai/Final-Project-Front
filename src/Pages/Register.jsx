import React from "react";

const Register = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-[60rem] mx-auto px-4 flex-none my-8">
        {/* <div className="flex mb-2">
        <div className="flex-1">
          <input
            type="password"
            id="hs-strong-password-with-indicator-and-hint"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Enter password"
          />
          <div
            id="hs-strong-password"
            data-hs-strong-password='{
              "target": "#hs-strong-password-with-indicator-and-hint",
              "hints": "#hs-strong-password-hints",
              "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
            }'
            className="flex mt-2 -mx-1"
          ></div>
        </div>
      </div>

      <div id="hs-strong-password-hints" className="mb-3">
        <div>
          <span className="text-sm text-gray-800 dark:text-gray-200">
            Level:
          </span>
          <span
            data-hs-strong-password-hints-weakness-text='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
            className="text-sm font-semibold text-gray-800 dark:text-gray-200"
          ></span>
        </div>

        <h4 className="my-2 text-sm font-semibold text-gray-800 dark:text-white">
          Your password must contain:
        </h4>

        <ul className="space-y-1 text-sm text-gray-500">
          <li
            data-hs-strong-password-hints-rule-text="min-length"
            className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
          >
            <span className="hidden" data-check>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span data-uncheck>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
            Minimum number of characters is 6.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="lowercase"
            className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
          >
            <span className="hidden" data-check>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span data-uncheck>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
            Should contain lowercase.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="uppercase"
            className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
          >
            <span className="hidden" data-check>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span data-uncheck>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
            Should contain uppercase.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="numbers"
            className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
          >
            <span className="hidden" data-check>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span data-uncheck>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
            Should contain numbers.
          </li>
          <li
            data-hs-strong-password-hints-rule-text="special-characters"
            className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
          >
            <span className="hidden" data-check>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span data-uncheck>
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
            Should contain special characters.
          </li>
        </ul>
      </div> */}
        <form action="">
          <div data-hs-stepper="">
            <ul class="relative flex flex-row gap-x-2">
              <li
                class="flex items-center gap-x-2 shrink basis-0 flex-1 group active"
                data-hs-stepper-nav-item='{
      "index": 1,
      "isOptional": true
    }'
              >
                <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-[#4f9451] hs-stepper-active:text-white hs-stepper-success:bg-[#4f9451] hs-stepper-success:text-white hs-stepper-completed:bg-[#355a36] hs-stepper-completed:group-focus:bg-[#4f7750] dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      1
                    </span>
                    <svg
                      class="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400">
                    Step
                  </span>
                </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-[#4f9451] hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500"></div>
              </li>

              <li
                class="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
      "index": 2,
      "isOptional": true
    }'
              >
                <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-[#4f9451] hs-stepper-active:text-white hs-stepper-success:bg-[#4f9451] hs-stepper-success:text-white hs-stepper-completed:bg-[#355a36] hs-stepper-completed:group-focus:bg-[#4f7750] dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      2
                    </span>
                    <svg
                      class="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400">
                    Step
                  </span>
                </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-[#4f9451] hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500"></div>
              </li>

              <li
                class="flex items-center gap-x-2 shrink basis-0 flex-1 group"
                data-hs-stepper-nav-item='{
      "index": 3
    }'
              >
                <span class="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                  <span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 hs-stepper-active:bg-[#4f9451] hs-stepper-active:text-white hs-stepper-success:bg-[#4f9451] hs-stepper-success:text-white hs-stepper-completed:bg-[#355a36] hs-stepper-completed:group-focus:bg-[#4f7750] dark:bg-neutral-700 dark:text-white dark:group-focus:bg-gray-600 dark:hs-stepper-active:bg-blue-500 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500 dark:hs-stepper-completed:group-focus:bg-teal-600">
                    <span class="hs-stepper-success:hidden hs-stepper-completed:hidden">
                      3
                    </span>
                    <svg
                      class="hidden shrink-0 size-3 hs-stepper-success:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400">
                    Step
                  </span>
                </span>
                <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden hs-stepper-success:bg-[#4f9451] hs-stepper-completed:bg-teal-600 dark:bg-neutral-700 dark:hs-stepper-success:bg-blue-500 dark:hs-stepper-completed:bg-teal-500"></div>
              </li>
            </ul>

            <div class="mt-5 sm:mt-8">
              <div
                data-hs-stepper-content-item='{
      "index": 1
    }'
                style={{ display: "none" }}
              >
                <div class="hs-accordion-group w-full divide divide-gray-200 dark:divide-neutral-700 border rounded-xl shadow-sm p-6 dark:bg-neutral-800 dark:border-neutral-700">
                  <div
                    class="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border  rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent border-gray-200 active"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      type="button"
                      class="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    >
                      Q1
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      // class="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                      style={{ display: "block" }}
                    >
                      <div class="py-4 px-5 ">
                        <div class="flex gap-x-6">
                          <div class="flex">
                            <input
                              type="radio"
                              name="hs-radio-group"
                              class="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-1"
                              checked
                            />
                            <label
                              for="hs-radio-group-1"
                              class="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              Yse
                            </label>
                          </div>

                          <div class="flex">
                            <input
                              type="radio"
                              name="hs-radio-group"
                              class="shrink-0 mt-0.5 ring-0 border-gray-200 rounded-full focus:ring-offset-[#4f9451]  text-[#4f9451]  focus:bg-[#4f9451] checked:bg-[#4f9451]   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 focus:ring-0"
                              id="hs-radio-group-2"
                            />
                            <label
                              for="hs-radio-group-2"
                              class="text-sm text-gray-500 ms-2 dark:text-neutral-400"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      type="button"
                      class="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    >
                      Q2
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                      style={{ height: "0px" }}
                    >
                      <div class="py-4 px-5 ">
                        <div class="flex gap-x-6">
                          <div class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                              id="hs-checkbox-group-1"
                              checked
                            />
                            <label
                              for="hs-checkbox-group-1"
                              class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                            >
                              A
                            </label>
                          </div>

                          <div class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                              id="hs-checkbox-group-2"
                            />
                            <label
                              for="hs-checkbox-group-2"
                              class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                            >
                              B
                            </label>
                          </div>

                          <div class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-[#4f9451] dark:checked:border-[#4f9451] dark:focus:ring-offset-gray-800"
                              id="hs-checkbox-group-3"
                            />
                            <label
                              for="hs-checkbox-group-3"
                              class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
                            >
                              C
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      type="button"
                      class="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    >
                      How does Preline's pricing work?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                      style={{ height: "0px" }}
                    >
                      <p class="pb-4 px-5 text-gray-800 dark:text-neutral-200">
                        Our subscriptions are tiered. Understanding the task at
                        hand and ironing out the wrinkles is key.
                      </p>
                    </div>
                  </div>
                  <div
                    class="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      type="button"
                      class="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                    >
                      How secure is Preline?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                      style={{ height: "0px" }}
                    >
                      <p class="pb-4 px-5 text-gray-800 dark:text-neutral-200">
                        Protecting the data you trust to Preline is our first
                        priority. This part is really crucial in keeping the
                        project in line to completion.
                      </p>
                    </div>
                  </div>
                  <div
                    class="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      type="button"
                      class="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    >
                      How do I get access to a theme I purchased?
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                      style={{ height: "0px" }}
                    >
                      <p class="pb-4 px-5 text-gray-800 dark:text-neutral-200">
                        If you lose the link for a theme you purchased, don't
                        panic! We've got you covered. You can login to your
                        account, tap your avatar in the upper right corner, and
                        tap Purchases. If you didn't create a login or can't
                        remember the information, you can use our handy
                        Redownload page, just remember to use the same email you
                        originally made your purchases with.
                      </p>
                    </div>
                  </div>
                  <div
                    class="mb-2 hs-accordion hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      type="button"
                      class="hs-accordion-toggle hs-accordion-active:text-[#4f9451] inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                      aria-expanded="true"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    >
                      Upgrade License Type
                      <svg
                        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                      style={{ height: "0px" }}
                    >
                      <p class="pb-4 px-5 text-gray-800 dark:text-neutral-200">
                        There may be times when you need to upgrade your license
                        from the original type you purchased and we have a
                        solution that ensures you can apply your original
                        purchase cost to the new license purchase.
                      </p>
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
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 class="text-gray-500 dark:text-neutral-500">
                    Second content
                  </h3>
                </div>
              </div>

              <div
                data-hs-stepper-content-item='{
      "index": 3
    }'
                style={{ display: "none" }}
              >
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 class="text-gray-500 dark:text-neutral-500">
                    Third content
                  </h3>
                </div>
              </div>

              <div
                data-hs-stepper-content-item='{
      "isFinal": true
    }'
              >
                <div class="p-4 h-48 bg-gray-50 flex justify-center items-center border border-dashed border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                  <h3 class="text-gray-500 dark:text-neutral-500">
                    Final content
                  </h3>
                </div>
              </div>

              <div class="mt-5 flex justify-between items-center gap-x-2">
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  data-hs-stepper-back-btn=""
                >
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Back
                </button>

                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[#345735] focus:outline-none focus:bg-[#4f9451] disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-next-btn=""
                >
                  Next
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[#345735] focus:outline-none focus:bg-[#4f9451] disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-stepper-finish-btn=""
                  style={{ display: "none" }}
                >
                  Finish
                </button>
                <button
                  type="reset"
                  class="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[#345735] focus:outline-none focus:bg-[#4f9451] disabled:opacity-50 disabled:pointer-events-none"
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
  );
};
export default Register;
