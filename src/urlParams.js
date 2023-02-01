import { useSearchParams} from "react-router-dom";

export const pageParamName = "page";

export const usePageParams = () => {
  const [params, setParams] = useSearchParams();

  const updateUrl = pageNumber => {
    params.set(pageParamName, pageNumber);
    setParams(params);
  };

  return updateUrl;
};