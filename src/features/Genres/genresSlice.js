import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: null,
  },
  reducers: {
    fetchGenres: () => {},
    fetchGenresSuccess: (_, { payload: genres }) => ({
      genres: genres,
    }),
  },
});

export const { fetchGenres, fetchGenresSuccess } = genresSlice.actions;

const selectGenresState = state => state.genres;

export const selectGenres = state => selectGenresState(state).genres;

export default genresSlice.reducer;
