import { useState } from "react";

function ReceiveProducts() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <section>
      <button onClick={fetchData}>Fetch products</button>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
        );
      })}
    </section>
  );
}

export default ReceiveProducts;
