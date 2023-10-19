import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";
import parse from "html-react-parser";

import { BiLinkExternal } from "react-icons/bi";

const ProjectDetail = ({ project }: any) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <Layout>
        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 max-w-[1600px] p-4 mx-auto">
          <figure className="max-w-lg flex mx-auto flex-col">
            <img
              className="object-cover object-top max-h-[45.125rem] rounded-lg object-cover"
              src={project.mainImage}
              alt="image description"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
              {project.title}
            </figcaption>
          </figure>

          <div>
            <h1 className="text-white text-3xl font-semibold">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-4 mt-4">
              {project.tags.map((tag: any) => (
                <div
                  className="bg-[#99e6b429] text-[#99e6b4] px-1 font-semibold"
                  key={`${tag}-${project.title}`}
                >
                  {tag}
                </div>
              ))}
            </div>

            <a
              href={project.url}
              className="flex items-center flex-row gap-2 cursor-pointer w-max rounded-full px-7 py-2 text-sm font-medium border border-gray-200 mt-6 hover:border-gray-500 uppercase transition "
            >
              LIVE URL
              <BiLinkExternal />
            </a>
            <div className="mt-8">{parse(project.writeup)}</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProjectDetail;

export async function getServerSideProps(ctx: any) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_URL +
        `/api/project/list?title=${ctx.query.slug}` ||
        `http://localhost:3000/api/project/list?title=${ctx.query.slug}`
    );
    const project: any[] = response.data.list[0];

    return {
      props: { project },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { projects: [] }, // Handle errors gracefully
    };
  }
}
