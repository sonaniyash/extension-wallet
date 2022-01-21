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