// import axios from "axios";
import axios from "axios";
import { TEST_OFFERS } from "../mock/mock";

export const baseUrl = `${process.env.EXTENSION_ENDPOINT}/api`;

const api = {
    getMyOffers: async (): Promise<Array<any>> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_OFFERS), 700);
        });
    },
    createOffer: async (offerData: any) => {
        
         return axios
          .post(`${baseUrl}/offer/create`, offerData)
          .then((response) => response.data);
          // return new Promise(function (resolve) {
          //     console.log("offerData" ,offerData);
          //   return setTimeout(() => resolve(offerData), 1500);
          // return setTimeout(() => reject(), 1500);
          // });
      },
};

export default api;
