import { useSearchParams } from "react-router-dom";
import { Container, Button, Text, PagesWrapper, Page, Arrow } from "./styled";

export const Pagination = ({ page, totalPages }) => {
  const disabledPrevious = page === 1;
  const disabledNext = page === totalPages;

  return (
    <Container>
      <Button disabled={disabledPrevious}>
        <Arrow disabled={disabledPrevious}/>
        <Text disabled={disabledPrevious}>First</Text>
      </Button>
      <Button disabled={disabledPrevious}>
        <Arrow disabled={disabledPrevious}/>
        <Arrow disabled={disabledPrevious} mobile="true"/>
        <Text disabled={disabledPrevious}>Previous</Text>
      </Button>

      <PagesWrapper>
        <Page>Page</Page>
        <Page pageNumber>{page}</Page>
        <Page>of</Page>
        <Page pageNumber>
          {`${totalPages > 500 ? 500 : totalPages}`}
        </Page>
      </PagesWrapper>

      <Button disabled={disabledNext}>
        <Text disabled={disabledNext}>Next</Text>
        <Arrow disabled={disabledNext} right="true"/>
        <Arrow disabled={disabledNext} right="true" mobile="true"/>
      </Button>
      <Button disabled={disabledNext}>
        <Text disabled={disabledNext}>Last</Text>
        <Arrow disabled={disabledNext} right="true"/>
      </Button>
    </Container>
  );
};