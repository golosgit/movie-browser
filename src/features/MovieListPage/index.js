import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieList } from "../../common/MovieList";
import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Paginaion";
import { pageParamName, searchParamName } from "../../core/urlParams";
import { baseUrl, genres, apiKey, popularMovies } from "../api";
import { fetchData } from "../fetchData";

const createUrl = (...elements) => elements.join("");

export const MovieListPage = () => {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("initial");

  const pageNumber = params.get(pageParamName) || 1;
  const searchParam = params.get(searchParamName) || "";

  const [genresQuery, movieListQuery] = useQueries({
    queries: [
      {
        queryKey: ["genres"],
        queryFn: () => fetchData(createUrl(baseUrl, genres, apiKey)),
        staleTime: 1000 * 60 * 10,
        cacheTime: 1000 * 60 * 15,
      },
      {
        queryKey: ["movieList"],
        queryFn: () => fetchData(createUrl(baseUrl, popularMovies, apiKey)),
      },
    ],
  });

  useEffect(() => {
    if (pageNumber > movieListQuery.data?.total_pages) {
      setStatus("error");
    } else {
      setStatus(movieListQuery.status);
    }
  }, [movieListQuery.status, pageNumber, movieListQuery.data?.total_pages]);

  return (
    <>
      <Navigation />
      <Content 
        status={status} 
        message={searchParam}
      >
        <MainWrapper>
          <MovieList
            title={searchParam ? `Search results for "${searchParam}" (${movieListQuery.data?.total_results})` : `Popular movies`}
            movieList={movieListQuery.data?.results}
            hideMaxVotes="true"
            listView="true"
            genres={genresQuery.data?.genres}
          />
          <Pagination 
            page={movieListQuery.data?.page} 
            totalPages={movieListQuery.data?.total_pages} 
          />
        </MainWrapper>
      </Content>
    </>
  );
};
