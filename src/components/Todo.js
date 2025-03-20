import { useState } from "react";
import React from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [temp, setTemp] = useState("");

  function handleClick() {
    // e.preventDefault();
    setTodo([...todo, temp]);
    setTemp("");
  }

  function handleDelete(s) {
    setTodo((todos) => todos.filter((todo) => todo != s));
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
      <div>
        <ul>
        {todo?.map((item, index) => (
          <li>
            {item}
            <button onClick={(e) => handleDelete(item)}>Delete</button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}
