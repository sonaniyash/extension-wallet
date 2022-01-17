import axios from "axios";
import decode from 'jwt-decode' // import dependency
import { apiNearUrl } from "../services/contacts";
import { baseUrl } from "../services/user";



export const InitAxiosInterceptor = (context: any)=> {
    axios.interceptors.request.use(
        config => {
            const [state,] = context;

            const accessToken = state && state.token ? state.token : '';
            const nearTokenData = accessToken && decode(accessToken);
            const nearToken = nearTokenData.near_api.jwt_access_token;

            if (config && config.headers && accessToken) {
                if (config.url?.includes(apiNearUrl))
                {
                    config.headers['Authorization'] = 'Bearer ' + nearToken;
                }
                
                if (config.url?.includes(baseUrl)) {
                    config.headers['Authorization'] = 'Bearer ' + accessToken;
                }
            }
            // config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            Promise.reject(error)
        });
}