import userApi from "./user";
import contactsApi from "./contacts";
import accountsApi from "./accounts";
import collectiblesApi from "./collectibles";

const api = {
  ...userApi,
  ...contactsApi,
  ...accountsApi,
  ...collectiblesApi
};

export default api;
