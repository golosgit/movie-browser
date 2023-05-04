import { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { Content } from "../../common/Content";
import { Details } from "../../common/Details";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieList } from "../../common/MovieList";
import { Navigation } from "../../common/Navigation";
import { toPeopleList } from "../../core/routes";
import { searchParamName } from "../../core/urlParams";
import { baseUrl, genres, apiKey, personDetails, personDetailsCredits } from "../api";
import { fetchData } from "../fetchData";

const createUrl = (...elements) => elements.join("");

export const PersonDetailsPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { id } = useParams();

  const searchParam = params.get(searchParamName) || "";

  const [genresQuery, personDetailsQuery, personDetailsCreditsQuery] = useQueries({
    queries: [
      {
        queryKey: ["genres"],
        queryFn: () => fetchData(createUrl(baseUrl, genres, apiKey)),
        staleTime: 1000 * 60 * 10,
        cacheTime: 1000 * 60 * 15,
      },
      {
        queryKey: ["personDetails"],
        queryFn: () => fetchData(createUrl(baseUrl, personDetails, id, apiKey)),
      },
      {
        queryKey: ["personDetailsCredits"],
        queryFn: () => fetchData(createUrl(baseUrl, personDetails, id, personDetailsCredits, apiKey)),
      },
    ],
  });

  useEffect(() => {
    if (searchParam) {
      navigate(`${toPeopleList}?${searchParamName}=${searchParam}`);
    }
  }, [searchParam, navigate]);

  return (
    <>
      <Navigation />
      <Content status={personDetailsQuery.fetchStatus === "fetching" ? "loading" : personDetailsQuery.status}>
        <MainWrapper person>
          <Details personDetails={personDetailsQuery.data} person="true" />
          <MovieList
            title={`Movies - cast${` (${personDetailsCreditsQuery.data?.cast.length})` || ``}`}
            hideMaxVotes="true"
            movieList={personDetailsCreditsQuery.data?.cast}
            credits="true"
            listView="true"
            genres={genresQuery.data?.genres}
          />
          <MovieList
            title={`Movies - crew${` (${personDetailsCreditsQuery.data?.crew.length})` || ``}`}
            hideMaxVotes="true"
            movieList={personDetailsCreditsQuery.data?.crew}
            credits="true"
            listView="true"
            genres={genresQuery.data?.genres}
          />
        </MainWrapper>
      </Content>
    </>
  );
};
