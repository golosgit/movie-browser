import { Container, Button, Text, PagesWrapper, Page, Arrow } from "./styled";
import { useUrlParams } from "../../core/urlParams";

export const Pagination = ({ page, totalPages }) => {
  const disabledPrevious = page === 1;
  const lastPage = totalPages > 500 ? 500 : totalPages;
  const disabledNext = page === lastPage;

  const urlParams = useUrlParams();
  const updateUrlPageParam = urlParams[0];

  return (
    <Container>
      <Button disabled={disabledPrevious} onClick={() => updateUrlPageParam(1)}>
        <Arrow disabled={disabledPrevious}/>
        <Text disabled={disabledPrevious}>First</Text>
      </Button>
      <Button disabled={disabledPrevious} onClick={() => updateUrlPageParam(page - 1)}>
        <Arrow disabled={disabledPrevious}/>
        <Arrow disabled={disabledPrevious} mobile="true"/>
        <Text disabled={disabledPrevious}>Previous</Text>
      </Button>

      <PagesWrapper>
        <Page>Page</Page>
        <Page pageNumber>{page}</Page>
        <Page>of</Page>
        <Page pageNumber>{lastPage}</Page>
      </PagesWrapper>

      <Button disabled={disabledNext} onClick={() => updateUrlPageParam(page + 1)}>
        <Text disabled={disabledNext}>Next</Text>
        <Arrow disabled={disabledNext} right="true"/>
        <Arrow disabled={disabledNext} right="true" mobile="true"/>
      </Button>
      <Button disabled={disabledNext} onClick={() => updateUrlPageParam(lastPage)}>
        <Text disabled={disabledNext}>Last</Text>
        <Arrow disabled={disabledNext} right="true"/>
      </Button>
    </Container>
  );
};