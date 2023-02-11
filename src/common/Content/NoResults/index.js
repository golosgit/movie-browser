import { Header } from "../../Header";
import { MainWrapper } from "../../MainWrapper";
import { Wrapper, StyledImage } from "./styled";

export const NoResults = ({ message }) => {
  return (
    <MainWrapper>
      <Header>Sorry, there are no results for "{message}"</Header>
      <Wrapper>
        <StyledImage />
      </Wrapper>
    </MainWrapper>
  );
};