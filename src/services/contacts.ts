import axios from 'axios';

export const apiNearUrl = `${process.env.EXTENSION_ENDPOINT}`;

const api = {
  getContacts: async (userId: any): Promise<Array<any>> => {
    return axios
      .get(`${apiNearUrl}/contacts/list/${userId}`)
      .then((response: any) => response.data.data);
  },

  getContact: async (id: string | undefined): Promise<any> => {
    return axios
      .get(`${apiNearUrl}/contacts/${id}`)
      .then((response: any) => response.data.data);
  },

  editContact: async (contactData: any, userId: any, id: any) => {
    const payload = {
      first_name: contactData.first_name,
      email: [
        {
          address: contactData.email,
          type: 'home'
        }
      ],
      phone: [
        {
          number: contactData && contactData.phone ? contactData.phone : '',
          type: 'home'
        }
      ],
      last_name: contactData.last_name,
      address: [
        {
          formatted: contactData.address,
          type: 'residence'
        }
      ],
      job_title: '',
      companies: [],
      groups: [],
      dob: '',
      wallet_id: contactData.nearAccount,
      birthday: '',
      import_source: '',
      app_id: '',
      owner_id: userId
    };
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
        type: 'home'
      }],
      phone: [
        {
          number: contactData && contactData.phone ? contactData.phone : '',
          type: 'home'
        }
      ],
      last_name: contactData.last_name,
      address: [
        {
          formatted: contactData.address,
          type: 'residence'
        }
      ],
      job_title: '',
      companies: [],
      groups: [],
      dob: '',
      wallet_id: contactData.nearAccount,
      birthday: '',
      import_source: '',
      app_id: 'HomePage Extension App',
      owner_id: userId
    };
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
