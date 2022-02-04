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
        // return new Promise(function (resolve) {
        //     console.log("offerData" ,offerData);
        //   return setTimeout(() => resolve(offerData), 1500);
        // return setTimeout(() => reject(), 1500);
        // });
    },
};

export default api;
