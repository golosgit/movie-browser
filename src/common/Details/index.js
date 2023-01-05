import { 
  Container, 
  Image, 
  Info, 
  Description,
  Year, 
  List, 
  ListRow, 
  ListTerm, 
  ListDescription,
} from "./styled";
import { Header } from "../Header";
import { Genres } from "../Genres";
import { Rating } from "../Rating";
import { OptionalText } from "../OptionalText";
import { imageUrl, image } from "../../features/api";
import { changeDateFormat } from "../../features/changeDateFormat";

export const Details = ({ movie, movieDetails }) => {
  const date = movieDetails?.release_date;
  return (
    <Container>
      {movieDetails?.poster_path ?
        <Image 
          movie={movie}
          src={`${imageUrl}${image.w300}${movieDetails?.poster_path}`}
        /> :
        <Image 
          movie={movie}
        />
      }
      <Info>
        <Header details>{movieDetails?.title}</Header>
        <Year>{movieDetails?.release_date.slice(0, 4)}</Year>
        <List movie>
          <ListRow>
            <ListTerm movie>Production: </ListTerm>
            <ListDescription>
              {movieDetails?.production_countries ?
                movieDetails?.production_countries.map((country) => country.name).join(", ") :
                "N/A"
              }
            </ListDescription>
          </ListRow>
          <ListRow nextItem>
            <ListTerm movie>Release date: </ListTerm>
            <ListDescription>{date ? changeDateFormat(date) : "N/A"}</ListDescription>
          </ListRow>
        </List>
        <Genres 
          details
          genres={movieDetails?.genres}
        />
        <Rating 
          details="true"
          average={movieDetails?.vote_average}
          totalVotes={movieDetails?.vote_count}
        />
      </Info>
      <Description>
        <OptionalText description>{movieDetails?.overview}</OptionalText>
      </Description>
    </Container>
  );
};