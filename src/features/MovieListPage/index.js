import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "../../common/Navigation";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieList } from "../../common/MovieList";
import { Pagination } from "../../common/Paginaion";
import { fetchMovieList, selectMovieList, selectStatus } from "./movieListPageSlice";
import { selectGenres, fetchGenres } from "../../features/Genres/genresSlice";

export const MovieListPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);
  const genres = useSelector(selectGenres);
  const status = useSelector(selectStatus);
  
  useEffect(() => {
    dispatch(fetchMovieList());

    if (!genres) {
      dispatch(fetchGenres());
    }
  }, [dispatch, genres]);

  return (
    <>
      <Navigation />
      <Content status={status}>
        <MainWrapper>
          <MovieList
            title="Popular movies"
            movieList={movieList}
            hideMaxVotes
            listView="true"
            genres={genres}
          />
        <Pagination />
        </MainWrapper>
      </Content>
    </>
  );
};