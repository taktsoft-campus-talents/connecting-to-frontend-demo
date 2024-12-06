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

const todos = [
  {
    id: 1,
    title: "Buy groceries",
  },
  {
    id: 2,
    title: "Clean the house",
  },
  {
    id: 3,
    title: "Prepare presentation",
  },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;

  if (!newTodo.title) {
    return res.status(400).json({ error: "Invalid request data" });
  }

  newTodo.id = todos.length + 1;
  todos.push(newTodo);

  res.status(200).json({ msg: "Todo added succesfully" });
});

app.listen(PORT, () => {
  console.log("api running on port " + PORT);
});
