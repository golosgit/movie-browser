import { createHashRouter, Navigate } from "react-router-dom";
import { MovieListPage } from "./features/MovieListPage";
import { PeopleListPage } from "./features/PeopleListPage";
import { MovieDetailsPage } from "./features/MovieDetailsPage";
import { PersonDetailsPage } from "./features/PersonDetailsPage";

export const toMovieList = "/movies";
export const toPeopleList = "/people";
export const toMovieDetails = "/movies/movie-details/:id";
export const toPersonDetails = "/people/person-details/:id";

export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to={toMovieList} />,
  },
  {
    path: toMovieList,
    element: <MovieListPage />,
  },
  {
    path: toPeopleList,
    element: <PeopleListPage />,
  },
  {
    path: toMovieDetails,
    element: <MovieDetailsPage />,
  },
  {
    path: toPersonDetails,
    element: <PersonDetailsPage />,
  },
]);