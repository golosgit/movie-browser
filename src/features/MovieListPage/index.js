import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList, selectMovieList } from "./movieListPageSlice";
import { MovieList } from "../../common/MovieList";
import { selectGenres, fetchGenres } from "../../features/Genres/genresSlice";

export const MovieListPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);
  const genres = useSelector(selectGenres);
  
  useEffect(() => {
    dispatch(fetchMovieList());

    if (!genres) {
      dispatch(fetchGenres());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <MovieList
      title="Popular movies"
      movieList={movieList}
      hideMaxVotes
      listView="true"
      genres={genres}
    />
  );
};