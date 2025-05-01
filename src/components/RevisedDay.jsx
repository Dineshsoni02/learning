import React, { useEffect, useState, useMemo } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count : {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}

function UserCard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Users loading....</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>
                Name : {user.name} <br />
                email: {user.email}
              </span>
              <br />
              <span>website:{user.website}</span>
              <br />
              <span>city:{user.address.city}</span>
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const RevisedDay = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter />
      <UserCard />
    </div>
  );
};

export default RevisedDay;
