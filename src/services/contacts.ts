import axios from "axios";
export const apiNearUrl = `${process.env.EXTENSION_ENDPOINT}`;

import { CONTACTS } from '../mock/mock';

const api = {
  getContacts: async (userId: any): Promise<Array<any>> => {
    // return axios
    //   .get(`${apiNearUrl}/contacts/list/${userId}`)
    //   .then((response: any) => response.data.data);

    return new Promise(function (resolve) {
        return setTimeout(() => resolve(CONTACTS), 100);
        // return setTimeout(() => reject(), 1500);
    });
  },

  getContact: async (id: string | undefined): Promise<any> => {
    // return axios
    //   .get(`${apiNearUrl}/contacts/${id}`)
    //   .then((response: any) => response.data.data);
    // return new Promise(function (resolve) {
    //   return setTimeout(() => {
    //     const result = TEST_CONTACTS.find((val)=> val.id ===id)
    //     resolve(result)
    //   }, 700);
      // return setTimeout(() => reject(), 1500);
    // });

    return new Promise(function (resolve) {
      const result = CONTACTS.find(c => c.contact_id === id);
      return setTimeout(() => resolve(result), 100);
      // return setTimeout(() => reject(), 1500);
  });
  },
  editContact: async (contactData: any, userId: any, id: any) => {
    const payload = {
      first_name: contactData.first_name,
      email: [
        {
          address: contactData.email,
          type: "home"
        }
      ],
      phone: [
          {
            number: contactData && contactData.phone ? contactData.phone : '',
            type: "home"
          }
      ],
          last_name: contactData.last_name,
          address: [
            {
              formatted: contactData.address,
              type: "residence"
            }
          ],
          job_title: "",
          companies: [],
          groups: [],
          dob: "",
          wallet_id: contactData.nearAccount,
          birthday: "",
          import_source: "",
          app_id: "",
          owner_id: userId
      }
     return axios
       .put(`${apiNearUrl}/contacts/${id}`, payload)
       .then((response) => response.data);
    // return new Promise(function (resolve) {
    //   return setTimeout(() => resolve(contactData), 1500);
      // return setTimeout(() => reject(), 1500);
    // });
  },
  createContact: async (contactData: any, userId: any) => {
    const payload = {
      first_name: contactData.first_name,
      email: [{
        address: contactData.email,
        type: "home"
      }],
      phone: [
          {
            number: contactData && contactData.phone ? contactData.phone : '',
            type: "home"
          }
  ],
      last_name: contactData.last_name,
      address: [
        {
          formatted: contactData.address,
          type: "residence"
        }
      ],
      job_title: "",
      companies: [],
      groups: [],
      dob: "",
      wallet_id: contactData.nearAccount,
      birthday: "",
      import_source: "",
      app_id: "HomePage Extension App",
      owner_id: userId
  }
    return axios
      .post(`${apiNearUrl}/contacts`, payload)
      .then((response) => response.data);
    // return new Promise(function (resolve) {
      // return setTimeout(() => resolve(contactData), 1500);
      // return setTimeout(() => reject(), 1500);
    // });
  },
};

export default api;
