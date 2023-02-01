import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieList } from "../../common/MovieList";
import { Pagination } from "../../common/Paginaion";
import { fetchMovieList, selectMovieList, selectPage, selectStatus, selectTotalPages } from "./movieListPageSlice";
import { selectGenres, fetchGenres } from "../../features/Genres/genresSlice";
import { pageParamName } from "../../urlParams";

export const MovieListPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);
  const genres = useSelector(selectGenres);
  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const [params] = useSearchParams();

  const pageNumber = params.get(pageParamName) || 1;

  useEffect(() => {
    if (status !== "loading") {
      dispatch(fetchMovieList(pageNumber));
    }

    if (!genres) {
      dispatch(fetchGenres());
    }
  }, [dispatch, genres, pageNumber]);

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
        <Pagination 
          page={page}
          totalPages={totalPages}
        />
        </MainWrapper>
      </Content>
    </>
  );
};