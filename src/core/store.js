import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import movieDetailsReducer from "../features/MovieDetailsPage/movieDetailsPageSlice";
import peopleListReducer from "../features/PeopleListPage/peopleListPageSlice";
import personDetailsReducer from "../features/PersonDetailsPage/personDetailsPageSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    peopleList: peopleListReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
