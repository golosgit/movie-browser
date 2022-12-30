import { Container, GenreTile } from "./styled";

export const Genres = ({ details }) => {
  return (
    <Container details={details}>
      <GenreTile>Action</GenreTile>
      <GenreTile>Adventure</GenreTile>
      <GenreTile>Drama</GenreTile>
      <GenreTile>Comedy</GenreTile>
    </Container>
  );
};