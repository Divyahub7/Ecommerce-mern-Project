import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

import { protect } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// USER ROUTES
// ==============================

// Create new order
router.post("/", protect, createOrder);

// Get logged-in user's orders
router.get("/myorders", protect, getMyOrders);

// Get order by ID
router.get("/:id", protect, getOrderById);

// ADMIN ROUTES
// ==============================

// Get all orders
router.get("/", protect, adminOnly, getAllOrders);

// Update order status
router.put("/:id", protect, adminOnly, updateOrderStatus);

export default router;
