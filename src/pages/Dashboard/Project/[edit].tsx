import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import type { GetServerSideProps } from "next/types";

const EditProject = () => {
  const router = useRouter();
  const [projectToEditTitle, setProjectToEditTitle] = useState("");

  useEffect(() => {
    if (router.query.edit) {
      if (typeof router.query.edit === "string") {
        setProjectToEditTitle(router.query.edit);
      }
    }
  }, [router.query.edit]);

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto p-4">
        <Link href={"/Dashboard"}>Go to dashboard</Link>

        <PostForm projectToEditTitle={projectToEditTitle} />
      </div>
    </Layout>
  );
};

export default EditProject;

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

  return {
    props: {},
  };
};
