import api, { REACT_APP_API_URL } from "./apis";

import axios from "axios";

export const register = (data) =>
    axios.post(REACT_APP_API_URL + "/api/register", data);
export const login = (data) =>
    axios.post(REACT_APP_API_URL + "/api/login", data);
export const verifyUser = (data) =>
    axios.post(REACT_APP_API_URL + "/api/verify", data);

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

export const logUserOut = () => api.post("/api/logout");

export const refresh = () => api.get("/api/refresh");
