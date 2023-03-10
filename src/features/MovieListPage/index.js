import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieList } from "../../common/MovieList";
import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Paginaion";
import { pageParamName, searchParamName } from "../../core/urlParams";
import { selectGenres, fetchGenres } from "../../features/Genres/genresSlice";
import { fetchMovieList, selectMovieList, selectPage, selectStatus, selectTotalPages, selectTotalResults, fetchError } from "./movieListPageSlice";

export const MovieListPage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(selectMovieList);
  const genres = useSelector(selectGenres);
  const status = useSelector(selectStatus);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const [params] = useSearchParams();

  const pageNumber = params.get(pageParamName) || 1;
  const searchParam = params.get(searchParamName) || "";

  if (pageNumber > totalPages) {
    dispatch(fetchError());
  }

  useEffect(() => {
    if (status !== "loading") {
      dispatch(fetchMovieList({ pageNumber, searchParam }));
    }

    if (!genres) {
      dispatch(fetchGenres());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, genres, pageNumber, searchParam]);

  return (
    <>
      <Navigation />
      <Content status={status} message={searchParam}>
        <MainWrapper>
          <MovieList
            title={searchParam ? `Search results for "${searchParam}" (${totalResults})` : `Popular movies`}
            movieList={movieList}
            hideMaxVotes="true"
            listView="true"
            genres={genres}
          />
          <Pagination page={page} totalPages={totalPages} />
        </MainWrapper>
      </Content>
    </>
  );
};
