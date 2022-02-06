import axios from "axios";

export const baseUrl = `${process.env.EXTENSION_ENDPOINT}`;

const api = {
    getMyOffers: async (): Promise<Array<any>> => {
        return axios
            .get(`${baseUrl}/offer/received`)
            .then((response) => response.data);
    },
    createOffer: async (offerData: any) => {

        return axios
            .post(`${baseUrl}/api/offer/create`, offerData)
            .then((response) => response.data);
    },
};

export default api;
