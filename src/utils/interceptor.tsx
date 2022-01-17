import axios from "axios";
import decode from 'jwt-decode' // import dependency
import { apiNearUrl } from "../services/contacts";
import { baseUrl } from "../services/user";



export const InitAxiosInterceptor = (context: any)=> {
    axios.interceptors.request.use(
        config => {
            const [state,] = context;

            const accessToken = state && state.token ? state.token : '';
        
            if (config && config.headers && accessToken) {
                const nearTokenData: any = (accessToken && decode(accessToken) ? decode(accessToken) : '');
                const nearToken = (nearTokenData && nearTokenData.near_api && nearTokenData.near_api.jwt_access_token) ? nearTokenData.near_api.jwt_access_token : '';

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