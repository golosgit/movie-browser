import { useLocation } from "react-router-dom";
import { SearchWrapper, StyledInput, SearchIcon } from "./styled";

export const Search = () => {
  const location = useLocation();
  const searchText = location.pathname.includes("/movies") ? "movies" : "people";

  return (
    <SearchWrapper>
      <SearchIcon />
      <StyledInput placeholder={`Search for ${searchText}...`}/>
    </SearchWrapper>
  );
};