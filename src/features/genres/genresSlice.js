import { createSlice } from "@reduxjs/toolkit";

export const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    isLoading: false,
  },
  reducers: {
    getGenresFetch: (state) => {
      state.isLoading = true;
    },
    getGenresSuccess: (state, action) => {
      state.isLoading = false;
      state.genres = action.payload;
    },
    getGenresFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getGenresFetch, getGenresSuccess, getGenresFailure } =
  genresSlice.actions;
export default genresSlice.reducer;
