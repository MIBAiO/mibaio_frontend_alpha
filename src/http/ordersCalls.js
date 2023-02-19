import api from "./apis";

export const getAllOrders = () => api.get("/orders");
