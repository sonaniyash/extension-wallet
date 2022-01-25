// import axios from "axios";
import { TEST_HISTORY } from "../mock/mock";
import axios from "axios";

export const apiNearUrl = `${process.env.NEARAPI_BACKEND}`;


const api = {
    getHistorty: async (): Promise<Array<any>> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_HISTORY), 700);
        });
    },
};

export default api;
