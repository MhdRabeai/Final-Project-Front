import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { LuBrainCircuit } from "react-icons/lu";

export const Root = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen  bg-[#F6F6F6] flex flex-col justify-between font-sans">
      <Navbar />     
      <div className=" ">
      <button type="button"  class="sticky top-4 bg-[#4F9451] text-white px-4 py-2 rounded-full hover:bg-green-500 mt-20" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-example" data-hs-overlay="#hs-offcanvas-example">
      <LuBrainCircuit />
</button>

<div id="hs-offcanvas-example" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-example-label">
  <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
    <h3 id="hs-offcanvas-example-label" class="font-bold text-gray-800 dark:text-white">
      Ask me any thing ..
    </h3>
    <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-offcanvas-example">
      <span class="sr-only">Close</span>
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="p-4">
  {/* <!-- Chat Bubble --> */}
<ul class="space-y-5">
  {/* <!-- Chat --> */}
  <li class="max-w-lg flex gap-x-2 sm:gap-x-4">
    {/* <!-- Card --> */}
    <div class="bg-white border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
      <h2 class="font-medium text-gray-800 dark:text-white">
        How can we help?
      </h2>
      <div class="space-y-1.5">
        <p class="mb-1.5 text-sm text-gray-800 dark:text-white">
          You can ask questions like:
        </p>
        <ul class="list-disc list-outside space-y-1.5 ps-3.5">
          <li class="text-sm text-gray-800 dark:text-white">
            What's Preline UI?
          </li>

          <li class="text-sm text-gray-800 dark:text-white">
            How many Starter Pages & Examples are there?
          </li>

          <li class="text-sm text-gray-800 dark:text-white">
            Is there a PRO version?
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- End Card --> */}
  </li>
  {/* <!-- End Chat --> */}

  {/* <!-- Chat --> */}
  <li class="max-w-lg ms-auto flex justify-end gap-x-2 sm:gap-x-4">
    <div class="grow text-end space-y-3">
      {/* <!-- Card --> */}
      <div class="inline-block bg-blue-600 rounded-2xl p-4 shadow-sm">
        <p class="text-sm text-white">
          what's preline ui?
        </p>
      </div>
      {/* <!-- End Card --> */}
    </div>
  </li>
  {/* <!-- End Chat --> */}

  {/* <!-- Chat Bubble --> */}
  <li class="max-w-lg flex gap-x-2 sm:gap-x-4">
    {/* <!-- Card --> */}
    
  </li>
  {/* <!-- End Chat Bubble --> */}
</ul>
{/* <!-- End Chat Bubble --> */}
  </div>
  
<form>
    <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 mt-60">
        <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
            </svg>
            <span class="sr-only">Upload image</span>
        </button>
        <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
            </svg>
            <span class="sr-only">Add emoji</span>
        </button>
        <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder="Your message..."></textarea>
            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
            <span class="sr-only">Send message</span>
        </button>
    </div>
</form>

</div>
        <Outlet />      
      </div>
      <Footer />
    </div>
  );
};
