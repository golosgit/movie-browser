import { Header } from "../Header";
import { Wrapper, StyledImage } from "./styled";

export const NoResults = () => {
  return (
    <>
      <Header>Sorry, there are no results for "Muan"</Header>
      <Wrapper>
        <StyledImage />
      </Wrapper>
    </>
  );
};