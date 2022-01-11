import axios from "axios";
import { CreateAccountData } from "../context/models";

const baseUrl = "http://localhost:3001/api";

const api = {
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
  useVerifyUser: async (walletName: string, code: string) => {
    return axios
      .post(`${baseUrl}/user/verify`, { walletName, nonce: code })
      .then((response) => response.data);
  },
};

export default api;
