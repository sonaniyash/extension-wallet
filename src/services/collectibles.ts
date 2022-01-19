// import axios from "axios";
import { TEST_OFFERS } from "../mock/mock";
import axios from "axios";

const apiNearUrl = 'https://api.nearlogin.io';
// const userId = 'wQWFNYPkTYy5rRzmWnO76'
// const userId = 'UaLh5zaWZSUzjZLl6bV6L'

const api = {
    getAllCollectibles: async (userId: any): Promise<Array<any>> => {
        return axios
            .get(`${apiNearUrl}/nfts?user_id=${userId}`)
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
