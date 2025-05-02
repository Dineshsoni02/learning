import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  console.log(user);
  return (
    <div>
      UserDetail
      <p>User ID: {id} </p>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
          <p>City: {user.address.city}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default UserDetail;
