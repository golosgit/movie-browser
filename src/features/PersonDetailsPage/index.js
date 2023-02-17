import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { Content } from "../../common/Content";
import { MainWrapper } from "../../common/MainWrapper";
import { Details } from "../../common/Details";
import { MovieList } from "../../common/MovieList";
import { fetchPersonDetails, selectPersonDetails, selectCast, selectCrew, selectStatus } from "./personDetailsPageSlice";
import { selectGenres, fetchGenres } from "../Genres/genresSlice";
import { searchParamName } from "../../urlParams";
import { toPeopleList } from "../../routes";

export const PersonDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const personDetails = useSelector(selectPersonDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);
  const genres = useSelector(selectGenres);
  const [params] = useSearchParams();
  const { id } = useParams();

  const searchParam = params.get(searchParamName) || "";

  useEffect(() => {
    if (!searchParam) {
      dispatch(fetchPersonDetails(id));

      if (!genres) {
        dispatch(fetchGenres());
      }
    } else {
      navigate(`${toPeopleList}?${searchParamName}=${searchParam}`);
    }   
  }, [dispatch, id, genres, searchParam, navigate]);

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
            movieList={cast}
            credits="true"
            listView="true"
            genres={genres}
          />
          <MovieList 
            title={`Movies - crew${` (${crew?.length})` || ``}`}
            movieList={crew}
            credits="true"
            listView="true"
            genres={genres}
          />
        </MainWrapper>
      </Content>
    </>
  );
};