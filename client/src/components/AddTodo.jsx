import { useState } from "react";

function AddTodo() {
  const [todo, setTodo] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST", // Specify HTTP method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Specify title"
        onChange={(e) => {
          setTodo((prev) => ({ ...prev, title: e.target.value }));
        }}
      />

      <button>Add Todo</button>
    </form>
  );
}

export default AddTodo;
