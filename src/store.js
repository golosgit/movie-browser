import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListReducer from "./features/MovieListPage/movieListPageSlice";
import genresReducer from "./features/Genres/genresSlice";
import peopleListReducer from "./features/PeopleListPage/peopleListPageSlice";
import movieDetailsReducer from "./features/MovieDetailsPage/movieDetailsPageSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    genres: genresReducer,
    peopleList: peopleListReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;