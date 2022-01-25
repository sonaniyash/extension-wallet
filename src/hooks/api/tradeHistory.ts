import { useQuery } from "react-query";
import api from "../../services";

export const useGetHistory = () => {
    const { data, isLoading } = useQuery('tradeHistory',
        () => api.getHistorty(),
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
