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

export const updateBillingAndShippingAsSame = (data) =>
    api.put("/checkout/billing_and_shipping", data);

export const uploadBillingAndShippingAsSame = (data) =>
    api.post("/checkout/billing_and_shipping", data);

export const createOrder = (couponCode, paymentMethod) =>
    api.get(
        `/checkout/get_bill?coupon=${couponCode}&paymentMethod=${paymentMethod}`
    );

export const deleteOrder = (orderId) => api.delete(`/checkout/bill/${orderId}`);

export const paymentSuccessCallback = (data) =>
    api.post("/payment/success", data);

export const CODPaymentCall = (data) => api.post("/payment/cod", data);
