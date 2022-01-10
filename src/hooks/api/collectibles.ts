import { useQuery } from "react-query";
import api from "../../services";

export const useGetAllCollectibles = () => {
    const { data, isLoading } = useQuery('collectibles',
        () => api.getAllCollectibles(),
        {
            onError: (e) => {
                console.error(e);
            },
        }
    );
    return {
        collectibles: data,
        isSearching: isLoading,
    };
};

export const useGetCollectibleById = (collectibleId: string) => {
    const { data, isLoading } = useQuery('collectible',
        () => api.getCollectibleById(collectibleId),
        {
            onError: (e) => {
                console.error(e);
            },
        }
    );
    return {
        collectible: data,
        isSearching: isLoading,
    };
};

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
        collectibles: data,
        isSearching: isLoading,
    };
};
