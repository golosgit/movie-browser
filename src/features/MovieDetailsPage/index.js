import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "../../common/Content";
import { Details } from "../../common/Details";
import { Backdrop } from "./Backdrop";
import { PeopleList } from "../../common/PeopleList";
import { fetchMovieDetails, selectMovieDetails, selectCast, selectCrew, selectStatus } from "./movieDetailsPageSlice";
import { MainWrapper } from "../../common/MainWrapper";


export const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchMovieDetails(411));
  }, [dispatch]);

  return (
    <Content status={status}>
      {movieDetails?.backdrop_path ? 
        <Backdrop movieDetails={movieDetails} /> :
        ""
      }
      <MainWrapper>
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
  );
};