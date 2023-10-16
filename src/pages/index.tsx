import { Work_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${workSans.className}`}>
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/about",
      name: "About",
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${navOpen ? "" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-inherit border-gray-700">
              {navItems.map((item) => (
                <li key={`${item.name}-${item.href}`}>
                  <a
                    href={item.href}
                    className="block uppercase py-2 pl-3 text-[1rem] pr-4 rounded md:border-0  md:p-0 text-white md:hover:text-purple-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full my-20 flex flex-row items-center justify-center">
      <div>
        <div className="mb-8">
          <h4 className="text-5xl font-light text-gray-500">
            Get <span className="font-semibold text-white">in Touch.</span>
          </h4>
          <p className="text-lg font-light text-center">
            You can contact me here...
          </p>
        </div>

        <div className="flex flex-row items-center w-full justify-center gap-2 mb-8">
          <a href="#">
            <AiFillGithub size={28} />
          </a>
          <a href="#">
            <AiFillLinkedin size={28} />
          </a>
          <a href="#">
            <AiFillMail size={28} />
          </a>
        </div>

        <div>
          <p className="text-center font-light">
            Made with ❣️ by{" "}
            <span className="font-semibold text-white">Stanko Tomic</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Hero = () => {
  return (
    <section className="h-[calc(100vh-100px)] relative min-h-[300px]">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl lg:text-[3.5rem] text-slate-400 lg:leading-[4.5rem] font-light text-center">
          I’m a <span className="font-semibold text-white">Web Developer</span>{" "}
          specializing in <br />
          Frontend and Backend Technologies
        </h1>

        <div className="absolute bottom-5">
          <IoIosArrowDown size={24} color={"white"} />
        </div>
      </div>
    </section>
  );
};

export const AboutMe = () => {
  return (
    <section className="mt-24 mb-24 ml-auto mr-auto">
      <div className="max-w-[1200px] p-8 gap-12 lg:gap-0 grid lg:grid-cols-2 grid-cols-1 mx-auto items-center">
        <div>
          <h2 className="uppercase text-white text-2xl font-semibold mb-4">
            A BIT ABOUT ME
          </h2>
          <p className="text-slate-400 font-light text-[2rem]">
            I am a Web Developer specializing in Frontend and Backend
            technologies such as{" "}
            <span className="font-semibold text-white">
              React, NextJS, NodeJS, Express.
            </span>
          </p>

          <div className="flex flex-row gap-8 items-center mt-4">
            <button className="rounded-full px-7 py-2 text-sm font-medium border border-gray-200 hover:border-gray-500 uppercase transition">
              Download CV
            </button>

            <div className="flex flex-row gap-4 items-center">
              <a href="#">
                <AiFillGithub size={28} />
              </a>
              <a href="#">
                <AiFillLinkedin size={28} />
              </a>
              <a href="#">
                <AiFillMail size={28} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <img
                className="min-h-[20rem] object-cover block max-h-[25rem] rounded-lg"
                src="https://placehold.co/500x400"
              />
            </div>
            <div>
              <div className="flex flex-col gap-4 items-center">
                <img
                  className="object-cover block min-h-[20rem] max-h-[25rem] rounded-lg"
                  src="https://placehold.co/500x400"
                />
                <img
                  className="min-h-[20rem] object-cover block max-h-[25rem] rounded-lg"
                  src="https://placehold.co/500x400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const mockProjectData = [
    {
      imageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Challenges/tybadwn9wwcc10hug3sn.jpg",
      type: "FRONTEND MENTOR CHALLANGE",
      title: "URL shortening API landing page",
      tags: ["API", "Web App", "Frontend Mentor"],
      projectUrl: "https://www.google.com/",
      featured: true,
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Challenges/qlsbtzneygd4bumwadam.jpg",
      type: "FRONTEND MENTOR CHALLANGE",
      title: "Job listings with filtering",
      tags: ["API", "Web App", "Frontend Mentor"],
      projectUrl: "https://www.google.com/",
      featured: true,
    },

    {
      imageUrl:
        "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/aweimf5tayvb5bdhkdhh.jpg",
      type: "FRONTEND MENTOR CHALLANGE",

      title: "Sunnyside agency landing page",
      tags: ["API", "Web App", "Frontend Mentor"],
      projectUrl: "https://www.google.com/",
      featured: true,
    },
  ];
  return (
    <section className="max-w-[1200px] mx-auto p-8">
      <h3 className="text-slate-400 font-light text-2xl uppercase mb-8">
        Favorite <span className="text-white font-semibold">Projects</span>
      </h3>

      <div className="flex flex-col gap-20 lg:gap-8">
        {mockProjectData.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={project.title}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="w-full aspect-square">
                  <img
                    src={project.imageUrl}
                    alt=""
                    className="object-cover w-full h-full rounded-lg object-top"
                  />
                </div>
                <div
                  className={`flex flex-col justify-end items-start ${
                    isEven ? "lg:order-1" : "lg:-order-1"
                  }`}
                >
                  <p className="uppercase text-[1rem] font-medium mb-11">
                    {project.type}
                  </p>

                  <h4 className="text-3xl text-slate-200">{project.title}</h4>

                  <div className="flex flex-row gap-4 mt-8">
                    {project.tags.map((tag) => (
                      <div
                        className="bg-[#99e6b429] text-[#99e6b4] px-1 font-semibold"
                        key={`${tag}-${project.title}`}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  <button className="rounded-full px-7 py-2 text-sm font-medium border border-gray-200 mt-8 hover:border-gray-500 uppercase transition ">
                    VIEW PROJECT
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
