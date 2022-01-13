import axios from "axios";

const apiNearUrl = 'https://api.nearlogin.io';
const userId = 'UaLh5zaWZSUzjZLl6bV6L'
const api = {
  getContacts: async (): Promise<Array<any>> => {
    return axios
      .get(`${apiNearUrl}/contacts/list/${userId}`)
      .then((response: any) => response.data.data);
  },
  getContact: async (id: string | undefined): Promise<any> => {
    return axios
      .get(`${apiNearUrl}/contacts/${id}`)
      .then((response: any) => response.data.data);
    // return new Promise(function (resolve) {
    //   return setTimeout(() => {
    //     const result = TEST_CONTACTS.find((val)=> val.id ===id)
    //     resolve(result)
    //   }, 700);
      // return setTimeout(() => reject(), 1500);
    // });
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
