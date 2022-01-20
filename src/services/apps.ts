import { TEST_APPS, TEST_DETAILED_APP } from '../mock/apps';

const api = {
    getApps: async (): Promise<any> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_APPS), 700);
        });
    },
    getAppById: async (id: string): Promise<any> => {
        return new Promise(function (resolve) {
            return setTimeout(() => resolve(TEST_DETAILED_APP), 700);
        });
    },
    // getApps: async () => {
    //     return axios
    //         .get(`${baseUrl}/apps`)
    //         .then((response) => response.data);
    // },
    // getAppById: async (id: string) => {
    //     return axios
    //         .get(`${baseUrl}/apps/${id}`)
    //         .then((response) => response.data);
    // },
};

export default api;
