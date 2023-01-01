import { createSlice }  from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    status: "initial",
},
  reducers: {
    fetchMovieList: () => ({
      status: "loading",
    }),
    fetchMovieListSuccess: (_, { payload: movieList }) => ({
      status: "success",
      movieList: movieList,
    }),
    fetchError: () => ({
      status: "error",
    }),
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchError } = movieListSlice.actions;

const selectMovieListState = state => state.movieList;

export const selectMovieList = state => selectMovieListState(state).movieList;
export const selectStatus = state => selectMovieListState(state).status;

export default movieListSlice.reducer;