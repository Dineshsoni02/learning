import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./PostSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error} </p>;

  return (
    <div>
      <h2>Posts:</h2>
      <ul>
        {items?.slice(0, 20).map((item) => (
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
