import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config;
const port = process.env.PORT || 5000;
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

  if (!product) {
    return res.status(404).json({
      message: "Product not found with this id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
