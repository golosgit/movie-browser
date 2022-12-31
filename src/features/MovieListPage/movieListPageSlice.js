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

export default movieListSlice.reducer;