import { createSlice } from "@reduxjs/toolkit";

export const artistsSlice = createSlice({
  name: "artists",
  initialState: {
    artists: [],
    isLoading: false,
  },
  reducers: {
    getArtistsFetch: (state) => {
      state.isLoading = true;
    },
    getArtistsSuccess: (state, action) => {
      state.isLoading = false;
      state.artists = action.payload;
    },
    getArtistsFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getArtistsFetch, getArtistsSuccess, getArtistsFailure } =
  artistsSlice.actions;
export default artistsSlice.reducer;
