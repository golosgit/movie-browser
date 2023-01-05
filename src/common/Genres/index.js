import { Container, GenreTile } from "./styled";

export const Genres = ({ details, genres, genreId }) => {
  return (
    <Container details={details}>
      {genreId ?
        genreId?.map((id) => 
        (
          <GenreTile key={id}>{genres.find(genre => genre.id === id).name}</GenreTile>
        )) :
        genres?.map((genre) => 
        (
          <GenreTile key={genre.id}>{genre.name}</GenreTile>
        ))
      }
    </Container>
  );
};