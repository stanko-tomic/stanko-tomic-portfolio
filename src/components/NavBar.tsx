import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/Projects",
      name: "Projects",
    },
    {
      href: "/About",
      name: "About Me",
      special: true,
    },
  ];

  return (
    <nav className="relative mb-24">
      <div className="border-gray-200 fixed z-50 top-0 right-0 left-0 border-b border-b-[#ffffff13]  bg-[#040106]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          <a className="flex items-center">
            <span className="self-center text-3xl whitespace-nowrap specialText uppercase font-bold">
              Stanko Tomić
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setNavOpen((prev: boolean) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${navOpen ? "" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:items-center bg-gray-800 md:bg-inherit border-gray-700">
              {navItems.map((item) => (
                <li key={`${item.name}-${item.href}`}>
                  <Link
                    href={item.href}
                    className={`${
                      item.special && "specialText font-bold"
                    } block uppercase py-2 pl-3 text-[1rem] pr-4 rounded md:border-0 md:p-0 text-white `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
