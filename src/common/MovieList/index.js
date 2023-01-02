import { MovieListContaier, MovieListTile, MovieListImage, MovieInfo } from "./styled";
import { Header } from "../../common/Header";
import { Text } from "../../common/Text";
import { OptionalText } from "../../common/OptionalText";
import { Genres } from "../../common/Genres";
import { Rating } from "../../common/Rating";
import { imageUrl, image } from "../../features/api";

export const MovieList = ({ title, movieList, hideMaxVotes, listView, genres }) => {
  return (
    <>
      <Header>{title}</Header>
      <MovieListContaier>
        {movieList?.map((movie) =>  (      
        <MovieListTile key={movie?.id}>
          {movie?.poster_path ? 
            <MovieListImage src={`${imageUrl}${image.moviePoster}${movie?.poster_path}`} /> :
            <MovieListImage />
          }
          <MovieInfo>
            <Text movie>{movie?.title}</Text>
            {movie?.release_date ? 
              <OptionalText movie>{movie?.release_date.slice(0, 4)}</OptionalText> :
              ""
            }
            {genres ? 
              <Genres 
                genres={genres}
                genreId={movie?.genre_ids}  
              /> :
              ""
            }            
            <Rating 
              average={movie.vote_average}
              hideMaxVotes={hideMaxVotes}
              totalVotes={movie.vote_count}
              listView={listView}
            />
          </MovieInfo>
        </MovieListTile>
        ))}
      </MovieListContaier>
    </>
  );
};