import { useQuery } from "react-query";
import api from "../../services";

export const useGetMyoffers = () => {
    const { data, isLoading } = useQuery('myOffers',
        () => api.getMyOffers(),
        {
            onError: (e) => {
                console.error(e);
            },
        }
    );
    return {
        offers: data,
        isSearching: isLoading,
    };
};
