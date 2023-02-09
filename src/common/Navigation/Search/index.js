import { useLocation } from "react-router-dom";
import { SearchWrapper, StyledInput, SearchIcon } from "./styled";
import { useUrlParams } from "../../../urlParams";

export const Search = () => {
  const location = useLocation();

  const urlParams = useUrlParams();
  const updateUrlPageParam = urlParams[1];

  const searchText = location.pathname.includes("/movies") ? "movies" : "people";

  const setQuery = event => {
    setTimeout(() => {
      updateUrlPageParam(event.target.value);
    }, 1000);
  };

  return (
    <SearchWrapper>
      <SearchIcon />
      <StyledInput 
        placeholder={`Search for ${searchText}...`}
        onChange={setQuery}
      />
    </SearchWrapper>
  );
};