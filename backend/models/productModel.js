import mongoose from "mongoose";
import reviewSchema from "./reviewModel.js";
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "A wine Must have "],
    },
    image: {
      type: String,
      required: [true, "A wine must have an image"],
    },
    brand: {
      type: String,
      required: [true, "A wine must have an brand"],
    },
    category: {
      type: String,
      required: [true, "A wine must have an brand"],
    },
    description: {
      type: String,
      required: [true, "A wine must have a description"],
    },
    price: {
      type: Number,
      required: [true, "A wine must price"],
    },
    images: {
      type: [String],
    },
    alcoholContent: {
      type: Number,
    },
    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, "A wine must have the number in stock"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
