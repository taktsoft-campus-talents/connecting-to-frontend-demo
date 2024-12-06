import { useState } from "react";

function ReceiveProducts() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <section>
      <button onClick={fetchData}>Fetch todos</button>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
          </div>
        );
      })}
    </section>
  );
}

export default ReceiveProducts;
