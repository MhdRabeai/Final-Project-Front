/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import cardsData from "../Components/cardsData";
import Card from "../Components/card";
import BodySlide from "../Components/BodySlide";
import Testimonial from "../Components/Testimonial";

export const Home = () => {
  return (
    <div className="">
      <div className="max-w-[86rem] mx-auto px-4">
        <div className="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center pb-10">
          <div className="lg:col-span-3 flex flex-col ">
            <h1 className="block text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-center lg:text-left">
              Your Journey to Mental Clarity
            </h1>
            <h1 className="block text-3xl font-semibold text-[#4f9451] sm:text-4xl md:text-5xl lg:text-6xl  text-center lg:text-left">
              Starts Here
            </h1>

            <ul className="mt-5 marker:text-[#4f9451] list-disc ps-5 space-y-1 text-sm text-gray-600 dark:text-neutral-400">
              <li>Take control of your health</li>
              <li>Seek expert guidance</li>
              <li>Access preventive care</li>
              <li>Find solutions for long-standing health concerns</li>
              <li>Recieve Support with Doctor X</li>
            </ul>
            <div className="mt-5 lg:mt-8 flex ">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)] disabled:opacity-50 disabled:pointer-events-none"
              >
                Start therapy
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-3xl "
              src="hero.png"
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center pb-10 justify-between">
          <div className="lg:col-span-2 flex  ">
            <div>
              <div className="w-full">
                <span className="block mb-1 text-lg font-semibold text-[#4F9451]">
                  Our Features
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Why choose Us
                </h2>
                <p className="mb-5 text-md text-gray-600 dark:text-gray-700">
                  In our time together, we aim to create a safe and supportive
                  environment where you can explore your thoughts, feelings, and
                  experiences. Together, we’ll work towards not only addressing
                  your immediate concerns but also empowering you to thrive in
                  every aspect of your life.
                </p>
                <div className="mt-5 lg:mt-8 flex ">
                  <button
                    type="button"
                    className=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:block hidden "></div>
          <div className="md:block hidden "></div>
          <div class="lg:col-span-3 mt-10 lg:mt-0">
            <div className="flex justify-between  gap-y-6  flex-wrap homeFeatures">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  headline={card.headline}
                  content={
                    "Access to licensed mental health professionals who provide personalized care and support."
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="homeTeam">
          <div class="flex flex-wrap">
            <div class="w-full px-4">
              <div class="mx-auto  max-w-[510px] text-center">
                <span class="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
                  Our Team
                </span>
                <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Awesome Team
                </h2>
                <p class="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div
            data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "isInfiniteLoop":true,
  "slidesQty": {
    "xs": 1,
    "md": 2,
    "lg": 3
  }
}'
            className="relative pt-6"
          >
            <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
              <div className="relative min-h-[450px] -mx-1">
                <div className="hs-carousel-body  absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                  <BodySlide />
                  <BodySlide />
                  <BodySlide />
                  <BodySlide />
                  <BodySlide />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-start items-center w-[25px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f9451"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-end items-center w-[25px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f9451"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>

            <div className="hs-carousel-pagination flex justify-center absolute bottom-[-25px] start-0 end-0 space-x-2"></div>
          </div>
        </div>
        <div className="pt-20">
          <div class="flex flex-wrap">
            <div class="w-full px-4">
              <div class="mx-auto  max-w-[510px] text-center">
                <span class="mb-2 block text-lg font-semibold text-primary text-[#4F9451]">
                  Our Testimonial
                </span>
                <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  What Our Patients Are Saying
                </h2>
                <p class="text-base text-body-color dark:text-dark-6">
                  Discover how Hope horizon has made a difference in the lives
                  of patients through personalized care and compassionate
                  service.
                </p>
              </div>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>
      <div>
        <img src="Facts.png" alt="img" />
      </div>
    </div>
  );
};
