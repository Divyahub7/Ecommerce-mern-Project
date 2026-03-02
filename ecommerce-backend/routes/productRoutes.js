import express from "express";
import {
  getProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Get products by category
router.get("/category/:category", getProductsByCategory);

// Get single product
router.get("/:id", getProductById);

// ADMIN ROUTES
// ==============================
// Create product
router.post("/", protect, adminOnly, createProduct);

// Update product
router.put("/:id", protect, adminOnly, updateProduct);

// Delete product
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;
