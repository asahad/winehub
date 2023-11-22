import express from "express";
import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js"
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
connectDB();
const app=express();
app.use('/api/products',productRoutes)
app.use('/api/products/:id',productRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));
