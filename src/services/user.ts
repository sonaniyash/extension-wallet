// import axios from "axios";
import { CreateAccountData } from "../context/models";

const api = {
  registerUser: async (accountData: CreateAccountData) => {
    // return axios
    //   .post(`/register`, accountData)
    //   .then((response) => response.data);
    return new Promise(function (resolve) {
      return setTimeout(() => resolve(accountData), 1500);
      // return setTimeout(() => reject(), 1500);
    });
  },
};

export default api;
