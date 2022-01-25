// import axios from "axios";
import { TEST_OFFERS } from "../mock/mock";
import axios from "axios";

export const apiNearUrl = `${process.env.NEARAPI_BACKEND}`;

const api = {
    getAllCollectibles: async (userId: any): Promise<Array<any>> => {
        return axios
            .get(`${apiNearUrl}/nfts/list?owner_id=${userId}`)
            .then((response: any) => response.data.data);
    },
    getCollectibleById: async (id: string): Promise<any> => {
        return axios
            .get(`${apiNearUrl}/nfts/${id}`)
            .then((response: any) => response.data.data);
    },
    getMyOffers: async (): Promise<Array<any>> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_OFFERS), 700);
        });
    },
};

export default api;
