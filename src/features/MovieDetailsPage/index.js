import { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { Content } from "../../common/Content";
import { Details } from "../../common/Details";
import { MainWrapper } from "../../common/MainWrapper";
import { Navigation } from "../../common/Navigation";
import { PeopleList } from "../../common/PeopleList";
import { toMovieList } from "../../core/routes";
import { searchParamName } from "../../core/urlParams";
import { apiKey, baseUrl, movieDetails, movieDetailsCredits } from "../api";
import { createUrl } from "../createUrl";
import { fetchData } from "../fetchData";
import { Backdrop } from "./Backdrop";

export const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { id } = useParams();

  const searchParam = params.get(searchParamName) || "";

  const [movieDetailsQuery, movieDetailsCreditsQuery] = useQueries({
    queries: [
      {
        queryKey: ["movieDetails"],
        queryFn: () => fetchData(createUrl(baseUrl, movieDetails, id, apiKey)),
      },
      {
        queryKey: ["movieDetailsCredits"],
        queryFn: () => fetchData(createUrl(baseUrl, movieDetails, id, movieDetailsCredits, apiKey)),
      },
    ],
  });

  useEffect(() => {
    if (searchParam) {
      navigate(`${toMovieList}?${searchParamName}=${searchParam}`);
    }
  }, [searchParam, navigate]);

  return (
    <>
      <Navigation />
      <Content status={movieDetailsQuery.fetchStatus === "fetching" ? "loading" : movieDetailsQuery.status}>
        {movieDetailsQuery.data?.backdrop_path ? 
          <Backdrop movieDetails={movieDetailsQuery.data} /> : 
          ""
        }
        <MainWrapper movie>
          <Details 
            movieDetails={movieDetailsQuery.data} 
            movie="true" 
          />
          <PeopleList 
            title="Cast" 
            peopleList={movieDetailsCreditsQuery.data?.cast} 
            listView="true" 
            credits="true" 
          />
          <PeopleList 
            title="Crew" 
            peopleList={movieDetailsCreditsQuery.data?.crew} 
            listView="true" 
            credits="true" 
          />
        </MainWrapper>
      </Content>
    </>
  );
};
