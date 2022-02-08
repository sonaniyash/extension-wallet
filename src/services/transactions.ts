import axios from "axios";
export const apiNearUrl = `${process.env.EXTENSION_ENDPOINT}`;
// import TRANSACTIONS from '../mock/transactions';

const api = {
  getTransactions: async (userId: string): Promise<Array<any>> => {
    return axios
      .get(`${apiNearUrl}/transactions/list/${userId}`)
      .then((response) => response.data.data);
    // return new Promise((resolve) => setTimeout(() => resolve(TRANSACTIONS.data), 700));
  },
};

export default api;
