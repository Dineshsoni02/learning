import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return (
    <div>
      UserDetail
      <p>User ID: {id} </p>
    </div>
  );
};

export default UserDetail;
