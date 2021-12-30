// import axios from "axios";
import { TEST_CONTACTS } from "../mock/mock";

const api = {
  getContacts: async (): Promise<Array<any>> => {
    // return axios
    //   .get(`/contacts`)
    //   .then((response) => response.data);
    return new Promise(function (resolve) {
      return setTimeout(() => resolve(TEST_CONTACTS), 700);
      // return setTimeout(() => reject(), 1500);
    });
  },
  getContact: async (id: string): Promise<any> => {
    // return axios
    //   .get(`/contacts`)
    //   .then((response) => response.data);
    return new Promise(function (resolve) {
      return setTimeout(() => {
        const result = TEST_CONTACTS.find((val)=> val.id ===id)
        resolve(result)
      }, 700);
      // return setTimeout(() => reject(), 1500);
    });
  },
  editContact: async (contactData: any) => {
    // return axios
    //   .put(`/contact/id`, contactData)
    //   .then((response) => response.data);
    return new Promise(function (resolve) {
      return setTimeout(() => resolve(contactData), 1500);
      // return setTimeout(() => reject(), 1500);
    });
  },
  createContact: async (contactData: any) => {
    // return axios
    //   .post(`/contact`, contactData)
    //   .then((response) => response.data);
    return new Promise(function (resolve) {
      return setTimeout(() => resolve(contactData), 1500);
      // return setTimeout(() => reject(), 1500);
    });
  },
};

export default api;
