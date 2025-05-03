import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const [blog, setBlog] = useState("");
  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getBlog();
  }, []);

  const { id } = useParams();
  return (
    <div>
      BlogPost : {blog.id}
      <p>Title: {blog.title}</p>
      <p>Content: {blog.body}</p>
    </div>
  );
};

export default BlogPost;
