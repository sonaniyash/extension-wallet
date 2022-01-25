import userApi from './user';
import contactsApi from './contacts';
import accountsApi from './accounts';
import collectiblesApi from './collectibles';
import offersApi from './offers';
import appsApi from './apps';
import experiencesApi from "./experiences";
import categoriesApi from "./categories";
import tradeHistoryApi from "./tradeHistory";

const api = {
    ...userApi,
    ...contactsApi,
    ...accountsApi,
    ...collectiblesApi,
    ...offersApi,
    ...appsApi,
    ...experiencesApi,
    ...categoriesApi,
    ...tradeHistoryApi
};

export default api;
