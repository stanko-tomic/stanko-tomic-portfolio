import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = ({ wysiwyg, editorRef, handleEditorChange }: any) => {
  return (
    <Editor
      apiKey="40b3031wcflf1cg7s1syje4fk7ki3i1bdviu9824a3el9c59"
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={wysiwyg}
      onEditorChange={handleEditorChange}
      init={{
        height: 500,
        menubar: false,
        skin: "oxide-dark",
        content_css: "dark",
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help | image",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};

export default RichTextEditor;
