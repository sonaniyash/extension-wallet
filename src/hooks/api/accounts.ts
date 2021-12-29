import {  useQuery } from "react-query";
import api from "../../services";

export const useGetAccounts = () => {
  const {data , isLoading} =  useQuery('accounts',
    () => api.getAccounts(),
    {
      onError: (e) => {
        console.error(e);
      },
    }
  );
  return {
    accounts: data,
    isSearching: isLoading,
  };
};
