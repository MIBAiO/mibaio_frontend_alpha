import api from "./apis";

export const getUserOrders = () => api.get("/checkout");

export const postReview = (data) => api.post("/review", data);
