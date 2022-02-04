import axios from "axios";

export const baseUrl = `${process.env.EXTENSION_ENDPOINT}`;


const api = {
    getHistorty: async (id: any): Promise<Array<any>> => {
        return axios
            .get(`${baseUrl}/transactions/nft/${id}`)
            .then((response) => response.data);
    }
}
export default api;
