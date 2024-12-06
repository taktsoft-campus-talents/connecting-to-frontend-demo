import { useState } from "react";
import ReceiveTodos from "./components/ReceiveTodos";
import AddTodo from "./components/AddTodo";

import "./App.css";

function App() {
  return (
    <>
      <p>Receive Todos</p>
      <ReceiveTodos></ReceiveTodos>

      <p>Add new todo</p>
      <AddTodo></AddTodo>
    </>
  );
}

export default App;
