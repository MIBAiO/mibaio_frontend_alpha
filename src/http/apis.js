import axios from "axios";
import { toast } from "react-toastify";

//export const REACT_APP_API_URL = "http://localhost:5500";
export const REACT_APP_API_URL = "https://mibaio.in:5500";

axios.defaults.withCredentials = true;
const api = axios.create({
	baseURL: REACT_APP_API_URL,
	withCredentials: true,
	headers: {
		"Content-type": "application/json",
		Accept: "application/json",
		credentials: "include",
	},
});

//List of all endpoints

export {
	register,
	login,
	requestResetPassword,
	passwordReset,
	logUserOut,
	refresh,
	loginGoogleOAuth
} from "./authCalls";
export {
	updateCartItem,
	deleteCartItem,
	addProductToCart,
	getProductsInCart,
} from "./cartCalls";
export { getCouponData } from "./couponCalls";

export {
	getShippingDetails,
	getBillingDetails,
	uploadShippingDetails,
	uploadBillingDetails,
	updateBillingDetails,
	updateShippingDetails,
	createOrder,
	updateBillingAndShippingAsSame,
	uploadBillingAndShippingAsSame,
	CODPaymentCall,
} from "./checkoutCalls";

export { getAllOrders } from "./ordersCalls";

export { saveContactData, subscribeToNewsletter } from "./miscellaneousCalls";

api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		console.log("CALLING HEREEEEE.......");
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

		if (error.response.status === 400) {
			console.log(error.response.data.message);
			// toast.error(error.response.data.message);
		}
		throw error;
	}
);

export default api;
