import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, selectMovieList } from "./movieListPageSlice";
import { MovieList } from "../../common/MovieList";

export const MovieListPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  return (
    <MovieList
      title="Popular movies"
      movieList={movieList}
      hideMaxVotes
      listView
    />
  );
};