import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieList } from "./movieListPageSlice";
import { MovieList } from "../../common/MovieList";

export const MovieListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  });

  return (
    <MovieList>

    </MovieList>
  );
};