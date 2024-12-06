import { useState } from "react";
import ReceiveProducts from "./components/ReceiveProducts";
import AddProduct from "./components/AddProduct";

import "./App.css";

function App() {
  return (
    <>
      <p>Receive Products</p>
      <ReceiveProducts></ReceiveProducts>

      <p>Add new product</p>
      <AddProduct></AddProduct>
    </>
  );
}

export default App;
