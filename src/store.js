import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import genresReducer from "./features/Genres/genresSlice";
import movieListReducer from "./features/MovieListPage/movieListPageSlice";
import peopleListReducer from "./features/PeopleListPage/peopleListPageSlice";
import movieDetailsReducer from "./features/MovieDetailsPage/movieDetailsPageSlice";
import personDetailsReducer from "./features/PersonDetailsPage/personDetailsPageSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    genres: genresReducer,
    movieList: movieListReducer,
    peopleList: peopleListReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;