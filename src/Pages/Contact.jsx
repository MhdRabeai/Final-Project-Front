import React from "react";

const Contact = () => {
  const handleFeedBack = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="relative z-10 overflow-hidden  dark:bg-dark min-g-screen">
        <div className="container mx-auto">
          <div className="max-w-[86rem] mx-auto px-4">
            <div class="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center  ">
              <div class="lg:col-span-4 flex  h-full">
                <div className="mb-12 max-w-[570px] lg:mb-0 flex flex-col justify-center">
                  <div class="w-full">
                    <span class="block  text-lg font-semibold text-[#4F9451]">
                      Contact Us
                    </span>
                    <h2 class="mb-3 text-xl font-semibold text-dark dark:text-white sm:text-[40px]/[48px]">
                      GET IN TOUCH WITH US
                    </h2>
                    <p class="mb-5 text-base text-gray-600 dark:text-gray-700">
                      We're here to help! Whether you have a question, need
                      assistance, or simply want to share your thoughts, we are
                      hear to listen to you. You can reach out to us via phone,
                      email, or by filling out our contact form. We strive to
                      respond to all inquiries promptly and efficiently.
                    </p>
                  </div>

                  <div className="mb-4 flex w-full max-w-[370px] items-center">
                    <div className=" flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                          fill="#4F9451"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Our Location
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        Damascus, Syria, Marjeh Square
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_941_17577)">
                          <path
                            d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                            fill="#4F9451"
                          />
                          <path
                            d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                            fill="#4F9451"
                          />
                          <path
                            d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                            fill="#4F9451"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_941_17577">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Phone Number
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        +963 932 144 432
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                          fill="#4F9451"
                        />
                      </svg>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6">
                        hopehorizon@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-3 mt-10 lg:mt-0 py-10">
                <div className="relative rounded-lg bg-white  shadow-lg dark:bg-gray-800 px-8 py-10">
                  <form onSubmit={handleFeedBack}>
                    <div className="relative mb-4">
                      <input
                        id="registerForm"
                        type="text"
                        className="peer py-2 px-4 ps-11 block w-full
                          border-2  border-gray-200 rounded-lg text-sm 
                          focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent 
                          dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter Name..."
                        name="name"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                        <svg
                          id="registerIcon"
                          className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                    </div>
                    <div class="relative mb-4">
                      <input
                        id="registerEmail"
                        type="email"
                        class="peer py-2 px-4 ps-11 block w-full
                            border-2  border-gray-200 rounded-lg text-sm 
                            focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent 
                            dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Enter Email..."
                        name="email"
                      />
                      <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          class="fill-gray-500"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className=" mb-6">
                      <textarea
                        class="resize-none py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-xs  text-gray-500 focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        rows="3"
                        name="feedback"
                        placeholder="Write Your Message..."
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-lg border border-primary bg-customGreen py-2 text-white transition hover:bg-opacity-90 text-base"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div>
                    <span className="absolute -right-7 -top-7 z-[-1]">
                      <svg
                        width={107}
                        height={134}
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="104.999"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 104.999 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 104.999 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 104.999 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 104.999 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 104.999 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 104.999 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 104.999 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 104.999 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 104.999 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 104.999 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 90.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 90.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 90.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 90.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 90.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 90.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 90.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 90.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 90.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 90.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 75.6654 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 75.6654 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 75.6654 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 75.6654 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 75.6654 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 75.6654 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 75.6654 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 75.6654 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 75.6654 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 75.6654 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 60.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 60.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 60.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 60.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 60.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 60.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 60.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 60.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 60.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 60.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 46.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 46.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 46.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 46.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 46.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 46.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 46.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 46.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 46.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 46.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                    <span className="absolute -bottom-7 -left-7 z-[-1]">
                      <svg
                        width={107}
                        height={134}
                        viewBox="0 0 107 134"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="104.999"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 104.999 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 104.999 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 104.999 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 104.999 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 104.999 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 104.999 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 104.999 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 104.999 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 104.999 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="104.999"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 104.999 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 90.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 90.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 90.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 90.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 90.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 90.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 90.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 90.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 90.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="90.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 90.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 75.6654 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 31.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 75.6654 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 31.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 75.6654 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 31.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 75.6654 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 31.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 75.6654 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 31.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 75.6654 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 31.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 75.6654 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 31.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 75.6654 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 31.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 75.6654 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 31.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="75.6654"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 75.6654 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="31.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 31.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 60.9993 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 17.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 60.9993 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 17.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 60.9993 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 17.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 60.9993 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 17.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 60.9993 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 17.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 60.9993 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 17.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 60.9993 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 17.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 60.9993 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 17.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 60.9993 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 17.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="60.9993"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 60.9993 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="17.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 17.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 46.3333 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={132}
                          r="1.66667"
                          transform="rotate(180 2.66536 132)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 46.3333 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="117.333"
                          r="1.66667"
                          transform="rotate(180 2.66536 117.333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 46.3333 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="102.667"
                          r="1.66667"
                          transform="rotate(180 2.66536 102.667)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 46.3333 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={88}
                          r="1.66667"
                          transform="rotate(180 2.66536 88)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 46.3333 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="73.3333"
                          r="1.66667"
                          transform="rotate(180 2.66536 73.3333)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 46.3333 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={45}
                          r="1.66667"
                          transform="rotate(180 2.66536 45)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 46.3333 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={16}
                          r="1.66667"
                          transform="rotate(180 2.66536 16)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 46.3333 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy={59}
                          r="1.66667"
                          transform="rotate(180 2.66536 59)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 46.3333 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="30.6666"
                          r="1.66667"
                          transform="rotate(180 2.66536 30.6666)"
                          fill="#13C296"
                        />
                        <circle
                          cx="46.3333"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 46.3333 1.66665)"
                          fill="#13C296"
                        />
                        <circle
                          cx="2.66536"
                          cy="1.66665"
                          r="1.66667"
                          transform="rotate(180 2.66536 1.66665)"
                          fill="#13C296"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
