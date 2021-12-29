// import axios from "axios";
import { TEST_ACCOUNTS } from "../mock/mock";

const api = {
  getAccounts: async (): Promise<Array<any>> => {
    // return axios
    //   .get(`/accounts`)
    //   .then((response) => response.data);
    return new Promise(function (resolve) {
      return setTimeout(() => resolve(TEST_ACCOUNTS), 100);
      // return setTimeout(() => reject(), 1500);
    });
  },
};

export default api;
