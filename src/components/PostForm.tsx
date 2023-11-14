import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import RichTextEditor from "./RichtextEditor";
import axios from "axios";

interface PProps {
  projectToEditTitle?: string;
}

const PostForm: React.FC<PProps> = ({ projectToEditTitle }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  const [writeup, setWriteup] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [projectToEditId, setProjectToEditId] = useState("");

  // const [image, setImage] = useState(null);
  // const [createObjectURL, setCreateObjectURL] = useState(null);

  const editorRef = useRef(null);
  const router = useRouter();

  const handleEditorChange = (content: string) => {
    setWriteup(content);
  };

  useEffect(() => {
    if (projectToEditTitle) {
      const fetchExistingProject = async () => {
        const res = await axios.get(
          "/api/project/list?title=" + projectToEditTitle
        );

        const existingProject = res.data.list[0];

        try {
          setTitle(existingProject.title);
          setType(existingProject.type);
          setUrl(existingProject.url);
          setWriteup(existingProject.writeup);
          setMainImage(existingProject.mainImage);
          setFeatured(existingProject.featured);
          setTags(existingProject.tags.join(","));

          setProjectToEditId(existingProject._id);
        } catch (error) {}
      };

      fetchExistingProject();
    }
  }, [projectToEditTitle]);

  // const uploadToClient = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const i = event.target.files[0];

  //     setImage(i);
  //     setCreateObjectURL(URL.createObjectURL(i));
  //   }
  // };

  const handlePostDelete = () => {};

  const handleFormSubmit = () => {
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    // Now, tagsArray contains the tags as an array of strings
    if (projectToEditTitle) {
      const data = {
        id: projectToEditId,
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
    } else {
      const data = {
        title,
        type,
        url,
        tags: tagsArray,
        writeup,
        mainImage,
        featured,
      };

      axios
        .post("/api/project/create", data)
        .then((response) => {
          // Handle the success response here
          router.push("/Dashboard");
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Error sending data:", error);
        });
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
          {/* <input
            className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            onChange={uploadToClient}
          /> */}
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
      <button
        onClick={handleFormSubmit}
        className="rounded-full px-7 py-2 text-sm font-medium border border-gray-200 hover:border-gray-500 uppercase transition"
      >
        Submit
      </button>
      {projectToEditId && (
        <button
          onClick={handlePostDelete}
          className="ml-4 rounded-full px-7 py-2 text-sm font-medium border border-red-600 hover:border-red-400 uppercase transition"
        >
          Delete
        </button>
      )}
    </form>
  );
};

export default PostForm;
