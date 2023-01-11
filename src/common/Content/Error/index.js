import { Wrapper, StyledIcon, Button } from "./styled";
import { MainWrapper } from "../../MainWrapper";
import { Header } from "../../Header";
import { Text } from "../../Text";

export const Error = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <StyledIcon />
        <Header errorMessage>Ooops! Something went wrong...</Header>
        <Text errorMessage>Please check your network connection and try again</Text>
        <Button>Back to home page</Button>
      </Wrapper>
    </MainWrapper>
  );
};