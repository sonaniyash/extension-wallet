import userApi from './user';
import contactsApi from './contacts';
import accountsApi from './accounts';
import collectiblesApi from './collectibles';
import offersApi from './collectibles';
import appsApi from './apps';

const api = {
    ...userApi,
    ...contactsApi,
    ...accountsApi,
    ...collectiblesApi,
    ...offersApi,
    ...appsApi,
};

export default api;
