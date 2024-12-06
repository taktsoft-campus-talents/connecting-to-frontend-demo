import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my server!" });
});

let products = [
  {
    id: 1,
    title: "MacBook Pro",
    description:
      "High-performance laptop with M2 chip, 16GB RAM, and 512GB SSD.",
    price: 1999.99,
  },
  {
    id: 2,
    title: "iPhone 15",
    description:
      "Latest smartphone with A16 Bionic chip and Dynamic Island display.",
    price: 999.99,
  },
  {
    id: 3,
    title: "Apple Watch Series 9",
    description:
      "Advanced smartwatch with health tracking and Always-On display.",
    price: 399.99,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = req.body;

  if (!newProduct.title || !newProduct.description || !newProduct.price) {
    return res.status(400).json({ error: "Invalid product data" });
  }

  newProduct.id = products.length + 1; // Assign a new ID
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log("api running on port " + PORT);
});
