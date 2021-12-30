import userApi from "./user";
import getContacts from "./contacts";
import getAccounts from "./accounts";

const api = {
  ...userApi,
  ...getContacts,
  ...getAccounts,
};

export default api;
