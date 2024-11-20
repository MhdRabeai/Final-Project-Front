import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    //     <footer class=" w-full py-4 px-4 sm:px-6 lg:px-8 mx-auto   bg-[#4f9451]  mt-10 rounded-t-3xl">
    //       <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10  max-w-[85rem] mx-auto">
    //         <div class="col-span-full hidden lg:col-span-1 lg:block">
    //           <Link
    //             class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
    //             to="/"
    //             aria-label="Brand"
    //           >
    //             <img src="logo.png" alt="logo" width={200} />
    //           </Link>
    //           <p class="ml-5 mt-2 text-xs text-gray-200 dark:text-neutral-400">
    //             © 2024 B4F.
    //           </p>
    //         </div>

    //         <div></div>
    //         <div></div>

    //         <div>
    //           <h4 class="text-md font-medium text-white uppercase dark:text-neutral-100">
    //             Sections
    //           </h4>

    //           <div class="mt-3 grid space-y-2 text-sm">
    //             <Link
    //               class="inline-flex gap-x-2 text-gray-300 text-sm hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //               to="/"
    //             >
    //               Home
    //             </Link>
    //             <Link
    //               class="inline-flex gap-x-2 text-gray-300 text-sm hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //               to="/about"
    //             >
    //               About
    //             </Link>
    //             <Link
    //               class="inline-flex gap-x-2 text-gray-300 text-sm hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //               to="/team"
    //             >
    //               Team
    //             </Link>
    //             <Link
    //               class="inline-flex gap-x-2 text-gray-300 text-sm hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //               to="/blogs"
    //             >
    //               Blogs
    //             </Link>
    //             <Link
    //               class="inline-flex gap-x-2 text-gray-300 text-sm hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //               to="/contact"
    //             >
    //               Contact
    //             </Link>
    //           </div>
    //         </div>

    //         <div>
    //           <h4 class="text-md font-medium text-white uppercase dark:text-neutral-100">
    //             Contact Us:
    //           </h4>

    //           <div class="mt-3 grid space-y-2 text-sm">
    //             <p class="inline-flex gap-x-2 text-gray-300 text-sm hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 items-center">
    //               Phone: <span className="text-xs">+963 932 144 432</span>
    //             </p>
    //             <p class="inline-flex gap-x-2 text-gray-300 text-sm hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200 items-center">
    //               Email: <span className="text-xs">hopehorizon@gmail.com</span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
    //         <div class="sm:flex sm:justify-between sm:items-center">
    //           <div class="flex flex-wrap items-center gap-3">
    //             <div class="space-x-4 text-sm">
    //               <Link
    //                 class="inline-flex gap-x-2 text-gray-300
    // hover:text-gray-200 focus:outline-none focus:text-gray-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //                 to={"/"}
    //               >
    //                 Terms
    //               </Link>
    //               <Link
    //                 class="inline-flex gap-x-2 text-gray-300
    // hover:text-gray-200 focus:outline-none focus:text-gray-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //                 to={"/"}
    //               >
    //                 Privacy
    //               </Link>
    //               <Link
    //                 class="inline-flex gap-x-2 text-gray-300
    // hover:text-gray-200 focus:outline-none focus:text-gray-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //                 to={"/"}
    //               >
    //                 Status
    //               </Link>
    //             </div>
    //           </div>

    //           <div class="flex flex-wrap justify-between items-center gap-3">
    //             <div class="mt-3 sm:hidden">
    //               <Link
    //                 class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
    //                 to="/"
    //                 aria-label="Brand"
    //               >
    //                 <img src="logo.png" alt="logo" width={150} />
    //               </Link>
    //               <p class="ml-5 mt-2 text-xs text-gray-200 dark:text-neutral-400">
    //                 © 2024 B4F.
    //               </p>
    //             </div>

    //             <div class="space-x-4">
    //               <Link
    //                 class="inline-block text-gray-300 hover:text-gray-200 focus:outline-none focus:text-gray-100 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //                 to={"/"}
    //               >
    //                 <svg
    //                   class="shrink-0 size-4"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
    //                 </svg>
    //               </Link>
    //               <Link
    //                 class="inline-block text-gray-300 hover:text-gray-200 focus:outline-none focus:text-gray-100 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //                 to={"/"}
    //               >
    //                 <svg
    //                   class="shrink-0 size-4"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    //                 </svg>
    //               </Link>
    //               <Link
    //                 class="inline-block text-gray-300 hover:text-gray-200 focus:outline-none focus:text-gray-100 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
    //                 to={"/"}
    //               >
    //                 <svg
    //                   class="shrink-0 size-4"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   width="16"
    //                   height="16"
    //                   fill="currentColor"
    //                   viewBox="0 0 16 16"
    //                 >
    //                   <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
    //                 </svg>
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </footer>

    <footer className=" relative overflow-hidden bg-[#4f9451] mt-10 rounded-t-3xl">
      <svg
        className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2"
        width="2745"
        height="488"
        viewBox="0 0 2745 488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
        <path
          d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136"
          className="stroke-neutral-700/50"
          stroke="currentColor"
        />
      </svg>

      <div className="relative z-10">
        <div className="w-full max-w-5xl px-4 xl:px-0 py-2 lg:pt-6 mx-auto flex justify-center">
          <div className="inline-flex items-center border-x px-5 mx-5">
            <Link to={"/"}>
              <img src="/logo.png" alt="logo" width={135} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
