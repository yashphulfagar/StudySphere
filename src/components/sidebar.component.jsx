import { useState } from "react";
import DataDemo1 from "./datademomain";
import NavBar from "./NavBar.component";

const Modules = [
  "Module 1",
  "Module 2",
  "Module 3",
  "Module 4",
  "Module 5",
  "Module 6",
  "Module 7",
];

const courseName = "BMAT205L Probability and Statistics";

const ModuleBar = () => {
  return (
    <>
      <NavBar courses="1" />

      <div className="sm:pt-20 pt-32">
        <div className="fixed top-20 left-0 right-0">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="bg-blue-50 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <aside
          id="logo-sidebar"
          class="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  href="/"
                  class="flex items-center font-bold text-2xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">{courseName}</span>
                </a>
              </li>
              <li>
                <a
                  href="/courses/BMAT205L/mod1"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">{Modules[0]}</span>
                </a>
              </li>
              <li>
                <a
                  href="/courses/BMAT205L/mod2"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    {Modules[1]}
                  </span>
                  {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    {Modules[2]}
                  </span>
                  {/* <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    {Modules[3]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    {Modules[4]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    {Modules[5]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    {Modules[6]}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div class="p-4 sm:ml-64">
          <div class="dark:bg-gray-900 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <DataDemo1></DataDemo1>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModuleBar;
