import API from "./api";

// Register
export const registerUser = async (formData) => {
  const { data } = await API.post("/auth/register", formData);
  return data;
};

// Login
export const loginUser = async (formData) => {
  const { data } = await API.post("/auth/login", formData);
  return data;
};
