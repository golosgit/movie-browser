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

export const Navigation = () => {
  return (
    <Container>
      <NavigationWrapper>
        <Logo>
          <NavigationIcon />
          <Title>Movies browser</Title>
        </Logo>
        <LinkWrapper>
          <StyledLink>Movies</StyledLink>
          <StyledLink>People</StyledLink>
        </LinkWrapper>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </NavigationWrapper>
    </Container>
  );
};