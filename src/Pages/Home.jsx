/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export const Home = () => {
  return (
    <div class="max-w-[86rem] mx-auto px-4">
      <div class="grid lg:grid-cols-8 lg:gap-x-4 xl:gap-x-12  lg:items-center">
        <div class="lg:col-span-3 flex flex-col ">
          <h1 class="block text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-center lg:text-left">
            Your Journey to Mental Clarity
          </h1>
          <h1 class="block text-3xl font-semibold text-[#4f9451] sm:text-4xl md:text-5xl lg:text-6xl  text-center lg:text-left">
            Starts Here
          </h1>
          {/* <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Introducing a new way for your brand to reach the creative
            community.
          </p> */}
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
        <div className="lg:col-span-1"></div>
        <div class="lg:col-span-4 mt-10 lg:mt-0">
          <img
            class="w-full rounded-3xl border-2 border-[#4f9451]"
            src="hero.webp"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};
