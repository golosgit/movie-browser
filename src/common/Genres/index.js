import { Container, GenreTile } from "./styled";

export const Genres = ({ details, genres, genreId }) => {
  console.log(genreId);
  return (
    <Container details={details}>
      {genreId?.map((id) => (
        <GenreTile key={id}>{genres.find(genre => genre.id === id).name}</GenreTile>
      ))}
    </Container>
  );
};