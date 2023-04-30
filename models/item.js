import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    itenno: { type: String, required: true, unique: true },
    company: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const item =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
