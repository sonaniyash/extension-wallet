import axios from "axios";

export const baseUrl = `${process.env.EXTENSION_ENDPOINT}`;

const api = {
  getUnreadNotificationsAmount: async (): Promise<any> => {
    return axios
      .get(`${baseUrl}/notifications/unread/amount`)
      .then((response) => response.data);
  },
  getAllNotifications: async (): Promise<Array<any>> => {
    return axios
      .get(`${baseUrl}/notifications`)
      .then((response) => response.data);
  },
  markAllNotificationsAsRead: async (): Promise<any> => {
    return axios
      .put(`${baseUrl}/notifications/read`)
      .then((response) => response.data);
  },
};

export default api;
