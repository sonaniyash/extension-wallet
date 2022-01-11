import userApi from "./user";
import contactsApi from "./contacts";
import accountsApi from "./accounts";
import collectiblesApi from "./collectibles";
import offersApi from "./collectibles";

const api = {
  ...userApi,
  ...contactsApi,
  ...accountsApi,
  ...collectiblesApi,
  ...offersApi,
};

export default api;
