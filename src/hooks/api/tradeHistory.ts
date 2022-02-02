import { useQuery } from "react-query";
import api from "../../services";

export const useGetHistory = (id: any) => {
    const { data, isLoading } = useQuery('tradeHistory',
        () => api.getHistorty(id),
        {
            onError: (e) => {
                console.error(e);
            },
        }
    );
    return {
        history: data,
        isSearching: isLoading,
    };
};
