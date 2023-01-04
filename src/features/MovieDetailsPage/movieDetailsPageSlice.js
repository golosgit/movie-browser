import { createSlice }  from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "initial",
},
  reducers: {
    fetchMovieDetails: (_, { payload: id }) => ({
      status: "loading",
      movieId: id,
    }),
    fetchMovieDetailsSuccess: (_, { payload: results }) => ({
      status: "success",
      movieDetails: results.movieDetails,
      creditsCast: results.credits.cast,
      creditsCrew: results.credits.crew,
    }),
    fetchError: () => ({
      status: "error",
    }),
  },
});

export const { fetchMovieDetails, fetchMovieDetailsSuccess, fetchError } = movieDetailsSlice.actions;

const selectMovieDetailsState = state => state.movieDetails;

export const selectMovieDetails = state => selectMovieDetailsState(state).movieDetails;
export const selectStatus = state => selectMovieDetailsState(state).status;
export const selectMovieId = state => selectMovieDetailsState(state).movieId;

export default movieDetailsSlice.reducer;