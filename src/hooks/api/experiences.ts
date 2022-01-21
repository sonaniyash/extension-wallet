import { useQuery } from "react-query";
import api from "../../services";

export const useGetAllExperiences = () => {
    const { data, isLoading } = useQuery('experiences',
        () => api.getExperiences(),
        {
            onError: (e) => {
                console.error(e);
            },
        }
    );
    return {
        experiences: data,
        isSearching: isLoading,
    };
};