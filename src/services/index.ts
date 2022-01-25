import userApi from './user';
import contactsApi from './contacts';
import accountsApi from './accounts';
import collectiblesApi from './collectibles';
import offersApi from './collectibles';
import appsApi from './apps';
import experiencesApi from "./experiences";
import categoriesApi from "./categories";

const api = {
    ...userApi,
    ...contactsApi,
    ...accountsApi,
    ...collectiblesApi,
    ...offersApi,
    ...appsApi,
    ...experiencesApi,
    ...categoriesApi,
};

export default api;
