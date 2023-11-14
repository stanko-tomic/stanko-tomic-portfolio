import Layout from "@/components/Layout";
import PostForm from "@/components/PostForm";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import type { GetServerSideProps } from "next/types";

const Create = () => {
  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto p-4">
        <h1 className="font-bold text-3xl mb-8 text-white">
          Create a new project entry
        </h1>

        <div>
          <PostForm />
        </div>
      </div>
    </Layout>
  );
};

export default Create;

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
