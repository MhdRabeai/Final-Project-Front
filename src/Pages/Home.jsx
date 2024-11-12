/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import cardsData from "../Components/cardsData";
import Card from "../Components/card";

export const Home = () => {
  return (
    <div class="max-w-[86rem] mx-auto px-4">
      <div class="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center pb-10">
        <div class="lg:col-span-3 flex flex-col ">
          <h1 class="block text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-center lg:text-left">
            Your Journey to Mental Clarity
          </h1>
          <h1 class="block text-3xl font-semibold text-[#4f9451] sm:text-4xl md:text-5xl lg:text-6xl  text-center lg:text-left">
            Starts Here
          </h1>

          <ul class="mt-5 marker:text-[#4f9451] list-disc ps-5 space-y-1 text-sm text-gray-600 dark:text-neutral-400">
            <li>Take control of your health</li>
            <li>Seek expert guidance</li>
            <li>Access preventive care</li>
            <li>Find solutions for long-standing health concerns</li>
            <li>Recieve Support with Doctor X</li>
          </ul>
          <div class="mt-5 lg:mt-8 flex ">
            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)] disabled:opacity-50 disabled:pointer-events-none"
            >
              Start therapy
            </button>
          </div>
        </div>

        <div class="lg:col-span-4 mt-10 lg:mt-0">
          <img class="w-full rounded-3xl " src="hero.png" alt="Hero Image" />
        </div>
      </div>
      <div class="grid lg:grid-cols-7 lg:gap-x-4 xl:gap-x-12  lg:items-center pb-10 justify-between">
        <div class="lg:col-span-2 flex  ">
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
              <div class="mt-5 lg:mt-8 flex ">
                <button
                  type="button"
                  class=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#4f9451] text-white hover:bg-[rgba(79,148,81,0.84)] focus:outline-none focus:bg-[rgba(79,148,81,0.84)] disabled:opacity-50 disabled:pointer-events-none"
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
    </div>
  );
};
