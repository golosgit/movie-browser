import { Search } from "./Search";
import {
  Container,
  NavigationWrapper,
  Logo,
  NavigationIcon,
  Title,
  LinkWrapper,
  StyledLink,
  SearchContainer,
} from "./styled";
import { toMovieList, toPeopleList } from "../../routes";

export const Navigation = () => {
  return (
    <Container>
      <NavigationWrapper>
        <Logo to="/">
          <NavigationIcon />
          <Title>Movies browser</Title>
        </Logo>
        <LinkWrapper>
          <StyledLink to={toMovieList}>Movies</StyledLink>
          <StyledLink to={toPeopleList}>People</StyledLink>
        </LinkWrapper>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </NavigationWrapper>
    </Container>
  );
};