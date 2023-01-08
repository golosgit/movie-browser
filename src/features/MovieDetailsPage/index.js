import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../common/Details";
import { Backdrop } from "./Backdrop";
import { PeopleList } from "../../common/PeopleList";
import { fetchMovieDetails, selectMovieDetails, selectCast, selectCrew } from "./movieDetailsPageSlice";
import { MainWrapper } from "../../common/MainWrapper";


export const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);

  useEffect(() => {
    dispatch(fetchMovieDetails(411));
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};