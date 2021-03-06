import axios from "axios";
import { CreateAccountData } from "../context/models";

export const baseUrl = `${process.env.EXTENSION_ENDPOINT}`;

const api = {
  getAccountDetails: async () => {
    return axios
      .get(`${baseUrl}/user/details`)
      .then((response) => response.data);
  },
  createAccount: async (data: CreateAccountData) => {
    return axios
      .post(`${baseUrl}/user/create`, data)
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
