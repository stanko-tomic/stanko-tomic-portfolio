import React from "react";
import Link from "next/link";

const Projects: React.FC<any> = ({ projectData }) => {
  return (
    <section className="max-w-[1200px] mx-auto p-8">
      <h3 className="text-slate-400 font-light text-2xl uppercase mb-8">
        Favorite <span className="text-white font-semibold">Projects</span>
      </h3>

      <div className="flex flex-col gap-20 lg:gap-8">
        {projectData.map((project: any, index: number) => {
          const isEven = index % 2 === 0;
          return (
            <Link href={`/Project/${project.title}`} key={project.title}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="w-full aspect-square">
                  <img
                    src={project.mainImage}
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
                    {project.tags.map((tag: any) => (
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
