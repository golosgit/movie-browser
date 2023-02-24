import { Error } from "../Error";
import { MainWrapper } from "../MainWrapper";
import { Navigation } from "../Navigation";

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
