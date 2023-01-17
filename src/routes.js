import { createHashRouter } from "react-router-dom";
import { MovieListPage } from "./features/MovieListPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <MovieListPage />,
  },
]);