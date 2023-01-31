import { useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchMovieList } from "./features/MovieListPage/movieListPageSlice";

export const pageParamName = "page";

export const usePageParams = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useSearchParams();
  const location = useLocation();

  const updateUrl = pageNumber => {
    params.set(pageParamName, pageNumber);
    setParams(params);
    
    if (location.pathname === "/movies") {
      dispatch(fetchMovieList(pageNumber));
    } 
  };

  return updateUrl;
};