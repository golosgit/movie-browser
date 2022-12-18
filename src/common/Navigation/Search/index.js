import { SearchWrapper, StyledInput, SearchIcon } from "./styled";

export const Search = () => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <StyledInput placeholder="Search for movies..."/>
    </SearchWrapper>
  );
};