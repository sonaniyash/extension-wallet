import {  useQuery } from "react-query";
import api from "../../services";

export const useGetContacts = () => {
  const {data , isLoading} =  useQuery('contacts',
    () => api.getContacts(),
    {
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    contacts: data,
    isSearching: isLoading,
  };
};
