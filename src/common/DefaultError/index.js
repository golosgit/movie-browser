import { Navigation } from "../Navigation";
import { MainWrapper } from "../MainWrapper";
import { Error } from "../Error";

export const DefaultError = () => {
  return (
    <>
      <Navigation />
      <MainWrapper>
        <Error />
      </MainWrapper>
    </>
  );
};