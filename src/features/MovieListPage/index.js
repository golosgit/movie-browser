import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieList } from "../../common/MovieList";
import { Navigation } from "../../common/Navigation";
import { Pagination } from "../../common/Paginaion";
import { pageParamName, searchParamName } from "../../core/urlParams";
import { baseUrl, genres, apiKey, popularMovies, searchMovies } from "../api";
import { createUrl } from "../createUrl";
import { fetchData } from "../fetchData";

export const MovieListPage = () => {
  const [params] = useSearchParams();
  const [queryStatus, setQueryStatus] = useState("initial");
  const queryClient = useQueryClient();

  const pageNumber = parseInt(params.get(pageParamName)) || 1;
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
        queryKey: ["movieList", { page: pageNumber, searchQuery: searchParam }],
        queryFn: searchParam ? 
          () => fetchData(createUrl(baseUrl, searchMovies, apiKey, "&page=", pageNumber, "&query=", searchParam)) :
          () => fetchData(createUrl(baseUrl, popularMovies, apiKey, "&page=", pageNumber)),
      },
    ],
  });

  useEffect(() => {
    if (pageNumber > movieListQuery.data?.total_pages) {
      setQueryStatus("error");
    } else {
      setQueryStatus(movieListQuery.status);

      if (pageNumber + 1 <= movieListQuery.data?.total_pages && pageNumber + 1 <= 500) {
        queryClient.prefetchQuery(
          ["movieList", { page: pageNumber + 1, searchQuery: searchParam }],
            searchParam ? 
              () => fetchData(createUrl(baseUrl, searchMovies, apiKey, "&page=", pageNumber + 1, "&query=", searchParam)) :
              () => fetchData(createUrl(baseUrl, popularMovies, apiKey, "&page=", pageNumber + 1)),
        )
      }
    }
  }, [movieListQuery.status, pageNumber, movieListQuery.data?.total_pages, searchParam, queryClient]);

  return (
    <>
      <Navigation />
      <Content 
        status={queryStatus} 
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
