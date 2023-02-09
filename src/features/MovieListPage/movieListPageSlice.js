import { createSlice }  from "@reduxjs/toolkit";

const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    status: "initial",
},
  reducers: {
    fetchMovieList: (_, { payload: { pageNumber, searchParam } }) => ({
      status: "loading",
      page: pageNumber,
      query: searchParam,
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

export const selectUrlPageParam = state => selectMovieListState(state).page;
export const selectUrlSearchParam = state => selectMovieListState(state).query;
export const selectMovieList = state => selectMovieListState(state).movieList?.results;
export const selectStatus = state => selectMovieListState(state).status;
export const selectPage = state => selectMovieListState(state).movieList?.page;
export const selectTotalPages = state => selectMovieListState(state).movieList?.total_pages;

export default movieListSlice.reducer;