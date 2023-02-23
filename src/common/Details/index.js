import { Container, Image, Info, Description, Year, List, ListRow, ListTerm, ListDescription } from "./styled";
import { Header } from "../Header";
import { Genres } from "../Genres";
import { Rating } from "../Rating";
import { OptionalText } from "../OptionalText";
import { imageUrl, image } from "../../features/api";

export const Details = ({ movie, movieDetails, personDetails }) => {
  const picture = movieDetails?.poster_path || personDetails?.profile_path;
  const place = movieDetails?.production_countries.map((country) => country.name).join(", ") || personDetails?.place_of_birth || "N/A";
  const date = movieDetails?.release_date || personDetails?.birthday;

  const formattedDate = date ? date.split("-").reverse().join(".") : "N/A";

  return (
    <Container>
      {picture ? 
        <Image movie={movie} src={`${imageUrl}${image.w400}${picture}`} /> :
        <Image movie={movie} />
      }
      <Info>
        <Header details>{movieDetails?.title || personDetails?.name}</Header>
        {movieDetails?.release_date ? 
          <Year>{movieDetails?.release_date.slice(0, 4)}</Year> : 
          ""
        }
        <List movie={movie}>
          <ListRow>
            <ListTerm movie={movie}>
              {movie ? "Production:" : "Date of birth:"}
            </ListTerm>
            <ListDescription>
              {movie ? place : formattedDate}</ListDescription>
          </ListRow>
          <ListRow nextItem>
            <ListTerm movie={movie}>
              {movie ? "Release date:" : "Place of birth:"}
            </ListTerm>
            <ListDescription>
              {movie ? formattedDate : place}</ListDescription>
          </ListRow>
        </List>
        {movie ? 
          <Genres details="true" genres={movieDetails?.genres} /> : 
          ""
        }
        {movie ? 
          <Rating details="true" average={movieDetails?.vote_average} totalVotes={movieDetails?.vote_count} hideMaxVotes /> :
          ""
        }
      </Info>
      <Description>
        <OptionalText description>{movieDetails?.overview || personDetails?.biography}</OptionalText>
      </Description>
    </Container>
  );
};