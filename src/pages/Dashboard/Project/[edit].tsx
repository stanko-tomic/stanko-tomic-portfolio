import Layout from "@/components/Layout";
import axios from "axios";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { getServerSession } from "next-auth";
import type { GetServerSideProps } from "next/types";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import RichTextEditor from "@/components/RichtextEditor";

const EditProject = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  const [writeup, setWriteup] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState("");
  const editorRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const projectToEdit = router.query.edit;
      const res = await axios.get("/api/project/list?title=" + projectToEdit);

      const existingProject = res.data.list[0];

      try {
        setTitle(existingProject.title);
        setType(existingProject.type);
        setUrl(existingProject.url);
        setWriteup(existingProject.writeup);
        setMainImage(existingProject.mainImage);
        setFeatured(existingProject.featured);
        setTags(existingProject.tags.join(","));

        setProjectToEdit(existingProject._id);
      } catch (error) {}
    };

    fetchData();
  }, [router.query.edit]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    const data = {
      id: projectToEdit,
      title,
      type,
      url,
      tags: tagsArray,
      writeup,
      mainImage,
      featured,
    };

    axios
      .put("/api/project/edit", data)
      .then((response) => {
        // Handle the success response here
        router.push("/Dashboard");
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error sending data:", error);
      });
  };

  const handleEditorChange = (content: string) => {
    setWriteup(content);
  };

  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto p-4">
        <Link href={"/Dashboard"}>Go to dashboard</Link>

        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            {/*  */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className=" border   text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Project title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/*  */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                className=" border   text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Project type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            {/*  */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Live url
              </label>
              <input
                type="text"
                id="type"
                className=" border   text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Project url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            {/*  */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Tags
              </label>
              <input
                type="text"
                id="type"
                className=" border   text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Project tags seperate using comma ','"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            {/*  */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Main image
              </label>
              <input
                type="text"
                id="type"
                className=" border   text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Set a main project img"
                value={mainImage}
                onChange={(e) => setMainImage(e.target.value)}
              />
            </div>
            {/*  */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Featured
              </label>
              <input
                checked={featured}
                onChange={() => setFeatured((prev) => !prev)}
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            {/*  */}
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Writeup
              </label>
              <RichTextEditor
                wysiwyg={writeup}
                setWysiwyg={setWriteup}
                editorRef={editorRef}
                handleEditorChange={handleEditorChange}
              />
            </div>
          </div>
          <button className="mr-4 rounded-full px-7 py-2 text-sm font-medium border border-gray-200 hover:border-gray-500 uppercase transition">
            Update
          </button>
          <button className="rounded-full px-7 py-2 text-sm font-medium border border-red-600 text-red-600 hover:border-gray-500 uppercase transition">
            Delete
          </button>
        </form>
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
