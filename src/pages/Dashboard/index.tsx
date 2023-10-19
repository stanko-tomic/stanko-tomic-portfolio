import Layout from "@/components/Layout";
import axios from "axios";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import type { GetServerSideProps } from "next/types";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Dashboard: React.FC<any> = ({ projects }) => {
  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto">
        <div>
          <Link href={"/Dashboard/Project/Create"}>Create a post</Link>
        </div>

        <h1 className="text-3xl font-bold mt-12">Edit posts</h1>
        <div className=" gap-4 p-2  grid lg:grid-cols-4 items-center md:grid-cols-2 grid-cols-1">
          {projects.map((project: any) => (
            <Link
              href={`/Dashboard/Project/${project.title}`}
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

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: any = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session || !session.user || !session.user.email) {
    // If there's no active session, redirect to the login page
    return {
      redirect: {
        destination: "/", // Replace with your login page URL
        permanent: false, // Set to true if this is a permanent redirect
      },
    };
  }

  const response = await axios.get(
    process.env.NEXT_PUBLIC_URL + "/api/project/list" ||
      "http://localhost:3000/api/project/list"
  );
  const projects: any[] = response.data.list;

  return {
    props: { projects },
  };
};
