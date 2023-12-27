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
  // Allow requests from your frontend dev server address
  app.use(cors({ origin: "http://localhost:5173" }));
}

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie Parser
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

// API routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Static files serving for production
const __dirname = path.resolve();
console.log(__dirname);
// if (process.env.NODE_ENV === "production") {
//   app.use("/uploads", express.static("/var/data/uploads"));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.use("./uploads", express.static(path.join(__dirname, "/uploads")));
// }
app.use(
  "/fronted/public/images",
  express.static(path.join(__dirname, "/fronted/public/images"))
);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
