import axios from "axios";

const REACT_APP_API_URL = "http://localhost:5500";

const api = axios.create({
    baseURL: REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

export const addProductToCart = (data) => api.post("/api/cart", data);

export const getProductsInCart = () => api.get("/api/cart");

//List of all endpoints
export const register = (data) => api.post("/api/register", data);
export const login = (data) => api.post("/api/login", data);

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

api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            originalRequest &&
            !originalRequest._isRetry
        ) {
            originalRequest.isRetry = true;
            try {
                await axios.get(`${REACT_APP_API_URL}/api/refresh`, {
                    withCredentials: true,
                });

                return api.request(originalRequest);
            } catch (err) {
                console.log(err.message);
            }
        }
        throw error;
    }
);

export default api;
