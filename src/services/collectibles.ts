// import axios from "axios";
import { TEST_COLLECTIBLES, TEST_OFFERS } from "../mock/mock";

const api = {
    getAllCollectibles: async (): Promise<Array<any>> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_COLLECTIBLES), 700);
        });
    },
    getCollectibleById: async (id: string): Promise<any> => {
        return new Promise(function (resolve) {
            return setTimeout(() => {
                const result = TEST_COLLECTIBLES.find((val) => val.id === id)
                resolve(result)
            }, 700);
        });
    },
    getMyOffers: async (): Promise<Array<any>> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_OFFERS), 700);
        });
    },
};

export default api;