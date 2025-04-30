import React from "react";

const todos = [
  { id: 1, task: "Study React" },
  { id: 2, task: "Practice it" },
];

function ToDoItems({ task }) {
  return <li>{task}</li>;
}

const D2930 = () => {
  return (
    <div>
      <h2>List Example 29/30-04</h2>
      <ul>
        {todos.map((todo) => (
            <ToDoItems key={todo.id} task={todo.task} />
        ))}
      </ul>
    </div>
  );
};

export default D2930;
