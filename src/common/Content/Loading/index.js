import { MainWrapper } from "../../MainWrapper";
import { Header } from "../../Header";
import { Wrapper, StyledIcon } from "./styled";

export const Loading = ({ message }) => {
  return (
    <MainWrapper>
      <Header>{message ? `Search results for "${message}"` : ""}</Header>
      <Wrapper biggerMargin={!message}>
        <StyledIcon />
      </Wrapper>
    </MainWrapper>
  );
};
