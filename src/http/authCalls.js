import api from "./apis";

export const register = (data) => api.post("/api/register", data);
export const login = (data) => api.post("/api/login", data);
export const verifyUser = (data) => api.post("/api/verify", data);

export const requestResetPassword = (data) =>
    api.post("/api/requestResetPassword", data);
export const passwordReset = (data) =>
    api.post(
        "/api/passwordReset",
        { password: data.password },
        {
            params: {
                token: data.token,
                id: data.id,
            },
        }
    );

export const logUserOut = () => api.get("/api/logout");

export const refresh = () => api.get("/api/refresh");
