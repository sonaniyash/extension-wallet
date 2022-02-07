import { useQuery } from 'react-query';
import api from '../../services';

export const useGetTransactionsByUserId = (userId: string) => {
  const { data, isLoading } = useQuery('transactions',
    () => api.getTransactions(userId),
    {
      onError: (e) => {
        console.error(e);
      },
    }
  );

  return { data, isLoading };
};
