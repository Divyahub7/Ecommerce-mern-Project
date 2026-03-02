import API from "./api";

// Get all products
export const getProducts = async () => {
  const { data } = await API.get("/products");
  return data;
};

// Get product by ID
export const getProductById = async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data;
};

// Get products by category
export const getProductsByCategory = async (category) => {
  const { data } = await API.get(`/products/category/${category}`);
  return data;
};

// Admin - Create product
export const createProduct = async (productData) => {
  const { data } = await API.post("/products", productData);
  return data;
};

// Admin - Update product
export const updateProduct = async (id, productData) => {
  const { data } = await API.put(`/products/${id}`, productData);
  return data;
};

// Admin - Delete product
export const deleteProduct = async (id) => {
  const { data } = await API.delete(`/products/${id}`);
  return data;
};
