import { Container, Button, Text, PagesWrapper, Page, Arrow } from "./styled";

export const Pagination = () => {
  return (
    <Container>
      <Button disabled>
        <Arrow disabled/>
        <Text disabled>First</Text>
      </Button>
      <Button disabled>
        <Arrow disabled/>
        <Arrow disabled mobile="true"/>
        <Text disabled>Previous</Text>
      </Button>

      <PagesWrapper>
        <Page>Page</Page>
        <Page pageNumber>1</Page>
        <Page>of</Page>
        <Page pageNumber>500</Page>
      </PagesWrapper>

      <Button>
        <Text>Next</Text>
        <Arrow right="true"/>
        <Arrow right="true" mobile="true"/>
      </Button>
      <Button>
        <Text>Last</Text>
        <Arrow right="true"/>
      </Button>
    </Container>
  );
};