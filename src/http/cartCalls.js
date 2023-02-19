import api from "./apis";

export const updateCartItem = (data, itemId) =>
    api.put(`/api/cart/${itemId}`, data);

export const deleteCartItem = (itemId) => api.delete(`/api/cart/${itemId}`);

export const addProductToCart = (data) => api.post("/api/cart", data);

export const getProductsInCart = () => api.get("/api/cart");
