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
    fetchMovieListSuccess: (_, { payload: results }) => ({
      status: "success",
      movieList: results,
    }),
    fetchError: () => ({
      status: "error",
    }),
  },
});

export const { fetchMovieList, fetchMovieListSuccess, fetchError } = movieListSlice.actions;

const selectMovieListState = state => state.movieList;

export const selectMovieList = state => selectMovieListState(state).movieList?.results;
export const selectStatus = state => selectMovieListState(state).status;
export const selectPage = state => selectMovieListState(state).movieList?.page;
export const selectTotalPages = state => selectMovieListState(state).movieList?.total_pages;

export default movieListSlice.reducer;