import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log("error", error);2
      }
    };

    getBlogs();
  }, []);

  return (
    <div>
      {blogs?.length > 0 ? (
        <>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <p>Title: {blog.title} </p>
              <Link to={`/blog/${blog.id}`}>Link to blog</Link>
            </div>
          ))}
        </>
      ) : (
        "No blogs"
      )}
    </div>
  );
};

export default Blogs;
