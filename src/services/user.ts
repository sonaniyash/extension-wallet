import axios from "axios";
import { CreateAccountData } from "../context/models";

const baseUrl = "http://localhost:3001/api";

const api = {
  getAccountDetails: async () => {
    return axios
      .get(`${baseUrl}/user/details`)
      .then((response) => response.data);
  },
  createAccount: async (data: CreateAccountData) => {
    return axios
      .post(`${baseUrl}/user/registration`, data)
      .then((response) => response.data);
  },
  loginWithWallet: async (walletName: string) => {
    return axios
      .post(`${baseUrl}/user/login`, { walletName })
      .then((response) => response.data);
  },
  verifyUser: async (walletName: string, code: string) => {
    return axios
      .post(`${baseUrl}/user/verify`, { walletName, code })
      .then((response) => response.data);
  },
  createPasscode: async (code: string) => {
    return axios
      .post(`${baseUrl}/user/passcode`, { code })
      .then((response) => response.data);
  },
};

export default api;
