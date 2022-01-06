import axios from "axios";
import { CheckExistenceData, CreateAccountData } from "../context/models";

const baseUrl = "https://xkfvqk07j4.execute-api.us-east-1.amazonaws.com"

const api = {
  checkExistence: async (data: CheckExistenceData) => {
    return axios
      .post(`${baseUrl}/api/user/check_existence`, data)
      .then((response) => response.data);
  },
  createAccount: async (data: CreateAccountData) => {
    return axios
      .post(`${baseUrl}/api/user/registration`, data)
      .then((response) => response.data);
  },
};

export default api;
