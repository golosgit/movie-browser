import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { SearchWrapper, StyledInput, SearchIcon } from "./styled";
import { searchParamName, useUrlParams } from "../../../core/urlParams";

export const Search = () => {
  const location = useLocation();
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");
  const urlParams = useUrlParams();
  const updateUrlSearchParam = urlParams[1];
  
  const searchText = location.pathname.includes("/movies") ? "movies" : "people";
  const searchParam = params.get(searchParamName) || "";

  const setUrlQuery = ({ target }) => {
    setQuery(target.value);
    updateUrlSearchParam(target.value.trim());
  };

  useEffect(() => {
    setQuery(searchParam);  
  }, [searchParam]);

  return (
    <SearchWrapper>
      <SearchIcon />
      <StyledInput 
        value={query}
        placeholder={`Search for ${searchText}...`} 
        debounceTimeout={700}
        onChange={setUrlQuery} 
      />
    </SearchWrapper>
  );
};