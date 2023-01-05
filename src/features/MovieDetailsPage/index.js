import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../common/Details";
import { PeopleList } from "../../common/PeopleList";
import { fetchMovieDetails, selectMovieDetails } from "./movieDetailsPageSlice";


export const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(411));
  }, [dispatch]);

  return (
    <Details
      movieDetails={movieDetails}
      movie="true"
    />
  );
};