import { Wrapper, StyledIcon, Button } from "./styled";
import { MainWrapper } from "../../MainWrapper";
import { Header } from "../../Header";
import { Text } from "../../Text";
import { toMovieList } from "../../../routes";

export const Error = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <StyledIcon />
        <Header errorMessage>Ooops! Something went wrong...</Header>
        <Text errorMessage>Please check your network connection and try again</Text>
        <Button to={toMovieList}>Back to home page</Button>
      </Wrapper>
    </MainWrapper>
  );
};