import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../common/Details";
import { Backdrop } from "./Backdrop";
import { PeopleList } from "../../common/PeopleList";
import { fetchMovieDetails, selectMovieDetails } from "./movieDetailsPageSlice";
import { imageUrl, image, apiKey } from "../api";
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
        <Backdrop 
          image={`${imageUrl}${image.backdrop}${movieDetails?.backdrop_path}${apiKey}`}
        /> :
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