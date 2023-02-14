import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { Content } from "../../common/Content";
import { Details } from "../../common/Details";
import { Backdrop } from "./Backdrop";
import { PeopleList } from "../../common/PeopleList";
import { fetchMovieDetails, selectMovieDetails, selectCast, selectCrew, selectStatus } from "./movieDetailsPageSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { searchParamName } from "../../urlParams";
import { toMovieList } from "../../routes";

export const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movieDetails = useSelector(selectMovieDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);
  const [params] = useSearchParams();

  const searchParam = params.get(searchParamName) || "";

  const { id } = useParams();

  useEffect(() => {
    if (!searchParam) {
      dispatch(fetchMovieDetails(id));
    } else {
      navigate(`${toMovieList}?${searchParamName}=${searchParam}`);
    }
  }, [searchParam, navigate, dispatch, id]);

  return (
    <>
      <Navigation />
      <Content status={status}>
        {movieDetails?.backdrop_path ? 
          <Backdrop movieDetails={movieDetails} /> :
          ""
        }
        <MainWrapper movie>
          <Details
            movieDetails={movieDetails}
            movie="true"
          />
          <PeopleList
            title="Cast"
            peopleList={cast}
            listView="true"
            credits="true"
          />
          <PeopleList
            title="Crew"
            peopleList={crew}
            listView="true"
            credits="true"
          />
        </MainWrapper>
      </Content>
    </>
  );
};