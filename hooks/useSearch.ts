import { useQuery } from "react-query";
import { fetcher } from "../config";

export const getSearchResult = async() => {
    return await fetcher({
        method : "Get",
        url : '/all?fields=name,flags,continents',
    })
}

export const useSearchResult = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey : ["search"],
        queryFn : () => getSearchResult(),
        retry : false,
        enabled : true,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        keepPreviousData : true,
        onError(err){
            console.log(err)
        }
    })
    return {
        data,
        isLoading,
        refetch
    }
}