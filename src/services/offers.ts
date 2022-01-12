// import axios from "axios";
import { TEST_OFFERS } from "../mock/mock";

const api = {
    getMyOffers: async (): Promise<Array<any>> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_OFFERS), 700);
        });
    },
};

export default api;
