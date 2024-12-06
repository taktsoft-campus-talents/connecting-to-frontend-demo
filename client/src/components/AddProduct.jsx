import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST", // Specify HTTP method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Specify name"
        onChange={(e) => {
          setProduct((prev) => ({ ...prev, title: e.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Specify description"
        onChange={(e) => {
          setProduct((prev) => ({ ...prev, description: e.target.value }));
        }}
      />
      <input
        type="text"
        placeholder="Specify price"
        onChange={(e) => {
          setProduct((prev) => ({ ...prev, price: e.target.value }));
        }}
      />

      <button>Add product</button>
    </form>
  );
}

export default AddProduct;
