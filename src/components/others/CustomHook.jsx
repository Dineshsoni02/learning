import React, { useState, useEffect } from "react";

export const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

const CustomHook = () => {
  const { data, loading } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        data?.slice(0, 5).map((post) => <p key={post.id}> {post.id} -  { post.title}</p>)
      )}
    </div>
  );
};

export default CustomHook;
