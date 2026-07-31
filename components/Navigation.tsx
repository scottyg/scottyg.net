"use client";

import { useState } from "react";
import Link from "next/link";

import NavigationLinks from "./NavigationLinks";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="border-gray-200 my-4">
        <div className="w-full mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center group dark:text-white">
              <span className="self-center text-2xl font-light whitespace-nowrap group-hover:underline">
                Scotty G
              </span>
            </Link>
            <div className="flex md:hidden md:order-2">
              <button
                type="button"
                onClick={() => setOpen((isOpen) => !isOpen)}
                className="md:hidden text-black hover:text-gray-900 dark:text-white dark:hover:text-white rounded-lg inline-flex items-center justify-center"
                aria-controls="mobile-menu"
                aria-expanded={open}
              >
                <span className="sr-only">
                  {open ? "Close main menu" : "Open main menu"}
                </span>
                <svg
                  className={`${open ? "hidden" : ""} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={`${open ? "" : "hidden"} w-6 h-6`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                open ? "flex" : "hidden"
              } md:flex justify-between items-end w-full md:w-auto md:order-1`}
              id="mobile-menu"
            >
              <NavigationLinks />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
