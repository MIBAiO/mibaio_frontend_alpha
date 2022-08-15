import api from "./apis";

export const saveContactData = (contactData) =>
    api.post(`/contactus/`, contactData);

export const subscribeToNewsletter = (email) => {
    api.post("/subscribe", {
        email,
    });
};
