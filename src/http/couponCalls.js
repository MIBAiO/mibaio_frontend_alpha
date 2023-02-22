import api from "./apis";

export const getCouponData = (couponCode) =>
    api.get(`/api/coupons/apply/${couponCode}`);
