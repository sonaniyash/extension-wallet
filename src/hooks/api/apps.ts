import { useQuery } from 'react-query';
import api from '../../services';

export const useGetAppById = (appId: string) => {
    const { data, isLoading } = useQuery('app',
        () => api.getAppById(appId),
        {
            onError: (e) => {
                console.error(e);
            },
        }
    );
    return {
        app: data,
        isSearching: isLoading,
    };
};

export const useGetApps = () => {
    const { data, isLoading } = useQuery('apps',
        () => api.getApps(),
        {
            onError: (e) => {
                console.error(e);
            },
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );
    return {
        apps: data,
        isSearching: isLoading,
    };
};
