import { useSearchParams} from "react-router-dom";

export const pageParamName = "page";
export const searchParamName = "search";

export const useUrlParams = () => {
  const [params, setParams] = useSearchParams();

  const updateUrlPageParam = pageNumber => {
    params.set(pageParamName, pageNumber);
    setParams(params);
  };

  const updateUrlSearchParam = query => {
    params.set(searchParamName, query);
    setParams(params);
  };

  return [updateUrlPageParam, updateUrlSearchParam];
};