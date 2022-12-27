import { MovieListContaier, MovieListTile, MovieListImage, MovieInfo } from "./styled";
import { Header } from "../../common/Header";
import { Text } from "../../common/Text";
import { OptionalText } from "../../common/OptionalText";
import poster from "./poster.png";

export const MovieList = ({ title }) => {
  return (
    <>
      <Header>{title}</Header>
      <MovieListContaier>
        <MovieListTile>
          <MovieListImage />
          <MovieInfo>
            <Text>Mulan</Text>
            <OptionalText>2020</OptionalText>
          </MovieInfo>
        </MovieListTile>

        <MovieListTile>
          <MovieListImage src={poster} />
          <MovieInfo>
            <Text>Mulan</Text>
            <OptionalText>2020</OptionalText>
          </MovieInfo>
        </MovieListTile>

        <MovieListTile>
          <MovieListImage />
          <MovieInfo>
            <Text>Mulan</Text>
            <OptionalText>2020</OptionalText>
          </MovieInfo>
        </MovieListTile>

        <MovieListTile>
          <MovieListImage />
        </MovieListTile>

        <MovieListTile>
          <MovieListImage />
        </MovieListTile>
      </MovieListContaier>
    </>
  );
};