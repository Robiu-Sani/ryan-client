import requests from "./httpServices";

const CustomerServices = {
  customerLogin: async (body) => {
    return requests.post("/customer/login", body);
  },

  verifyEmailAddress: async (body) => {
    return requests.post(`/customer/register/${token}`, body);
  },

  registerCustomer: async (token, body) => {
    return requests.post(`/customer/register/${token}`, body);
  },

  signUpWithProvider(token, body) {
    return requests.post(`/customer/signup/${token}`, body);
  },

  forgetPassword: async (body) => {
    return requests.put("/customer/forget-password", body);
  },

  resetPassword: async (body) => {
    return requests.put("/customer/reset-password", body);
  },

  changePassword: async (body) => {
    return requests.post("/customer/change-password", body);
  },

  updateCustomer: async (id, body) => {
    return requests.put(`/customer/${id}`, body);
  },
};

export default CustomerServices;
