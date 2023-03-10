import { toMovieList } from "../../core/routes";
import { Header } from "../Header";
import { MainWrapper } from "../MainWrapper";
import { Text } from "../Text";
import { Wrapper, StyledIcon, Button } from "./styled";

export const Error = ({ defaultError }) => {
  return (
    <MainWrapper>
      <Wrapper>
        <StyledIcon />
        <Header errorMessage defaultError={defaultError}>
          Ooops! Something went wrong...
        </Header>
        <Text errorMessage hide={defaultError}>
          Please check your network connection and try again
        </Text>
        <Button to={toMovieList}>Back to home page</Button>
      </Wrapper>
    </MainWrapper>
  );
};
