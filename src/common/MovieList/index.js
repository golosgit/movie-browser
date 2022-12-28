import { MovieListContaier, MovieListTile, MovieListImage, MovieInfo } from "./styled";
import { Header } from "../../common/Header";
import { Text } from "../../common/Text";
import { OptionalText } from "../../common/OptionalText";
import { Genres } from "../../common/Genres";
import { Rating } from "../../common/Rating";

export const MovieList = ({ title }) => {
  return (
    <>
      <Header>{title}</Header>
      <MovieListContaier>
        <MovieListTile>
          <MovieListImage />
          <MovieInfo>
            <Text movie>Mulan</Text>
            <OptionalText movie>2020</OptionalText>
            <Genres />
            <Rating />
          </MovieInfo>
        </MovieListTile>
      </MovieListContaier>
    </>
  );
};