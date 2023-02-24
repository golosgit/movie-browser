import { createHashRouter, Navigate } from "react-router-dom";
import { DefaultError } from "../common/DefaultError";
import { MovieDetailsPage } from "../features/MovieDetailsPage";
import { MovieListPage } from "../features/MovieListPage";
import { PeopleListPage } from "../features/PeopleListPage";
import { PersonDetailsPage } from "../features/PersonDetailsPage";

export const toMovieList = "/movies";
export const toPeopleList = "/people";
export const toMovieDetails = "/movies/movie-details/:id";
export const toPersonDetails = "/people/person-details/:id";

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to={toMovieList} />,
    errorElement: <DefaultError defaultError="true" />,
  },
  {
    path: toMovieList,
    element: <MovieListPage />,
    errorElement: <DefaultError defaultError="true" />,
  },
  {
    path: toPeopleList,
    element: <PeopleListPage />,
    errorElement: <DefaultError defaultError="true" />,
  },
  {
    path: toMovieDetails,
    element: <MovieDetailsPage />,
    errorElement: <DefaultError defaultError="true" />,
  },
  {
    path: toPersonDetails,
    element: <PersonDetailsPage />,
    errorElement: <DefaultError defaultError="true" />,
  },
]);
