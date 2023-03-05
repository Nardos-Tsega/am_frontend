import { createSlice } from "@reduxjs/toolkit";

export const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    isLoading: false,
  },
  reducers: {
    getAlbumsFetch: (state) => {
      state.isLoading = true;
    },
    getAlbumsSuccess: (state, action) => {
      state.isLoading = false;
      state.albums = action.payload;
    },
    getAlbumsFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getAlbumsFetch, getAlbumsSuccess, getAlbumsFailure } =
  albumsSlice.actions;
export default albumsSlice.reducer;
