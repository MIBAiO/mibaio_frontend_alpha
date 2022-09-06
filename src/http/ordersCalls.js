import api from "./apis";

export const getAllOrders = () => api.post("/api/");
export const login = (data) => api.post("/api/login", data);

export const logUserOut = () => api.get("/api/logout");

export const refresh = () => api.get("/api/refresh");
