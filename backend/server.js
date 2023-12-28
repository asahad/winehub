import path from "path";
import express from "express";
import cors from "cors"; // Import CORS
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;
connectDB();

const app = express();

// CORS configuration
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: "http://localhost:5173" })); // Replace with your frontend dev server address
}

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser
app.use(cookieParser());

// API routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// PayPal API route
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Static files serving for production
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  // Serve static files from frontend's dist directory
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // Serve index.html for all unmatched GET requests (for SPA routing)
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
}

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
