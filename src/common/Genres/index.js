import { Container, GenreTile } from "./styled";

export const Genres = () => {
  return (
    <Container>
      <GenreTile>Action</GenreTile>
      <GenreTile>Adventure</GenreTile>
      <GenreTile>Drama</GenreTile>
      <GenreTile>Comedy</GenreTile>
    </Container>
  );
};