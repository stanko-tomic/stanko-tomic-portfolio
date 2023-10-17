import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Projects: React.FC<any> = ({ projects }) => {
  return (
    <Layout>
      <div className="max-w-[1400px]  mx-auto">
        <h3 className="text-slate-400 font-light text-2xl uppercase mb-8">
          All{" "}
          <span className="text-white font-semibold">
            Projects ( {projects.length} )
          </span>
        </h3>

        <div className="gap-4 p-2  grid lg:grid-cols-4 items-center md:grid-cols-2 grid-cols-1">
          {projects.map((project: any) => (
            <Link
              href={`/Project/${project.title}`}
              key={`${project.title}-${project.type}`}
              className="mx-auto"
            >
              <Image
                className="h-52 w-96 object-top object-cover rounded-lg"
                src={project.mainImage}
                width={384}
                height={208}
                alt=""
              />
              <h1 className="mt-4 font-semibold">{project.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/project/list");
    const projects: any[] = response.data.list;
    return {
      props: { projects },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { projects: [] }, // Handle errors gracefully
    };
  }
}
