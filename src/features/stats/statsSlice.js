import { createSlice } from "@reduxjs/toolkit";

export const statsSlice = createSlice({
  name: "stats",
  initialState: {
    stats: [],
    isLoading: false,
  },
  reducers: {
    getStatsFetch: (state) => {
      state.isLoading = true;
    },
    getStatsSuccess: (state, action) => {
      state.isLoading = false;
      state.stats = action.payload;
    },
    getStatsFailure: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { getStatsFetch, getStatsSuccess, getStatsFailure } =
  statsSlice.actions;
export default statsSlice.reducer;
