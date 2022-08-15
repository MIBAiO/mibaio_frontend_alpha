import api from "./apis";

export const getShippingDetails = () => api.get("/checkout/shipping_details");
export const getBillingDetails = () => api.get("/checkout/billing_details");

export const uploadShippingDetails = (data) =>
    api.post("/checkout/shipping_details", data);
export const uploadBillingDetails = (data) =>
    api.post("/checkout/billing_details", data);

export const updateShippingDetails = (data) =>
    api.put("/checkout/shipping_details", data);

export const updateBillingDetails = (data) =>
    api.put("/checkout/billing_details", data);

export const createOrder = (couponCode) =>
    api.get(`/checkout/get_bill?coupon=${couponCode}`);

export const deleteOrder = (orderId) => api.delete(`/checkout/bill/${orderId}`);

export const paymentSuccessCallback = (data) =>
    api.post("/payment/success", data);
