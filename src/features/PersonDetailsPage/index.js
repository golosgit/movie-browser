import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Content } from "../../common/Content";
import { Details } from "../../common/Details";
import { MainWrapper } from "../../common/MainWrapper";
import { MovieList } from "../../common/MovieList";
import { Navigation } from "../../common/Navigation";
import { toPeopleList } from "../../core/routes";
import { searchParamName } from "../../core/urlParams";
import { baseUrl, genres, apiKey } from "../api";
import { fetchData } from "../fetchData";
import { fetchPersonDetails, selectPersonDetails, selectCast, selectCrew, selectStatus } from "./personDetailsPageSlice";

export const PersonDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personDetails = useSelector(selectPersonDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);
  const [params] = useSearchParams();
  const { id } = useParams();

  const { data } = useQuery(
    ["genres"], 
    () => fetchData(`${baseUrl}${genres}${apiKey}`), 
    {
      staleTime: 1000 * 60 * 10,
      cacheTime: 1000 * 60 * 15,
    }
  );

  const searchParam = params.get(searchParamName) || "";

  useEffect(() => {
    if (!searchParam) {
      dispatch(fetchPersonDetails(id));
    } else {
      navigate(`${toPeopleList}?${searchParamName}=${searchParam}`);
    }
  }, [dispatch, id, searchParam, navigate]);

  return (
    <>
      <Navigation />
      <Content status={status}>
        <MainWrapper person>
          <Details 
            personDetails={personDetails} 
            person="true" 
          />
          <MovieList 
            title={`Movies - cast${` (${cast?.length})` || ``}`} 
            hideMaxVotes="true" 
            movieList={cast} 
            credits="true" 
            listView="true" 
            genres={data.genres} 
          />
          <MovieList 
            title={`Movies - crew${` (${crew?.length})` || ``}`} 
            hideMaxVotes="true" 
            movieList={crew} 
            credits="true" 
            listView="true" 
            genres={data.genres} 
          />
        </MainWrapper>
      </Content>
    </>
  );
};
