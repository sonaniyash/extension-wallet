import userApi from "./user";
import contactsApi from "./contacts";
import accountsApi from "./accounts";

const api = {
  ...userApi,
  ...contactsApi,
  ...accountsApi,
};

export default api;
