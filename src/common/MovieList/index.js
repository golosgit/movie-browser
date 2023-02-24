import { Genres } from "../../common/Genres";
import { Header } from "../../common/Header";
import { OptionalText } from "../../common/OptionalText";
import { Rating } from "../../common/Rating";
import { Text } from "../../common/Text";
import { imageUrl, image } from "../../features/api";
import { MovieListContaier, MovieListTile, MovieListImage, MovieInfo, StyledLink } from "./styled";

export const MovieList = ({ title, movieList, hideMaxVotes, listView, genres, credits }) => {
  return (
    <>
      <Header credits={credits}>{title}</Header>
      <MovieListContaier>
        {movieList?.map((movie) => (
          <StyledLink key={`${movie?.id}-${movie?.credit_id}`} to={`/movies/movie-details/${movie?.id}`}>
            <MovieListTile>
              {movie?.poster_path ? 
                <MovieListImage src={`${imageUrl}${image.w500}${movie?.poster_path}`} /> : 
                <MovieListImage />
              }
              <MovieInfo>
                <Text movie>{movie?.title}</Text>
                {credits ? (
                  movie?.release_date ? (
                    <OptionalText movie>
                      {movie?.character || movie?.job} ({movie?.release_date.slice(0, 4)})
                    </OptionalText>
                  ) : (
                    <OptionalText movie>{movie?.character || movie?.job}</OptionalText>
                  )
                ) : movie?.release_date ? (
                  <OptionalText movie>{movie?.release_date.slice(0, 4)}</OptionalText>
                ) : (
                  ""
                )}
                {genres ? 
                  <Genres genres={genres} genreId={movie?.genre_ids} /> : 
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
          </StyledLink>
        ))}
      </MovieListContaier>
    </>
  );
};
