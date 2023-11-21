import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.get("/", (req, res) => {
  res.send("API is Running.................");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product._id === id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
