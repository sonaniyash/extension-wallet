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

/** Terporary util function to mock search functionality, will be removed when API is implemented */

const filterExperiences = (arr: any, term: string) => {
    var found: any = [];

    arr.map((a: any) => {
        if (a.name.match(term)) {
            found.push(a);
        }
    })

    return found;
}

export const useSearchExperiences = (term: string) => {
    const { data, isLoading } = useQuery('experiences',
        () => api.searchExperience(),
        {
            onError: (e) => {
                console.error(e);
            },
        }
    );

    return {
        experiences: filterExperiences(data, term),
        isSearching: isLoading,
    };
};