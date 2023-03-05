import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
    isPosting: false,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    getSongsFailure: (state, action) => {
      state.isLoading = false;
    },
    postSong(state) {
      if (state.isPosting === false) {
        state.isPosting = true;
      } else {
        return;
      }
    },
    postSongSuccess(state, action) {
      state.isPosting = false; // set the flag to false
      state.songs.push(action.payload);
    },
    deleteSong: (state) => {
      state.isLoading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.isLoading = false;
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
    updateSong(state) {
      if (state.isPosting === false) {
        state.isPosting = true;
      } else {
        return;
      }
    },
    updateSongSuccess(state, action) {
      state.isPosting = false;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongsFailure,
  postSong,
  postSongSuccess,
  postSongFailure,
  deleteSong,
  deleteSongSuccess,
  updateSong,
  updateSongSuccess,
} = songsSlice.actions;
export default songsSlice.reducer;
