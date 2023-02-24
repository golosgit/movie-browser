import { Rating } from "../../../common/Rating";
import { imageUrl, image, apiKey } from "../../api";
import { Container, Poster, Title } from "./styled";

export const Backdrop = ({ movieDetails }) => {
  return (
    <Container>
      <Poster picture={`${imageUrl}${image.backdrop}${movieDetails?.backdrop_path}${apiKey}`}>
        <Title>{movieDetails?.title}</Title>
        <Rating 
          average={movieDetails?.vote_average} 
          totalVotes={movieDetails?.vote_count} 
          backdrop="true" 
          hidden={true} 
          votes={true} 
        />
        <Rating 
          totalVotes={movieDetails?.vote_count} 
          backdrop="true" 
          votes={true} 
          secondLine={true} 
        />
      </Poster>
    </Container>
  );
};
