import axios from "axios";
const baseUrl = `${process.env.EXTENSION_ENDPOINT}`;
const api = {
    getApps: async () => {
        return axios
            .get(`${baseUrl}/apps`)
            .then((response) => response.data.data);
    },
    getAppById: async (id: string) => {
        return axios
            .get(`${baseUrl}/apps/${id}`)
            .then((response) => response.data.data);
    }
};

export default api;
