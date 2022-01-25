// import axios from "axios";
import { CATEGORIES } from "../mock/mock";

const api = {
    getAllCategories: async (): Promise<Array<any>> => {
        // return axios
        //   .get(`/accounts`)
        //   .then((response) => response.data);
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(CATEGORIES), 100);
            // return setTimeout(() => reject(), 1500);
        });
    },
};

export default api;
