import API from "./api";

// Create order
export const createOrder = async (orderData) => {
  const { data } = await API.post("/orders", orderData);
  return data;
};

// Get my orders
export const getMyOrders = async () => {
  const { data } = await API.get("/orders/myorders");
  return data;
};

// Get order by ID
export const getOrderById = async (id) => {
  const { data } = await API.get(`/orders/${id}`);
  return data;
};

// Admin - Get all orders
export const getAllOrders = async () => {
  const { data } = await API.get("/orders");
  return data;
};

// Admin - Update order status
export const updateOrderStatus = async (id, updateData) => {
  const { data } = await API.put(`/orders/${id}`, updateData);
  return data;
};
