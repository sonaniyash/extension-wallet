import userApi from "./user";
import contactsApi from "./contacts";
import accountsApi from "./accounts";
import collectiblesApi from "./collectibles";
import offersApi from "./collectibles";
import experiencesApi from "./experiences";
import categoriesApi from "./categories";

const api = {
  ...userApi,
  ...contactsApi,
  ...accountsApi,
  ...collectiblesApi,
  ...offersApi,
  ...experiencesApi,
  ...categoriesApi,
};

export default api;
