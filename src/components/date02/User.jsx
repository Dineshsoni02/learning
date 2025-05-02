import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, Name: "Anjki" },
  { id: 2, Name: "Kakii" },
  { id: 3, Name: "K<LPOi" },
];

const User = () => {
  return (
    <div>
      <h2>Users list 📃</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              GoTo : {user.id} with name : {user.Name}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
