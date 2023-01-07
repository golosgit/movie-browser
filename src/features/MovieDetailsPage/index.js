import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../common/Details";
import { Backdrop } from "./Backdrop";
import { PeopleList } from "../../common/PeopleList";
import { fetchMovieDetails, selectMovieDetails } from "./movieDetailsPageSlice";
import { MainWrapper } from "../../common/MainWrapper";


export const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);

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
      </MainWrapper>
    </>
  );
};